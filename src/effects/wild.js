const { scaleJustNames } = require("./effectUtils");

const base = {
  name: "'CM Wild 0'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "3",
  buff_ids: ["'WILD_DAMAGE_DONE_BUFF_0'", "'WILD_MIN_DAMAGE_DONE_DEBUFF_0'"],
  on_hit: "true",
  on_miss: "true",
  apply_once: "false"
};

const allLevels = scaleJustNames(base);

// console.log(allLevels);

module.exports = allLevels;
