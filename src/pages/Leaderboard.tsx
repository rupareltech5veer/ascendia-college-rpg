import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Import avatar images
import aureliusAvatar from "@/assets/character-warrior.png";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.png";
import avatar5 from "@/assets/avatar5.png";
import avatar6 from "@/assets/avatar6.png";
import avatar7 from "@/assets/avatar7.png";
import avatar8 from "@/assets/avatar8.png";

const avatarImages = [aureliusAvatar, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8];

const leaderboardData = [
  {
    rank: 1,
    username: "ALFREDO",
    xp: "1,000,000",
    achievements: "EARLY BIRD, TOP 3",
    avatar: aureliusAvatar
  },
  {
    rank: 2,
    username: "QUEEN",
    xp: "900,808",
    achievements: "TOP 3 FOR 2 WEEKS",
    avatar: avatar3
  },
  {
    rank: 3,
    username: "PAWN",
    xp: "765,321",
    achievements: "FAST RISER",
    avatar: avatar7
  },
  {
    rank: 4,
    username: "ROOK",
    xp: "709,456",
    achievements: "EARLY BIRD, ON A ROLL",
    avatar: avatar2
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
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={entry.avatar} alt={entry.username} />
                      <AvatarFallback>{entry.username.slice(0, 2)}</AvatarFallback>
                    </Avatar>
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