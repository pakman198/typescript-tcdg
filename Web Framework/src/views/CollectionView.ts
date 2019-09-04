import { Collection } from '../models/Collection'

export abstract class CollectionView<T,K> {
  
  constructor(public parent: Element, public collection: Collection<T,K>) {

  }

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateEl = document.createElement('template');

    for(let model of this.collection.models) {
      const wrapper = document.createElement('div');
      this.renderItem(model, wrapper);
      templateEl.content.append(wrapper);
    }

    this.parent.append(templateEl.content);
  }
}