const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Torch Decrease Minor 0'",
  target: "'global'",
  chance: "100%",
  curio_result_type: "'negative'",
  torch_decrease: "24",
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
  torch_decrease: torchLevels[level]
}));

// console.log(allLevels);

module.exports = allLevels;
