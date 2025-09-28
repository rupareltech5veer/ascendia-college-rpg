import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.png";
import avatar5 from "@/assets/avatar5.png";
import avatar6 from "@/assets/avatar6.png";
import avatar7 from "@/assets/avatar7.png";
import avatar8 from "@/assets/avatar8.png";

const characters = [
  { id: 1, name: "Queen", image: avatar1 },
  { id: 2, name: "King", image: avatar2 },
  { id: 3, name: "Knight", image: avatar3 },
  { id: 4, name: "Paladin", image: avatar4 },
  { id: 5, name: "Gladiator", image: avatar5 },
  { id: 6, name: "Warrior", image: avatar6 },
  { id: 7, name: "Druid", image: avatar7 },
  { id: 8, name: "Sage", image: avatar8 },
];

const CharacterSelection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleComplete = () => {
    if (selectedCharacter) {
      localStorage.setItem("selectedCharacter", selectedCharacter.toString());
      navigate("/signup");
    }
  };

  return (
    <div className="min-h-screen bg-ascendia flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl text-center">
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-20">
          pick a character
        </h1>

        {/* Character Grid - 2 rows of 4 */}
        <div className="grid grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
          {characters.map((character) => (
            <div
              key={character.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedCharacter === character.id
                  ? "scale-110 ring-4 ring-primary/80"
                  : "hover:scale-105"
              }`}
              onClick={() => setSelectedCharacter(character.id)}
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 hover:border-primary/40 transition-all duration-300">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {selectedCharacter === character.id && (
                <div className="absolute inset-0 rounded-full bg-primary/20 border-4 border-primary animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Complete Button */}
        <Button
          onClick={handleComplete}
          disabled={!selectedCharacter}
          className="bg-white text-black hover:bg-gray-200 text-xl font-bold px-16 py-4 rounded-full min-w-[300px] h-16 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          COMPLETE
        </Button>
      </div>
    </div>
  );
};

export default CharacterSelection;