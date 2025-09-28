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
    achievements: "EARLY BIRD, TOP 3"
  },
  {
    rank: 2,
    username: "QUEEN",
    xp: "900,808",
    achievements: "TOP 3 FOR 2 WEEKS"
  },
  {
    rank: 3,
    username: "PAWN",
    xp: "765,321",
    achievements: "FAST RISER"
  },
  {
    rank: 4,
    username: "ROOK",
    xp: "709,456",
    achievements: "EARLY BIRD, ON A ROLL"
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
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-8 w-8" />
            </Button>
          </Link>
          <h1 className="text-6xl font-bold text-foreground">Leaderboard</h1>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-8 py-3 text-lg font-medium ${
                  activeTab === tab 
                    ? "bg-white text-black hover:bg-gray-100" 
                    : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Table Header */}
          <div className="bg-white rounded-2xl p-6 mb-4">
            <div className="grid grid-cols-5 gap-6 text-lg font-bold text-black uppercase tracking-wider">
              <span>AVATAR</span>
              <span>USERNAME</span>
              <span>RANK</span>
              <span>XP</span>
              <span>ACHIEVEMENTS</span>
            </div>
          </div>

          {/* Leaderboard Entries */}
          <div className="space-y-3">
            {leaderboardData.map((entry) => (
              <div
                key={entry.rank}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="grid grid-cols-5 gap-6 items-center">
                  {/* Avatar */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20"></div>
                    </div>
                  </div>

                  {/* Username */}
                  <div className="text-white font-bold text-xl">
                    {entry.username}
                  </div>

                  {/* Rank */}
                  <div className="text-3xl font-bold text-white">
                    {entry.rank}
                  </div>

                  {/* XP */}
                  <div className="text-white font-mono text-xl">
                    {entry.xp}
                  </div>

                  {/* Achievements */}
                  <div className="text-white/80 text-base">
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