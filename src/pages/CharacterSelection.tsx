import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import knightAvatar from "@/assets/character-knight.png";
import mageAvatar from "@/assets/character-mage.png";
import archerAvatar from "@/assets/character-archer.png";
import warriorAvatar from "@/assets/character-warrior.png";

const characters = [
  { id: 1, name: "Knight", image: knightAvatar },
  { id: 2, name: "Mage", image: mageAvatar },
  { id: 3, name: "Archer", image: archerAvatar },
  { id: 4, name: "Warrior", image: warriorAvatar },
  { id: 5, name: "Paladin", image: knightAvatar },
  { id: 6, name: "Wizard", image: mageAvatar },
  { id: 7, name: "Ranger", image: archerAvatar },
  { id: 8, name: "Berserker", image: warriorAvatar },
];

const CharacterSelection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleComplete = () => {
    if (selectedCharacter) {
      // Store selected character and navigate to dashboard
      localStorage.setItem("selectedCharacter", selectedCharacter.toString());
      navigate("/dashboard");
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
              <div className="glass rounded-full p-2 border border-glass-border/30 aspect-square">
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