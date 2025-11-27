import { motion } from "framer-motion";

export interface Team {
  id: string;
  name: string;
  color: string;
  avatar: string;
  score: number;
  roundScores: number[];
}

interface RankingTableProps {
  teams: Team[];
  currentTeamId?: string;
  newPoints?: number;
  showAnimation?: boolean;
}

const RankingTable = ({ teams, currentTeamId, newPoints, showAnimation = false }: RankingTableProps) => {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto bg-card rounded-3xl p-8 shadow-2xl"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-foreground">Rankings</h2>
      <div className="space-y-4">
        {sortedTeams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={showAnimation ? { x: -50, opacity: 0 } : {}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center gap-6 p-6 rounded-2xl ${
              team.id === currentTeamId ? "bg-primary/20 ring-2 ring-primary" : "bg-secondary"
            }`}
          >
            <div className="text-4xl font-bold text-muted-foreground w-12 text-center">
              {index + 1}
            </div>
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg"
              style={{ backgroundColor: `hsl(${team.color})` }}
            >
              {team.avatar}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground">{team.name}</h3>
            </div>
            <div className="flex items-center gap-4">
              {team.id === currentTeamId && newPoints !== undefined && showAnimation && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="text-primary text-2xl font-bold"
                >
                  +{newPoints}
                </motion.span>
              )}
              <motion.div
                initial={showAnimation ? { scale: 0 } : {}}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-4xl font-bold text-foreground"
              >
                {team.score}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RankingTable;
