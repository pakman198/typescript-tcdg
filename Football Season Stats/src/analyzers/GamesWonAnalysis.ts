import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResults } from '../MatchResults';

export class GamesWonAnalysis implements Analyzer {
  constructor(public team: string) {}
  
  run(matches: MatchData[]): string {
    let gamesWon = 0;
    for(let match of matches) {
      if(match[1] === this.team && match[5] === MatchResults.HOME) {
        gamesWon++;
      } else if(match[2] === this.team && match[5] === MatchResults.AWAY) {
        gamesWon++;
      }
    }

    return `Team ${this.team} won ${gamesWon} games.`;
  }
}