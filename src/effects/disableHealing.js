const { scaleJustNames } = require("./effectUtils");

const base = {
  name: "'Disable Healing Abilities'",
  target: "'performer'",
  curio_result_type: "'negative'",
  chance: "100%",
  duration: "1",
  buff_ids: "'DISABLE_HEALING_DEBUFF'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "true",
  queue: "true"
};

module.exports = [base];
