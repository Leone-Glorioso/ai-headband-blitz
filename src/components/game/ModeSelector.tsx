import { motion } from "framer-motion";

interface ModeSelectorProps {
  selectedMode: string;
  onSelectMode: (mode: string) => void;
}

const modes = [
  { id: "easy", label: "Easy", color: "bg-gradient-easy" },
  { id: "medium", label: "Medium", color: "bg-gradient-medium" },
  { id: "hard", label: "Hard", color: "bg-gradient-hard" },
  { id: "mixed", label: "Mixed", color: "bg-gradient-primary" },
];

const ModeSelector = ({ selectedMode, onSelectMode }: ModeSelectorProps) => {
  return (
    <div className="flex justify-center items-center gap-8 flex-wrap">
      {modes.map((mode) => (
        <motion.button
          key={mode.id}
          onClick={() => onSelectMode(mode.id)}
          className={`relative w-32 h-32 rounded-full ${mode.color} flex items-center justify-center font-bold text-xl cursor-pointer transition-all ${
            selectedMode === mode.id ? "ring-4 ring-primary scale-110" : "hover:scale-105"
          }`}
          whileHover={{ scale: selectedMode === mode.id ? 1.1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: selectedMode === mode.id ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className={mode.id === "medium" ? "text-medium-foreground" : "text-white"}>
            {mode.label}
          </span>
          {selectedMode === mode.id && (
            <motion.div
              className="absolute inset-0 rounded-full animate-pulse-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default ModeSelector;
