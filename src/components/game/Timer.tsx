import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  isPaused: boolean;
}

const Timer = ({ duration, onTimeUp, isPaused }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    setTimeLeft(duration);
    setHasPlayed(false);
  }, [duration]);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, timeLeft, onTimeUp]);

  useEffect(() => {
    if (timeLeft <= 10 && timeLeft > 0 && !hasPlayed && !isPaused) {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBjiR1/LNeysFJHbI79yPQQoVXrTp66lWFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBjiR1/LNeywFJHbI79yPQQoVXrTp66lWFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBjiR1/LNeysFJHbI79yPQQoVXrTp66lWFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBjiR1/LNeysFJHbI79yPQQoVXrTp66lWFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBjiR1/LNeysFJHbI79yPQQoVXrTp66lWFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBjiR1/LNeysFJHbI79yPQQoVXrTp66lWFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBjiR1/LNeysFJHbI79yPQQoVXrTp66lWFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBjiR1/LNeysFJHbI79yPQQoVXrTp66lWFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSAMRXK/o7qNREAxPouLxvGMdBg==');
      audio.play().catch(() => {});
      setHasPlayed(true);
    }
  }, [timeLeft, hasPlayed, isPaused]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isWarning = timeLeft <= 10;

  return (
    <motion.div
      animate={isWarning ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 1, repeat: isWarning ? Infinity : 0 }}
      className={`fixed top-8 right-8 ${
        isWarning ? "bg-timer-warning" : "bg-card"
      } text-foreground px-8 py-4 rounded-2xl font-bold text-3xl shadow-2xl z-50 ${
        isWarning ? "animate-pulse" : ""
      }`}
    >
      {minutes}:{seconds.toString().padStart(2, "0")}
    </motion.div>
  );
};

export default Timer;
