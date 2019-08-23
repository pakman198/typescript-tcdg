import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const { data } = this;
    return data[leftIndex] > data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const { data } = this;
    const leftHand = this.data[leftIndex];
    data[leftIndex] = data[rightIndex];
    data[rightIndex] = leftHand;
  }
}
