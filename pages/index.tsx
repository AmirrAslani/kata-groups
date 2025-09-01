import MatchCard from '@/lib/components/kata/match-card/MatchCard';
import { LoginInfo } from "@/i18n/components/kata/login.i18n";
import { useTranslation } from '@/helper/translate';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6">
        <MatchCard
          league="Premier League"
          team1="Manchester United"
          team2="Chelsea"
          matchTime="21:45"
          odds={{ team1: 2.3, draw: 3.1, team2: 2.8 }}
        />

        <div>{t(LoginInfo.error)}</div>
      </div>
    </>
  );
}