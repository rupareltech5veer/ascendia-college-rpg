import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const leaderboardData = [
  {
    rank: 1,
    username: "KING",
    xp: "1,000,000",
    achievements: "EARLY BIRD, TOP 3",
    avatar: "🏆"
  },
  {
    rank: 2,
    username: "QUEEN",
    xp: "900,808",
    achievements: "TOP 3 FOR 2 WEEKS",
    avatar: "👑"
  },
  {
    rank: 3,
    username: "PAWN",
    xp: "765,321",
    achievements: "FAST RISER",
    avatar: "⚔️"
  },
  {
    rank: 4,
    username: "ROOK",
    xp: "709,456",
    achievements: "EARLY BIRD, ON A ROLL",
    avatar: "🛡️"
  }
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("WEEKLY");
  const tabs = ["WEEKLY", "MONTHLY", "GLOBAL"];

  return (
    <div className="min-h-screen bg-ascendia">
      <Sidebar />
      
      <div className="md:ml-64 p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="glass">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-5xl font-bold text-foreground">Leaderboard</h1>
        </div>

        {/* Main Content */}
        <div className="glass-strong rounded-2xl p-8 border border-glass-border/30">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className="rounded-full px-6"
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Table Header */}
          <div className="glass rounded-lg p-4 mb-4">
            <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              <span>AVATAR</span>
              <span>USERNAME</span>
              <span>RANK</span>
              <span>XP</span>
              <span>ACHIEVEMENTS</span>
            </div>
          </div>

          {/* Leaderboard Entries */}
          <div className="space-y-2">
            {leaderboardData.map((entry) => (
              <div
                key={entry.rank}
                className="glass-strong rounded-lg p-4 border border-glass-border/20 hover:border-primary/40 transition-all duration-200"
              >
                <div className="grid grid-cols-5 gap-4 items-center">
                  {/* Avatar */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                      {entry.avatar}
                    </div>
                  </div>

                  {/* Username */}
                  <div className="text-foreground font-bold text-lg">
                    {entry.username}
                  </div>

                  {/* Rank */}
                  <div className="text-2xl font-bold text-primary">
                    {entry.rank}
                  </div>

                  {/* XP */}
                  <div className="text-foreground font-mono text-lg">
                    {entry.xp}
                  </div>

                  {/* Achievements */}
                  <div className="text-muted-foreground text-sm">
                    {entry.achievements}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;