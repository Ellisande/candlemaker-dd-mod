const { generateLevels, nameScale } = require("../effects/effectUtils");

const base = {
  id: "POISED_HEALING_TAKEN_BUFF_0",
  stat_type: "hp_heal_received_percent",
  stat_sub_type: "",
  amount: 0.25,
  duration: 3,
  remove_if_not_active: false,
  rule_type: "lightabove",
  is_false_rule: false,
  rule_data: {
    float: 50,
    string: ""
  }
};

// Might want to try scaling again later
const amountScale = (base, level) => {
  return base;
  // const offset = level * 0.05;
  // return base + offset;
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level)
}));

// console.log(allLevels);

module.exports = allLevels;
