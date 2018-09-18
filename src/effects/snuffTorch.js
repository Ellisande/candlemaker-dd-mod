const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Snuff Torch 0'",
  target: "'global'",
  chance: "100%",
  curio_result_type: "'negative'",
  torch_decrease: "70",
  on_hit: "true",
  on_miss: "false",
  apply_once: "true",
  queue: "true"
};

const torchLevels = {
  0: 75,
  1: 75,
  2: 75,
  3: 75,
  4: 75
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  torch_decrease: torchLevels[level]
}));

// console.log(allLevels);

module.exports = allLevels;
