import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Quests", href: "/quests" },
  { name: "Profile", href: "/profile" },
  { name: "Shop", href: "/shop" },
  { name: "Aurelius", href: "/aurelius" },
  { name: "Settings", href: "/settings" },
  { name: "Support", href: "/support" },
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
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white hover:bg-purple-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div className="p-8 space-y-6">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-bold transition-all duration-200 ${
                  isActive 
                    ? "text-purple-600 underline decoration-4 underline-offset-4" 
                    : "text-purple-600 hover:text-purple-800"
                }`}
              >
                {item.name}
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