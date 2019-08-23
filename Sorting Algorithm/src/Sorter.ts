export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;

  abstract swap(leftIndex: number, rightIndex: number): void;

  abstract length: number;

  sort() {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
