import { Callback } from './Eventing';
import { AxiosPromise, AxiosResponse } from 'axios';
import { Attributes } from './Attributes';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(e: string, callback: Callback ): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {

  constructor(
    private attributes: Attributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.set;

  set(update: T): void {
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
      this.set(response.data);
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
    .then((response: AxiosResponse): void => {
      this.trigger('save');
    });
  }
  
}