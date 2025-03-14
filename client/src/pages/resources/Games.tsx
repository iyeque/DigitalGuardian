import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GamepadIcon, Star, Users, Clock } from "lucide-react";
import DigitalCitizenshipQuest from "@/components/games/DigitalCitizenshipQuest";

const games = [
  {
    id: 1,
    title: "Digital Safety Adventures",
    description:
      "Learn about online safety through an interactive adventure game.",
    ageRange: "8-12 years",
    players: "Single player",
    duration: "20-30 min",
    difficulty: "Beginner",
    category: "Safety",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Cyber Detective",
    description: "Solve puzzles and learn about digital privacy and security.",
    ageRange: "10-14 years",
    players: "Single player",
    duration: "15-20 min",
    difficulty: "Intermediate",
    category: "Privacy",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Family Tech Challenge",
    description:
      "A multiplayer quiz game about technology and digital wellness.",
    ageRange: "All ages",
    players: "2-4 players",
    duration: "25-30 min",
    difficulty: "Various",
    category: "Family",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export default function Games() {
  const [isPlaying, setIsPlaying] = useState(false);
  const gameGridRef = useRef<HTMLDivElement | null>(null); // Step 1: Create a reference for the game grid

  const startGame = (isFeatured: boolean) => {
    if (isFeatured) {
      setIsPlaying(true);
    }
    gameGridRef.current?.scrollIntoView({ behavior: "smooth" }); // Step 3: Scroll into view when a game starts
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Educational Games
            </h1>
            <p className="text-lg text-gray-600">
              Learn digital literacy through interactive gameplay
            </p>
          </div>

          {isPlaying ? (
            <DigitalCitizenshipQuest onBack={() => setIsPlaying(false)} />
          ) : (
            <>
              {/* Featured Game */}
              <Card className="mb-12 overflow-hidden border-0 bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-medium text-primary">
                          Featured Game
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4"> {/* Gradient removed here */}
                        Digital Citizenship Quest
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Embark on an epic adventure to become a responsible
                        digital citizen. Master online etiquette and safety.
                      </p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-1 text-sm bg-background/50 px-3 py-1 rounded-full">
                          <Users className="h-4 w-4" />
                          Single player
                        </div>
                        <div className="flex items-center gap-1 text-sm bg-background/50 px-3 py-1 rounded-full">
                          <Clock className="h-4 w-4" />
                          30-40 min
                        </div>
                      </div>
                      <Button
                        onClick={() => startGame(true)} // Start highlighted game
                        className="bg-gradient-to-r from-blue-400 to-purple-500 hover:bg-opacity-90 text-white"
                      >
                        Play Now
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20 rounded-2xl p-8">
                    <img
                      src="https://api.dicebear.com/7.x/pixel-art/svg?seed=digital-guardian&backgroundColor=b6e3f4&scale=180&pixelSize=24"
                      alt="Digital Citizenship Quest"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                </div>
              </Card>

              {/* Games Grid - Include the featured game */}
              <div className="grid md:grid-cols-2 gap-6" ref={gameGridRef}>
                {[
                  ...games,
                  {
                    id: 0,
                    title: "Digital Citizenship Quest",
                    description:
                      "Embark on an epic adventure to become a responsible digital citizen.",
                    ageRange: "All ages",
                    players: "Single player",
                    duration: "30-40 min",
                    difficulty: "Various",
                    category: "Family",
                    color: "from-primary/20 to-primary/10",
                  },
                ].map((game) => (
                  <Card
                    key={game.id}
                    className={`overflow-hidden border-0 bg-gradient-to-r ${game.color}`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-background/40 p-4 rounded-lg">
                          <img
                            src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${game.title}&backgroundColor=transparent&scale=120&pixelSize=16`}
                            alt={game.title}
                            className="w-16 h-16"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1 opacity-80">
                            {game.category}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {game.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm mt-4 mb-4 opacity-90">
                        {game.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="text-xs bg-background/30 px-2 py-1 rounded-full">
                          {game.players}
                        </div>
                        <div className="text-xs bg-background/30 px-2 py-1 rounded-full">
                          {game.duration}
                        </div>
                        <div className="text-xs bg-background/30 px-2 py-1 rounded-full">
                          Ages: {game.ageRange}
                        </div>
                      </div>
                      <Button
                        variant="secondary"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-opacity-70 text-white"
                        onClick={() => startGame(false)}
                      >
                        Start Game
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Achievements Section */}
              <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-8 text-gradient bg-gradient-to-r from-blue-500 to-purple-500">
                  Game Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    "Safety Expert",
                    "Privacy Pro",
                    "Digital Citizen",
                    "Tech Master",
                  ].map((achievement) => (
                    <div
                      key={achievement}
                      className="bg-background/50 rounded-lg p-4 backdrop-blur-sm"
                    >
                      <div className="h-16 w-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-sm font-medium">{achievement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}