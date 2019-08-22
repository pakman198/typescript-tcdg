import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const collection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection);
