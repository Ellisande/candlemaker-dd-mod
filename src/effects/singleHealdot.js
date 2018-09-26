const { generateLevels, nameScale } = require("./effectUtils");

const healScale = {
  0: 2,
  1: 3,
  2: 2,
  3: 3,
  4: 3
};

const durationScale = {
  0: 2,
  1: 2,
  2: 3,
  3: 3,
  4: 3
};
const base = {
  name: "'CM Healdot 1'",
  target: "'target'",
  curio_result_type: "'positive'",
  chance: "100%",
  dotHpHeal: 2,
  duration: 2,
  on_hit: "true",
  on_miss: "true"
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  dotHpHeal: healScale[level],
  duration: durationScale[level]
}));

// console.log(allLevels);

module.exports = allLevels;
