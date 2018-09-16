const { generateLevels, nameScale } = require("../effects/effectUtils");
const { amountScale } = require("./buffUtils");
const base = {
  id: "WILD_DAMAGE_DONE_BUFF_0",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_high",
  amount: 0.15,
  duration: 3,
  remove_if_not_active: false,
  rule_type: "lightbelow",
  is_false_rule: false,
  rule_data: {
    float: 50,
    string: ""
  }
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level),
  amount: amountScale(base.amount, level)
}));

// console.log(allLevels);

module.exports = allLevels;
