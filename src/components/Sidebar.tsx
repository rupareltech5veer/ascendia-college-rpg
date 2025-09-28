import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu,
  X,
  Crown,
  Sword,
  User,
  ShoppingBag,
  Sparkles,
  Settings,
  Shield,
  Trophy
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy, description: "Champions Hall" },
  { name: "Quests", href: "/quests", icon: Sword, description: "Epic Adventures" },
  { name: "Profile", href: "/profile", icon: User, description: "Hero Profile" },
  { name: "Shop", href: "/shop", icon: ShoppingBag, description: "Mystical Merchant" },
  { name: "Aurelius", href: "/aurelius", icon: Sparkles, description: "AI Mentor" },
  { name: "Settings", href: "/settings", icon: Settings, description: "Guild Settings" },
  { name: "Support", href: "/support", icon: Shield, description: "Royal Guard" },
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button - Medieval Style */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 glass-strong border border-glass-border/50 text-foreground hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Medieval Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 glass-strong border-r border-glass-border/30 transition-all duration-500 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        
        {/* Royal Header */}
        <div className="p-6 border-b border-glass-border/30">
          <div className="flex items-center gap-3 mb-2">
            <Crown className="h-8 w-8 text-primary glow" />
            <h1 className="text-2xl font-bold text-foreground">Ascendia</h1>
          </div>
          <p className="text-sm text-muted-foreground italic">Rise to Greatness</p>
        </div>

        {/* Navigation Menu */}
        <div className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? "bg-primary/20 border border-primary/40 text-primary shadow-glow" 
                    : "hover:bg-glass-border/20 hover:border-glass-border/40 border border-transparent text-foreground"
                }`}
              >
                {/* Mystical Icon */}
                <div className={`p-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? "bg-primary/30 text-primary" 
                    : "bg-glass-border/20 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
                }`}>
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className={`font-semibold text-lg transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}>
                    {item.name}
                  </div>
                  <div className="text-xs text-muted-foreground opacity-75">
                    {item.description}
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="w-1 h-8 bg-gradient-primary rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom Mystical Decoration */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="glass rounded-lg p-4 border border-glass-border/30">
            <div className="flex items-center gap-2 text-center">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-xs text-muted-foreground italic flex-1">
                "Knowledge is the sharpest sword"
              </span>
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Mystical Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;