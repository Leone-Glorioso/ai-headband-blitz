import { useState } from "react";
import { motion } from "framer-motion";
import ModeSelector from "@/components/game/ModeSelector";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedMode, setSelectedMode] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (selectedMode) {
      navigate("/setup", { state: { mode: selectedMode } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Στο Κεφάλι το'χω
        </h1>
        <p className="text-3xl md:text-4xl text-primary font-semibold">AI Edition</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground text-center mb-8">Select Game Mode</h2>
        <ModeSelector selectedMode={selectedMode} onSelectMode={setSelectedMode} />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          onClick={handleStart}
          disabled={!selectedMode}
          size="lg"
          className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-12 py-8 text-2xl font-bold rounded-2xl shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start Game
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
