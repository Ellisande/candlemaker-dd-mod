const { scaleJustNames } = require("./effectUtils");

const base = {
  name: "'CM Damage Done Decrease 0'",
  target: "'target'",
  curio_result_type: "'negative'",
  chance: "100%",
  duration: "1",
  buff_ids: "'DAMAGE_DONE_DECREASE'",
  on_hit: "true",
  on_miss: "true",
  apply_once: "false"
};

const allLevels = scaleJustNames(base);

// console.log(allLevels);

module.exports = allLevels;
