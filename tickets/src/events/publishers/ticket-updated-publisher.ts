import { Publisher, Subjects, TicketUpdatedEvent } from "@bhticket/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}