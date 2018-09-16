const { scaleJustNames } = require("./effectUtils");

const base = {
  name: "'CM Damge Taken Debuff 1'",
  target: "'target'",
  curio_result_type: "'negative'",
  chance: "100%",
  duration: "2",
  buff_ids: "'DAMAGE_TAKEN_INCREASE_1'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "false"
};

const allLevels = scaleJustNames(base);

// console.log(allLevels);

module.exports = allLevels;
