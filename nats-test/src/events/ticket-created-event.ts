import { Subjects } from "./subjects";

export interface TicketCreatedEvent {
    subject: Subjects.TickietCreated;
    data: {
        id: string;
        title: string;
        price: number;
    }
}