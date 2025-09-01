export interface ILoginState {
  username: string;
  password: string;
  error: string;
}

export interface IMatchCard {
  league: string;
  team1: string;
  team2: string;
  matchTime: string;
  odds: {
    team1: number;
    draw: number;
    team2: number;
  };
};