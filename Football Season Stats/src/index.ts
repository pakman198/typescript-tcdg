import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(matchReader.matches)