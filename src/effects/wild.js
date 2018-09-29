const { scaleJustNames } = require("./effectUtils");

const single = {
  name: "'CM Wild Single'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "2",
  buff_ids: ["'WILD_DAMAGE_DONE_BUFF_0'", "'WILD_MIN_DAMAGE_DONE_DEBUFF_0'"],
  on_hit: "true",
  on_miss: "true",
  apply_once: "false"
};

const double = {
  name: "'CM Wild Double'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "2",
  buff_ids: [
    "'WILD_DAMAGE_DONE_BUFF_DOUBLE'",
    "'WILD_MIN_DAMAGE_DONE_DEBUFF_DOUBLE'"
  ],
  on_hit: "true",
  on_miss: "true",
  apply_once: "false"
};

// console.log([single, double]);

module.exports = [single, double];
