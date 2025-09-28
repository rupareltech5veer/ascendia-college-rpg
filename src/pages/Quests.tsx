import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Quests = () => {
  return (
    <div className="min-h-screen bg-ascendia">
      <Sidebar />
      
      <div className="md:ml-64 p-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="glass">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-5xl font-bold text-foreground">Quests</h1>
        </div>

        <div className="glass-strong rounded-2xl p-8 border border-glass-border/30">
          <p className="text-foreground text-center text-xl">
            Quest system coming soon! Complete assignments to earn XP and unlock rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quests;