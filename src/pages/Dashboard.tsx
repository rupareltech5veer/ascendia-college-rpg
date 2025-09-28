import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Sidebar from "@/components/Sidebar";
import knightAvatar from "@/assets/character-knight.png";
import aureliusAvatar from "@/assets/aurelius-avatar.png";

const Dashboard = () => {
  const [coins, setCoins] = useState(300);
  const [gems, setGems] = useState(23);
  const [level, setLevel] = useState(13);
  const [xp, setXp] = useState(140);
  const [maxXp, setMaxXp] = useState(500);

  const quests = [
    "CSE 110: QUIZ 1",
    "ASU 101: PLAN YOUR FLOWCHART",
    "MAT 265: HOMEWORK 1.4"
  ];

  const ranks = ["Veteran", "CS", "Sophomore", "Ranker"];

  return (
    <div className="min-h-screen bg-ascendia">
      <Sidebar />
      
      <div className="md:ml-64 p-6">
        {/* Top Stats Bar */}
        <div className="flex justify-end items-center gap-4 mb-8">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            <span className="text-foreground font-bold">{coins}</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            <span className="text-foreground font-bold">{gems}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Character Profile Card */}
          <div className="glass-strong rounded-2xl p-8 border border-glass-border/30">
            <div className="flex flex-col items-center">
              {/* Character Avatar */}
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full border-4 border-primary/60 p-2 bg-gradient-primary">
                  <img
                    src={knightAvatar}
                    alt="Character Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Character Info */}
              <h2 className="text-4xl font-bold text-foreground mb-2">Alfredo</h2>
              <p className="text-xl text-muted-foreground mb-4">Level {level}</p>

              {/* XP Progress Bar */}
              <div className="w-full mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{xp}/{maxXp} xp</span>
                </div>
                <Progress 
                  value={(xp / maxXp) * 100} 
                  className="h-3 bg-muted/30"
                />
              </div>

              {/* Rank Badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                {ranks.map((rank, index) => (
                  <Button key={index} variant="outline" size="sm" className="rounded-full">
                    {rank}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Quests */}
            <div className="glass-strong rounded-2xl p-6 border border-glass-border/30">
              <h3 className="text-3xl font-bold text-foreground mb-6">Upcoming Quests</h3>
              <div className="space-y-3">
                {quests.map((quest, index) => (
                  <Button
                    key={index}
                    variant="quest"
                    className="w-full justify-start h-12 text-left"
                  >
                    {quest}
                  </Button>
                ))}
              </div>
            </div>

            {/* AI Mentor */}
            <div className="glass-strong rounded-2xl p-6 border border-glass-border/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-primary/60 p-1 bg-gradient-primary">
                    <img
                      src={aureliusAvatar}
                      alt="Aurelius"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-foreground mb-2">Aurelius</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Hail, warrior of knowledge! I am Aurelius, your battle-hardened guide 
                    in this arena of intellect. Each assignment you conquer, each project 
                    you master, strengthens your resolve and raises your rank. Follow my 
                    counsel, strike swiftly, and ascend the leaderboard. Victory awaits those bold 
                    enough to claim it. Now, traveler... are you ready to earn your glory?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;