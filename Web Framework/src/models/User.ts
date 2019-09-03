import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootURL = "http://localhost:3000/users";

export class User {

  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(rootURL);
  attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}