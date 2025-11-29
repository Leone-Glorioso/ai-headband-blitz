import { motion } from "framer-motion";
import { Card } from "@/data/gameData";

interface GameCardProps {
  card: Card;
  onCorrect: () => void;
  onPass: () => void;
}

const GameCard = ({ card, onCorrect, onPass }: GameCardProps) => {
  const getCardColor = () => {
    switch (card.difficulty) {
      case "easy":
        return "bg-gradient-easy";
      case "medium":
        return "bg-gradient-medium";
      case "hard":
        return "bg-gradient-hard";
      default:
        return "bg-gradient-primary";
    }
  };

  const getTextColor = () => {
    return card.difficulty === "medium" ? "text-medium-foreground" : "text-white";
  };

  return (
    <motion.div
      key={card.word}
      initial={{ x: 300, opacity: 0, rotateY: -90 }}
      animate={{ x: 0, opacity: 1, rotateY: 0 }}
      exit={{ x: -300, opacity: 0, rotateY: 90 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`w-full max-w-2xl mx-auto ${getCardColor()} rounded-3xl p-12 shadow-2xl min-h-[500px] flex flex-col justify-between`}
    >
      <div className="text-center flex-1 flex flex-col justify-center">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`${card.difficulty === "medium" ? "text-8xl" : "text-6xl"} font-bold mb-8 ${getTextColor()}`}
        >
          {card.word}
        </motion.h2>

        {card.bannedWords && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className={`text-2xl font-semibold ${getTextColor()} mb-4`}>Forbidden Words:</h3>
            <div className="grid grid-cols-2 gap-4">
              {card.bannedWords.map((word, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className={`${getTextColor()} text-xl font-medium bg-black/20 rounded-xl p-4`}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {card.hints && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className={`text-2xl font-semibold ${getTextColor()} mb-4`}>Hints:</h3>
            <div className="space-y-3">
              {card.hints.map((hint, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className={`${getTextColor()} text-lg bg-black/20 rounded-xl p-4 text-left`}
                >
                  💡 {hint}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-8 mt-8"
      >
        <button
          onClick={onPass}
          className="bg-pass hover:bg-pass/90 text-pass-foreground px-8 py-4 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
        >
          Pass
        </button>
        <button
          onClick={onCorrect}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
        >
          Correct →
        </button>
      </motion.div>
    </motion.div>
  );
};

export default GameCard;
