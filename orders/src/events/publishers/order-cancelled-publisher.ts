import { Publisher, OrderCancelledEvent, Subjects } from "@bhticket/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}