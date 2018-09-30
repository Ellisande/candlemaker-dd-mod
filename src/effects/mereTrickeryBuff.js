const { scaleJustNames } = require("./effectUtils");
const base = {
  name: "'CM Mere Trickery Buff 0'",
  target: "'target'",
  curio_result_type: "'positive'",
  chance: "100%",
  on_hit: "true",
  on_miss: "true",
  apply_once: "true",
  clearDotStress: 1,
  buff_ids: [
    "'CM_STRESS_REDUCTION_BUFF_0'",
    "'CM_STEALTH_DAMAGE_BUFF_MIN'",
    "'CM_STEALTH_DAMAGE_BUFF_MAX'",
    "'CM_IGNORE_STEALTH_BUFF'"
  ]
};

module.exports = scaleJustNames(base);
