const { generateLevels, nameScale } = require("../effects/effectUtils");
const base = {
  id: "BOOGEYMEN_DAMAGE_DONE_BUFF_0",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_high",
  amount: 0.6,
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
