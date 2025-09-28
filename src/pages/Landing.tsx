import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ascendiaLogo from "@/assets/ascendia-logo.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-ascendia relative overflow-hidden">
      {/* Navigation */}
      <nav className="w-full p-6 z-20 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">ascendia</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <span className="text-foreground">DOWNLOAD</span>
              <span className="text-foreground">▼</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-foreground">SUPPORT</span>
              <span className="text-foreground">▼</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-foreground">ABOUT</span>
              <span className="text-foreground">▼</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-foreground">REVIEWS</span>
              <span className="text-foreground">▼</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-foreground">LEADERBOARD</span>
              <span className="text-foreground">▼</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src={ascendiaLogo} 
            alt="Ascendia Logo" 
            className="w-80 h-80 object-contain drop-shadow-2xl"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 mb-16">
          <Link to="/login">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              LOGIN
            </Button>
          </Link>
          <Link to="/character-selection">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              SIGNUP
            </Button>
          </Link>
        </div>

        {/* Tagline */}
        <div className="max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
            Turn every assignment into a quest, earn points, level up, 
            and compete with classmates in a gamified academic arena 
            guided by your personal AI mentor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;