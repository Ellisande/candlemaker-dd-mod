const { generateLevels, nameScale } = require("../effects/effectUtils");

const base = {
  id: "CM_HORROR_REDUCTION_BUFF_0",
  stat_type: "stress_dot_amount_received_percent",
  stat_sub_type: "",
  amount: -0.6,
  duration: 3,
  remove_if_not_active: false,
  is_false_rule: false,
  rule_type: "always"
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level),
  amount: base.amount - level * 0.05
}));

// console.log(allLevels);

module.exports = allLevels;
