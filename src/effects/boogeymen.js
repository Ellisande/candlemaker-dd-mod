const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Boogeymen 0'",
  target: "'target'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "1",
  combat_stat_buff: 1,
  damage_low_multiply: 0.6,
  damage_high_multiply: 0.6,
  on_hit: "true",
  on_miss: "true",
  apply_once: "true"
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  damage_low_multiply: base.damage_low_multiply + level * 0.05,
  damage_high_multiply: base.damage_high_multiply + level * 0.05
}));

// console.log(allLevels);

module.exports = allLevels;
