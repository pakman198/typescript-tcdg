import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection("JSAgiut");
characters.sort();
console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(200);
linkedList.add(-100);
linkedList.add(0);
linkedList.add(-50);

linkedList.sort();
linkedList.print();
