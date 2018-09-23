const { generateLevels, nameScale } = require("../effects/effectUtils");

const base = {
  id: "DISABLE_HEALING_DEBUFF",
  stat_type: "disable_combat_skill_attribute",
  stat_sub_type: "heal",
  amount: 1.0,
  duration: 2,
  remove_if_not_active: true,
  is_false_rule: false,
  rule_type: "always"
};

module.exports = [base];
