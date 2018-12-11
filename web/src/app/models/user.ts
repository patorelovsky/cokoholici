import { Authority } from './authority';

export class User {
    username: String;
    firstname: String;
    lastname: String;
    email: String;
    authorities: Authority[];
    enabled: Boolean;
}
