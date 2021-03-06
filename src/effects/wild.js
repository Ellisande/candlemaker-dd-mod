const { scaleJustNames } = require("./effectUtils");

const single = {
  name: "'CM Wild Single'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "2",
  buff_ids: [
    "'WILD_MAX_DAMAGE_DONE_BUFF_SINGLE'",
    "'WILD_MIN_DAMAGE_DONE_BUFF_SINGLE'"
  ],
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
    "'WILD_MAX_DAMAGE_DONE_BUFF_DOUBLE'",
    "'WILD_MIN_DAMAGE_DONE_BUFF_DOUBLE'"
  ],
  on_hit: "true",
  on_miss: "true",
  apply_once: "false"
};

// console.log([single, double]);

module.exports = [single, double];
