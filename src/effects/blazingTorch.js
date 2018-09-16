const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Blazing Torch 0'",
  target: "'global'",
  chance: "100%",
  curio_result_type: "'positive'",
  torch_increase: "100",
  on_hit: "true",
  on_miss: "false",
  apply_once: "true",
  queue: "true"
};

const torchLevels = {
  0: 60,
  1: 60,
  2: 60,
  3: 60,
  4: 60
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  torch_increase: torchLevels[level]
}));

// console.log(allLevels);

module.exports = allLevels;
