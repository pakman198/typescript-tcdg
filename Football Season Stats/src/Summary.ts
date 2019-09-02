import { MatchData } from './MatchData';
import { GamesWonAnalysis } from './analyzers/GamesWonAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  
  static gamesWonAanlysis(team: string): Summary {
    return new Summary( new GamesWonAnalysis(team), new ConsoleReport());
  }

  constructor (public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    
    this.outputTarget.print(report);
  }
}