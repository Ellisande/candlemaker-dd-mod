const { nameScale, generateLevels } = require("./effectUtils");

const base = {
  name: "'CM Protection Decrease 0'",
  target: "'target'",
  curio_result_type: "'negative'",
  chance: "100%",
  duration: "2",
  combat_stat_buff: "1",
  protection_rating_add: "-10%",
  on_hit: "true",
  on_miss: "true",
  apply_once: "false"
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  chance: `${100 + level * 10}%`
}));

// console.log(allLevels);

module.exports = allLevels;
