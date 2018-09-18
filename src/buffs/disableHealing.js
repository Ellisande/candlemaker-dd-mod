const { generateLevels, nameScale } = require("../effects/effectUtils");

const base = {
  id: "'DISABLE_HEALING_DEBUFF'",
  duration: 1,
  remove_if_not_active: true,
  rule_type: "lightabove",
  is_false_rule: false,
  disable_combat_skill_attribute: "'heal'",
  rule_data: {
    float: 50,
    string: ""
  }
};

module.exports = [base];
