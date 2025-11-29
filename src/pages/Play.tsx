import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import GameCard from "@/components/game/GameCard";
import Timer from "@/components/game/Timer";
import RankingTable, { Team } from "@/components/game/RankingTable";
import Podium from "@/components/game/Podium";
import { Card, easyCards, mediumCards, hardCards } from "@/data/gameData";
import { Button } from "@/components/ui/button";

const Play = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, teams: initialTeams, rounds, duration } = location.state || {};

  const [teams, setTeams] = useState<Team[]>(initialTeams || []);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showRankings, setShowRankings] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [showPodium, setShowPodium] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (!mode || !teams) {
      navigate("/");
      return;
    }
    initializeCards();
  }, [mode, teams, navigate]);

  const initializeCards = () => {
    let newCards: Card[] = [];
    if (mode === "easy") {
      newCards = [...easyCards].sort(() => Math.random() - 0.5);
    } else if (mode === "medium") {
      newCards = [...mediumCards].sort(() => Math.random() - 0.5);
    } else if (mode === "hard") {
      newCards = [...hardCards].sort(() => Math.random() - 0.5);
    } else {
      newCards = [...easyCards, ...mediumCards, ...hardCards].sort(() => Math.random() - 0.5);
    }
    setCards(newCards);
  };

  const getPointsForCard = (card: Card) => {
    switch (card.difficulty) {
      case "easy": return 1;
      case "medium": return 2;
      case "hard": return 3;
      default: return 1;
    }
  };

  const handleCorrect = () => {
    const points = getPointsForCard(cards[currentCardIndex]);
    setRoundScore((prev) => prev + points);
    handleNext();
  };

  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      initializeCards();
      setCurrentCardIndex(0);
    }
  };

  const handleTimeUp = useCallback(() => {
    const newTeams = [...teams];
    newTeams[currentTeamIndex].score += roundScore;
    newTeams[currentTeamIndex].roundScores.push(roundScore);
    setTeams(newTeams);
    setShowRankings(true);
  }, [teams, currentTeamIndex, roundScore]);

  const handleNextTeam = () => {
    setShowRankings(false);
    setRoundScore(0);
    setCurrentCardIndex(0);

    if (currentTeamIndex < teams.length - 1) {
      setCurrentTeamIndex((prev) => prev + 1);
    } else if (currentRound < rounds) {
      setCurrentTeamIndex(0);
      setCurrentRound((prev) => prev + 1);
    } else {
      setGameEnded(true);
    }
  };

  const handlePause = useCallback(() => {
    setIsPaused(true);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showRankings || gameEnded || isPaused) return;
      
      if (e.key === "ArrowRight") {
        handleCorrect();
      } else if (e.key === " ") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "p" || e.key === "P") {
        handlePause();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showRankings, gameEnded, isPaused, currentCardIndex, handleCorrect, handleNext, handlePause]);

  if (!teams || teams.length === 0) {
    return null;
  }

  if (showPodium) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-8 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-5xl"
        >
          <Podium teams={teams} />
          <div className="flex justify-center gap-6 mt-12">
            <Button
              onClick={() => setShowPodium(false)}
              variant="outline"
              size="lg"
              className="px-12 py-6 text-xl"
            >
              View Rankings
            </Button>
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-12 py-6 text-xl font-bold"
            >
              Play Again
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (gameEnded) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-5xl"
        >
          <h1 className="text-6xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Final Rankings
          </h1>
          <RankingTable teams={teams} showAnimation={true} />
          <div className="flex justify-center gap-6 mt-12">
            <Button
              onClick={() => setShowPodium(true)}
              variant="outline"
              size="lg"
              className="px-12 py-6 text-xl"
            >
              View Podium
            </Button>
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-12 py-6 text-xl font-bold"
            >
              Play Again
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showRankings) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-5xl"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
            Round {currentRound} Complete!
          </h2>
          <RankingTable
            teams={teams}
            currentTeamId={teams[currentTeamIndex].id}
            newPoints={roundScore}
            showAnimation={true}
          />
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleNextTeam}
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-12 py-6 text-xl font-bold"
            >
              {currentTeamIndex < teams.length - 1 ? "Next Team" : currentRound < rounds ? "Next Round" : "View Final Rankings"}
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentTeam = teams[currentTeamIndex];

  return (
    <div className="min-h-screen bg-gradient-bg p-8 relative">
      {isPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
        >
          <div className="bg-card rounded-3xl p-12 max-w-md w-full shadow-2xl">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Paused</h2>
            <div className="space-y-4">
              <Button
                onClick={() => setIsPaused(false)}
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 text-xl py-6"
              >
                Resume
              </Button>
              <div className="bg-secondary/50 rounded-xl p-6 text-left space-y-3">
                <h3 className="text-lg font-bold text-foreground mb-4">Game Controls:</h3>
                <p className="text-muted-foreground"><span className="text-primary font-bold">→</span> Correct answer</p>
                <p className="text-muted-foreground"><span className="text-primary font-bold">Space</span> Pass/Skip</p>
                <p className="text-muted-foreground"><span className="text-primary font-bold">P</span> Pause game</p>
              </div>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="lg"
                className="w-full text-xl py-6"
              >
                Main Menu
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      <Timer duration={duration} onTimeUp={handleTimeUp} isPaused={isPaused} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Round {currentRound} of {rounds}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg"
              style={{ backgroundColor: `hsl(${currentTeam.color})` }}
            >
              {currentTeam.avatar}
            </div>
            <h3 className="text-4xl font-bold text-foreground">{currentTeam.name}</h3>
          </div>
          <p className="text-2xl text-muted-foreground mt-4">Score: {roundScore}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {cards.length > 0 && (
            <GameCard
              key={currentCardIndex}
              card={cards[currentCardIndex]}
              onCorrect={handleCorrect}
              onPass={handleNext}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Play;
