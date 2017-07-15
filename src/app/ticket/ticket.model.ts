
export class Ticket {

    id: number;
    account_id: number;
    name: string;
    content: string;
    assigned_user_id: number;
    status: string;
    priority: string;
    read: boolean;
    deleted: boolean;
    date_created: number;
    date_modified: number;

    constructor() {}
}