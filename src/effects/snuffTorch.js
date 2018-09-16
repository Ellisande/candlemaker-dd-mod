const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Snuff Torch 0'",
  target: "'global'",
  chance: "100%",
  curio_result_type: "'negative'",
  torch_decrease: "5",
  on_hit: "true",
  on_miss: "false",
  apply_once: "true",
  queue: "true"
};

const torchLevels = {
  0: 70,
  1: 65,
  2: 60,
  3: 55,
  4: 50
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  torch_decrease: torchLevels[level]
}));

// console.log(allLevels);

module.exports = allLevels;
