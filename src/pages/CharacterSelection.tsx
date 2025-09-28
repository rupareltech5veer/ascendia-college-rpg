import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.png";
import avatar5 from "@/assets/avatar5.png";
import avatar6 from "@/assets/avatar6.png";

const characters = [
  { id: 1, name: "Queen", image: avatar1 },
  { id: 2, name: "King", image: avatar2 },
  { id: 3, name: "Knight", image: avatar3 },
  { id: 4, name: "Paladin", image: avatar4 },
  { id: 5, name: "Gladiator", image: avatar5 },
  { id: 6, name: "Warrior", image: avatar6 },
];

const CharacterSelection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleComplete = () => {
    if (selectedCharacter) {
      // Store selected character and navigate to signup form
      localStorage.setItem("selectedCharacter", selectedCharacter.toString());
      navigate("/signup");
    }
  };

  return (
    <div className="min-h-screen bg-ascendia flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl text-center">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-16">
          pick a character
        </h1>

        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16 max-w-4xl">
          {characters.map((character) => (
            <div
              key={character.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedCharacter === character.id
                  ? "scale-110 ring-4 ring-primary ring-opacity-80"
                  : "hover:scale-105"
              }`}
              onClick={() => setSelectedCharacter(character.id)}
            >
              <div className="glass rounded-full p-2 border border-glass-border/30 aspect-square w-32 h-32 md:w-40 md:h-40">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full rounded-full object-cover"
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
          variant="hero"
          size="lg"
          onClick={handleComplete}
          disabled={!selectedCharacter}
          className="min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          COMPLETE
        </Button>
      </div>
    </div>
  );
};

export default CharacterSelection;