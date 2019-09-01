import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';
import { GamesWonAnalysis } from './analyzers/GamesWonAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


const summary = new Summary( 
  new GamesWonAnalysis('Man United'), 
  new HTMLReport()
);

summary.buildAndPrintReport(matchReader.matches);

