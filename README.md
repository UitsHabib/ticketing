## E-Commerce app using Microservices built with Node, React, Docker and Kubernetes

## Local Environment Setup

- [Git](https://git-scm.com/)
- [Node.js v14.5.0](https://nodejs.org/en/)
- [Yarn v1.22.5](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [PostgreSQL v12](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [pgAdmin](https://www.pgadmin.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Environment Variables for Local Development

> Create a .env file and adjust the following environment variables. DONOT include the file in the source control.

```bash
PORT=<value>

AWS_REGION=<value>
AWS_SECRET_NAME=<value>
AWS_ACCESS_KEY_ID=<value>
AWS_SECRET_ACCESS_KEY=<value>

RECAPTCHA_SITE_KEY=<value>

POSTGRES_CDP_URL=<value>
POSTGRES_DATASYNC_URL=<value>
```

## NPM Scripts

```bash
$ yarn install          # install dependencies
$ yarn seed             # generate required database schemas
$ yarn start            # development build
$ yarn production       # production build
$ yarn test             # run unit tests
$ yarn sonarqube        # generate sonarqube analysis
```

## API Documentation

Go to `/api-docs` for Swagger Documentation of the API.
