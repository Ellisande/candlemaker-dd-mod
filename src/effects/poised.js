const { nameScale, generateLevels } = require("./effectUtils");
const single = {
  name: "'CM Poised Single'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "2",
  buff_ids: "'POISED_HEALING_TAKEN_BUFF_SINGLE'",
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
  duration: "2",
  buff_ids: "'POISED_HEALING_TAKEN_BUFF_DOUBLE'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "false",
  queue: "true"
};

const baseChance = 40;
const chance = {
  name: "'CM Poised Chance 0'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: `${baseChance}%`,
  duration: "2",
  buff_ids: "'POISED_HEALING_TAKEN_BUFF_SINGLE'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "false",
  queue: "true"
};
const chanceLevels = generateLevels(level => ({
  ...chance,
  name: nameScale(chance.name, level),
  chance: `${baseChance + level * 5}%`
}));

// console.log(singleLevels);
// console.log(chanceLevels);

module.exports = [single, double, ...chanceLevels];
