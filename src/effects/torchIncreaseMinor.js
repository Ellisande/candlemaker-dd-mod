const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Torch Increase Minor 0'",
  target: "'global'",
  chance: "100%",
  curio_result_type: "'positive'",
  torch_increase: "25",
  on_hit: "true",
  on_miss: "false",
  apply_once: "true",
  queue: "false"
};

const torchLevels = {
  0: 25,
  1: 25,
  2: 25,
  3: 25,
  4: 25
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  torch_increase: torchLevels[level]
}));

// console.log(allLevels);

module.exports = allLevels;
