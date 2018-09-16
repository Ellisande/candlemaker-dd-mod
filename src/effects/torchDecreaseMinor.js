const { generateLevels, nameScale } = require("./effectUtils");

const base = {
  name: "'CM Torch Decrease Minor 0'",
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
  0: 5,
  1: 7,
  2: 8,
  3: 10,
  4: 13
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  torch_decrease: torchLevels[level]
}));

// console.log(allLevels);

module.exports = allLevels;
