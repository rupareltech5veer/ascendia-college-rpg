import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const shopItems = [
  {
    id: 1,
    name: "Epic Frame",
    price: "10",
    image: "placeholder"
  },
  {
    id: 2,
    name: "Epic Frame",
    price: "10",
    image: "placeholder"
  },
  {
    id: 3,
    name: "Epic Frame",
    price: "10",
    image: "placeholder"
  },
  {
    id: 4,
    name: "Epic Frame",
    price: "10",
    image: "placeholder"
  }
];

const Shop = () => {
  const [coins] = useState(300);
  const [gems] = useState(23);

  return (
    <div className="min-h-screen bg-ascendia">
      <Sidebar />
      
      <div className="md:ml-64 p-6">
        {/* Header with Stats */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-8 w-8" />
              </Button>
            </Link>
            <h1 className="text-6xl font-bold text-foreground">Shop</h1>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              <span className="text-white font-bold text-lg">{coins}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <span className="text-white font-bold text-lg">{gems}</span>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <Button 
            variant="outline" 
            className="bg-white text-black border-white hover:bg-gray-100 rounded-full px-6 py-3 text-base font-medium"
          >
            Featured <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            className="bg-white text-black border-white hover:bg-gray-100 rounded-full px-6 py-3 text-base font-medium"
          >
            Price <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            className="bg-white text-black border-white hover:bg-gray-100 rounded-full px-6 py-3 text-base font-medium"
          >
            Currency <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Shop Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopItems.map((item) => (
            <div key={item.id} className="text-center">
              {/* Item Card */}
              <div className="bg-gradient-to-b from-blue-200 to-green-300 rounded-3xl p-8 mb-4 h-64 flex items-center justify-center">
                {/* Placeholder for item image */}
                <div className="w-full h-full bg-white/30 rounded-2xl flex items-center justify-center">
                  <div className="w-20 h-12 bg-white/50 rounded-lg"></div>
                </div>
              </div>
              
              {/* Item Info */}
              <h3 className="text-white text-2xl font-bold mb-2">{item.name}</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white text-xl font-bold">{item.price}</span>
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;