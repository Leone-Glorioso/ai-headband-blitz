import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { teamColors, teamAvatars } from "@/data/gameData";
import { Team } from "@/components/game/RankingTable";

const Setup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const mode = location.state?.mode || "mixed";

  const [numTeams, setNumTeams] = useState(2);
  const [teams, setTeams] = useState<Omit<Team, "score" | "roundScores">[]>([
    { id: "1", name: "Team 1", color: teamColors[0].value, avatar: teamAvatars[0] },
    { id: "2", name: "Team 2", color: teamColors[1].value, avatar: teamAvatars[1] },
  ]);
  const [rounds, setRounds] = useState(5);
  const [duration, setDuration] = useState(60);

  const handleNumTeamsChange = (num: number) => {
    setNumTeams(num);
    const newTeams = Array.from({ length: num }, (_, i) => ({
      id: String(i + 1),
      name: teams[i]?.name || `Team ${i + 1}`,
      color: teams[i]?.color || teamColors[i % teamColors.length].value,
      avatar: teams[i]?.avatar || teamAvatars[i % teamAvatars.length],
    }));
    setTeams(newTeams);
  };

  const updateTeam = (index: number, field: keyof Omit<Team, "score" | "roundScores" | "id">, value: string) => {
    const newTeams = [...teams];
    newTeams[index] = { ...newTeams[index], [field]: value };
    setTeams(newTeams);
  };

  const handleStart = () => {
    const teamsWithScores: Team[] = teams.map(team => ({
      ...team,
      score: 0,
      roundScores: [],
    }));
    navigate("/play", { state: { mode, teams: teamsWithScores, rounds, duration } });
  };

  return (
    <div className="min-h-screen bg-gradient-bg p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Game Setup
        </h1>

        <div className="bg-card rounded-3xl p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Number of Teams</h2>
          <div className="flex gap-4 flex-wrap">
            {[2, 3, 4, 5, 6].map((num) => (
              <Button
                key={num}
                onClick={() => handleNumTeamsChange(num)}
                variant={numTeams === num ? "default" : "outline"}
                className="text-xl px-6 py-6"
              >
                {num}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl p-6 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Team {index + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Team Name</label>
                  <Input
                    value={team.name}
                    onChange={(e) => updateTeam(index, "name", e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Color</label>
                  <select
                    value={team.color}
                    onChange={(e) => updateTeam(index, "color", e.target.value)}
                    className="w-full bg-secondary text-foreground rounded-lg p-3 text-lg"
                  >
                    {teamColors.map((color) => (
                      <option key={color.value} value={color.value}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Avatar</label>
                  <select
                    value={team.avatar}
                    onChange={(e) => updateTeam(index, "avatar", e.target.value)}
                    className="w-full bg-secondary text-foreground rounded-lg p-3 text-lg"
                  >
                    {teamAvatars.map((avatar) => (
                      <option key={avatar} value={avatar}>
                        {avatar}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Game Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-lg text-foreground mb-4 block">Number of Rounds</label>
              <div className="flex gap-4 flex-wrap">
                {[2, 5, 10, 15, 20].map((num) => (
                  <Button
                    key={num}
                    onClick={() => setRounds(num)}
                    variant={rounds === num ? "default" : "outline"}
                    className="text-lg px-6 py-4"
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-lg text-foreground mb-4 block">Round Duration</label>
              <div className="flex gap-4 flex-wrap">
                {[
                  { label: "30s", value: 30 },
                  { label: "1min", value: 60 },
                  { label: "2min", value: 120 },
                  { label: "5min", value: 300 },
                ].map((opt) => (
                  <Button
                    key={opt.value}
                    onClick={() => setDuration(opt.value)}
                    variant={duration === opt.value ? "default" : "outline"}
                    className="text-lg px-6 py-4"
                  >
                    {opt.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="px-12 py-8 text-2xl"
          >
            Back
          </Button>
          <Button
            onClick={handleStart}
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-12 py-8 text-2xl font-bold shadow-2xl"
          >
            Start Playing!
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Setup;
