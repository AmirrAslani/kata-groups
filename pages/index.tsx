import Head from 'next/head';
import MatchCard from '@/lib/components/kata/match-card/MatchCard';
import { useTranslation } from '@/helper/translate';
import { HomeInfo } from '@/i18n/pages/kata/home.i18n';

export default function Home() {
  const { t } = useTranslation();
  const matchData = [
    {
      league: "Premier League",
      team1: "Manchester United",
      team2: "Chelsea",
      matchTime: "21:45",
      odds: { team1: 2.3, draw: 3.1, team2: 2.8 }
    },
    {
      league: "La Liga",
      team1: "Real Madrid",
      team2: "Barcelona",
      matchTime: "22:00",
      odds: { team1: 2.1, draw: 3.4, team2: 3.2 }
    },
    {
      league: "Bundesliga",
      team1: "Bayern Munich",
      team2: "Borussia Dortmund",
      matchTime: "20:30",
      odds: { team1: 1.8, draw: 3.6, team2: 4.1 }
    },
    {
      league: "Serie A",
      team1: "Juventus",
      team2: "AC Milan",
      matchTime: "21:00",
      odds: { team1: 2.5, draw: 3.0, team2: 2.9 }
    },
    {
      league: "Ligue 1",
      team1: "PSG",
      team2: "Marseille",
      matchTime: "22:15",
      odds: { team1: 1.6, draw: 3.8, team2: 5.2 }
    },
    {
      league: "Champions League",
      team1: "Liverpool",
      team2: "Manchester City",
      matchTime: "23:00",
      odds: { team1: 2.7, draw: 3.2, team2: 2.6 }
    }
  ];

  return (
    <>
      <Head>
        <title>Bet365 - Live Sports Betting</title>
        <meta name="description" content="Live sports betting on Premier League, La Liga, Champions League and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Bet365 - Live Sports Betting" />
        <meta property="og:description" content="Live sports betting on Premier League, La Liga, Champions League and more." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            {t(HomeInfo.liveMatches)}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchData.map((match, index) => (
              <MatchCard
                key={index}
                league={match.league}
                team1={match.team1}
                team2={match.team2}
                matchTime={match.matchTime}
                odds={match.odds}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}