const { scaleJustNames } = require("./effectUtils");

const base = {
  name: "'CM Damge Taken Debuff 0'",
  target: "'target'",
  curio_result_type: "'negative'",
  chance: "100%",
  duration: "2",
  buff_ids: "'DAMAGE_TAKEN_INCREASE'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "true"
};

const allLevels = scaleJustNames(base);

// console.log(allLevels);

module.exports = allLevels;
