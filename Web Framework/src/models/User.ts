import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

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

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.set;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if(typeof id !== 'number') {
      throw new Error("Can't fetch without an id");
    }

    this.sync.fetch(id)
    .then((response: AxiosResponse): void => {
      this.attributes.set(response.data);
    })
  }
}