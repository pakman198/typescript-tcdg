
import { Model } from '../models/Model';

// this generic uses another generic, that's why 
// first we declare a constraint that says T extends from another 
// generic class, and that generic class expects a type, which is
// passed as a second argument on the initial constraint
export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {}

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  regionsMap(): { [key: string]: string } {
    return { }
  }

  eventsMap(): { [key: string]: () => void } {
    return { }
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap  = this.eventsMap();

    for(let eventKey in eventsMap) {
      const [ eventName, selector ] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(el => {
        el.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    
    for(let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      
      if(element) {

        this.regions[key] = element;
      }
    }

  }

  onRender(): void {

  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}