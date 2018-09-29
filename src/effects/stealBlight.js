const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Steal Blight 0'",
  target: "'target'",
  curio_result_type: "'negative'",
  chance: "100%",
  on_hit: "true",
  on_miss: "false",
  apply_once: "true",
  steal_buff_stat_type: "'hp_dot_poison'"
};

const allLevels = generateLevels(level => ({
  ...base,
  level,
  name: nameScale(base.name, level)
}));

// console.log(allLevels);

module.exports = allLevels;
