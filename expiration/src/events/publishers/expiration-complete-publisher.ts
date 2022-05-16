import { Publisher, ExpirationCompleteEvent, Subjects } from "@bhticket/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}