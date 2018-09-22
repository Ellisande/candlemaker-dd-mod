const { generateLevels } = require("./effectUtils");

const defenseRatingBase = 3;
const base = {
  name: "'CM Dodge 0'",
  target: "'target'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "3",
  combat_stat_buff: "1",
  defense_rating_add: `${defenseRatingBase}%`,
  on_hit: "true",
  on_miss: "true",
  queue: "true"
};

const allLevels = generateLevels(level => ({
  ...base,
  defense_rating_add: `${defenseRatingBase + level * 2}%`
}));
