import { CSVFileReader } from './CSVFileReader';

const reader = new CSVFileReader('football.csv');
reader.read();

console.log(reader.data)