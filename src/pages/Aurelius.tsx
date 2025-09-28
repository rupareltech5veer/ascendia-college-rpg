import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import aureliusAvatar from "@/assets/aurelius-avatar.png";

const Aurelius = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Sidebar />
      
      <div className="md:ml-64 p-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="glass">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-5xl font-bold text-foreground">Aurelius</h1>
        </div>

        <div className="glass-strong rounded-2xl p-8 border border-glass-border/30">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full border-4 border-primary/60 p-2 bg-gradient-primary mb-6">
              <img
                src={aureliusAvatar}
                alt="Aurelius"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Your AI Mentor</h2>
            <p className="text-foreground text-xl max-w-2xl">
              Chat with Aurelius, your personal AI guide who will help you navigate 
              your academic journey, provide study tips, and motivate you to achieve greatness!
            </p>
            <p className="text-muted-foreground mt-4">
              AI Chat interface coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aurelius;