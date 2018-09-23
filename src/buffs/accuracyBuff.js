const { generateLevels, nameScale } = require("../effects/effectUtils");

const base = {
  id: "CM_ACC_BUFF_0",
  stat_type: "combat_stat_add",
  stat_sub_type: "attack_rating",
  amount: 0.1,
  duration: 3,
  remove_if_not_active: false,
  is_false_rule: false,
  rule_type: "always"
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level),
  amount: base.amount + level * 0.05
}));

// console.log(allLevels);

module.exports = allLevels;
