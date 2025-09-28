import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Sword, 
  User, 
  ShoppingBag, 
  Sparkles, 
  Settings, 
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Quests", href: "/quests", icon: Sword },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Aurelius", href: "/aurelius", icon: Sparkles },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Support", href: "/support", icon: HelpCircle },
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 glass"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full w-64 glass-strong border-r border-glass-border/30 transition-transform duration-300 z-40",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6 space-y-4">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-primary/20 border border-primary/40 text-primary" 
                    : "text-foreground hover:bg-glass/30 hover:text-primary"
                )}
              >
                <IconComponent className="h-5 w-5" />
                <span className="font-medium text-lg">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;