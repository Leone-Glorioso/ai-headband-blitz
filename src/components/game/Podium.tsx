import { motion } from "framer-motion";
import { Team } from "./RankingTable";
import { Trophy, Medal } from "lucide-react";

interface PodiumProps {
  teams: Team[];
}

const Podium = ({ teams }: PodiumProps) => {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  
  // Get top 3 teams or fill with second place if only 2 teams
  const firstPlace = sortedTeams[0];
  const secondPlace = sortedTeams[1] || sortedTeams[0];
  const thirdPlace = sortedTeams[2] || sortedTeams[1] || sortedTeams[0];

  const podiumPositions = [
    { team: secondPlace, height: "h-48", order: 2, delay: 0.3, medal: "silver" },
    { team: firstPlace, height: "h-64", order: 1, delay: 0.1, medal: "gold" },
    { team: thirdPlace, height: "h-40", order: 3, delay: 0.5, medal: "bronze" },
  ];

  const getMedalColor = (medal: string) => {
    switch (medal) {
      case "gold":
        return "text-yellow-400";
      case "silver":
        return "text-gray-300";
      case "bronze":
        return "text-amber-600";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Celebration Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-12"
      >
        <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Champions!
        </h2>
      </motion.div>

      {/* Confetti-like decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * window.innerWidth, rotate: 0 }}
            animate={{
              y: window.innerHeight + 100,
              rotate: 360,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
            }}
          />
        ))}
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-8 relative z-10">
        {podiumPositions.map((position) => (
          <motion.div
            key={position.order}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: position.delay, duration: 0.6, type: "spring" }}
            className="flex flex-col items-center"
          >
            {/* Team Avatar and Info */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: position.delay,
              }}
              className="mb-4 text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-2xl mb-2 mx-auto"
                style={{ backgroundColor: `hsl(${position.team.color})` }}
              >
                {position.team.avatar}
              </div>
              <p className="font-bold text-foreground text-lg max-w-[120px] truncate">
                {position.team.name}
              </p>
              <p className="text-primary text-2xl font-bold">{position.team.score}</p>
            </motion.div>

            {/* Podium Stand */}
            <div
              className={`w-32 ${position.height} bg-gradient-to-t from-card to-card/50 rounded-t-xl border-2 border-border shadow-xl flex flex-col items-center justify-start pt-4 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              {position.order === 1 ? (
                <Trophy className={`w-12 h-12 ${getMedalColor(position.medal)} relative z-10`} />
              ) : (
                <Medal className={`w-10 h-10 ${getMedalColor(position.medal)} relative z-10`} />
              )}
              <p className="text-4xl font-bold text-foreground mt-2 relative z-10">
                {position.order}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Podium;
