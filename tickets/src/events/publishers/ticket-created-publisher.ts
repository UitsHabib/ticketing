import { Publisher, Subjects, TicketCreatedEvent } from "@bhticket/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TickietCreated;
}