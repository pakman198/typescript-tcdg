import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const collection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection);

const characters = new CharactersCollection("JSAgiut");
const charactersSorter = new Sorter(characters);
charactersSorter.sort();

console.log(charactersSorter.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(200);
linkedList.add(-100);
linkedList.add(0);
linkedList.add(-50);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
