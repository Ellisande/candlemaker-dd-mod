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
  queue: "false"
};

const torchLevels = {
  0: 70,
  1: 70,
  2: 70,
  3: 70,
  4: 70
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  torch_decrease: torchLevels[level]
}));

// console.log(allLevels);

module.exports = allLevels;
