const { scaleJustNames, nameScale, generateLevels } = require("./effectUtils");
const single = {
  name: "'CM Poised Single'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "3",
  buff_ids: "'POISED_HEALING_TAKEN_BUFF_0'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "false",
  queue: "true"
};

const double = {
  name: "'CM Poised Double'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "3",
  buff_ids: "'POISED_HEALING_TAKEN_BUFF_DOUBLE'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "false",
  queue: "true"
};

const baseChance = 50;
const chance = {
  name: "'CM Poised Chance 0'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: `${baseChance}%`,
  duration: "3",
  buff_ids: "'POISED_HEALING_TAKEN_BUFF_0'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "false",
  queue: "true"
};

const singleLevels = scaleJustNames(single);

const chanceLevels = generateLevels(level => ({
  ...chance,
  name: nameScale(chance.name, level),
  chance: `${baseChance + level * 5}`
}));

// console.log(singleLevels);
console.log(chanceLevels);

module.exports = [...singleLevels, double, ...chanceLevels];
