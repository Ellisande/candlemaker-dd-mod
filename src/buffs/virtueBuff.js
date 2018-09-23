const { generateLevels, nameScale } = require("../effects/effectUtils");

const base = {
  id: "CM_VIRTUE_BUFF_0",
  stat_type: "resolve_check_percent",
  stat_sub_type: "",
  amount: 0.05,
  duration: 3,
  remove_if_not_active: false,
  is_false_rule: false,
  rule_type: "always"
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level),
  amount: base.amount + level * 0.025
}));

// console.log(allLevels);

module.exports = allLevels;
