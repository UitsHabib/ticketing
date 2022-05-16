import { Subjects, Publisher, PaymentCreatedEvent } from "@bhticket/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}