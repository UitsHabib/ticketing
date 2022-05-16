import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

declare global {
    var signin: () => string[];
}

jest.mock('../nats-wrapper.ts');

jest.setTimeout(20000);

let mongo: any;


beforeAll(async () => {
    process.env.JWT_KEY = 'asdf';

    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });
});

beforeEach(async () => {
    jest.clearAllMocks();
    
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});

global.signin = () => {
    // Build a JWT palyload. { id, email }
    const palyload = {
        id: new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com'
    };
    
    // Create the JWT!
    const token = jwt.sign(palyload, process.env.JWT_KEY!);

    // Build session Objectt. { jwt: MY_JWT }
    const session = { jwt: token };

    // Turn that session into JSON
    const sessionJSON = JSON.stringify(session);

    // Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJSON).toString('base64');

    // return a string thats tha cookie with the encoded data
    return [`session=${base64}`];
}