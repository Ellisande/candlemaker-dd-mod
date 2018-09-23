const { generateLevels, nameScale } = require("../effects/effectUtils");
const base = {
  id: "BOOGEYMEN_MIN_DAMAGE_DONE_DEBUFF_0",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_low",
  amount: -0.3,
  duration: 1,
  remove_if_not_active: false,
  rule_type: "always",
  is_false_rule: false
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level),
  amount: base.amount + level * 0.05
}));

// console.log(allLevels);

module.exports = allLevels;
