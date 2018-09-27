const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Damge Taken Debuff 0'",
  target: "'target'",
  curio_result_type: "'negative'",
  chance: "100%",
  duration: "2",
  buff_type: "damage_received_percent",
  buff_amount: "30%",
  on_hit: "true",
  on_miss: "false"
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level)
}));

// console.log(allLevels);

module.exports = allLevels;
