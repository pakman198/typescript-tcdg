import { MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv');
reader.read();

console.log(reader.data[0])