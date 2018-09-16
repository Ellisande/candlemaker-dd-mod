const { generateLevels, nameScale } = require("../effects/effectUtils");
const base = {
  id: "WILD_MIN_DAMAGE_DONE_DEBUFF_0",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_low",
  amount: 0.3,
  duration: 4,
  remove_if_not_active: false,
  rule_type: "lightbelow",
  is_false_rule: false,
  rule_data: {
    float: 50,
    string: ""
  }
};

const amountScale = (base, level) => {
  const offset = level * 0.05;
  return base - offset;
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level),
  amount: amountScale(base.amount, level)
}));

// console.log(allLevels);

module.exports = allLevels;
