const { generateLevels, nameScale } = require("./effectUtils");

const healScale = {
  0: 2,
  1: 2,
  2: 3,
  3: 3,
  4: 4
};
const base = {
  name: "'CM Group Healdot 0'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "80%",
  dotHpHeal: "2",
  duration: "2",
  on_hit: "true",
  on_miss: "false"
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  dotHpHeal: healScale[level]
}));

// console.log(allLevels);

module.exports = allLevels;
