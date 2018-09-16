const { generateLevels, nameScale } = require("../effects/effectUtils");

const base = {
  id: "POISED_HEALING_TAKEN_BUFF_0",
  stat_type: "hp_heal_received_percent",
  stat_sub_type: "",
  amount: 0.2,
  duration: 4,
  remove_if_not_active: false,
  rule_type: "lightabove",
  is_false_rule: false,
  rule_data: {
    float: 50,
    string: ""
  }
};

const amountScale = (base, level) => {
  const offset = level * 0.05;
  return base + offset;
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level),
  amount: amountScale(base.amount, level)
}));

// console.log(allLevels);

module.exports = allLevels;
