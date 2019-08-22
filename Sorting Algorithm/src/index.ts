import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const collection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection);

const characters = new CharactersCollection("JSAgiut");
const charactersSorter = new Sorter(characters);
charactersSorter.sort();

console.log(charactersSorter.collection);
