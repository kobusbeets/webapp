export class User {

    //database table user
    id: number;
    username: string;
    password: string;
    date_created: number;
    date_modified: number;
    deleted: boolean;

    //database table user_meta
    email: string;
    email_code: string;
    email_verified: boolean;
    mobile: string;
    mobile_code: string;
    mobile_verified: boolean;
    firstname: string;
    lastname: string;
    
}