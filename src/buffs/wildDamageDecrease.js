const { generateLevels, nameScale } = require("../effects/effectUtils");
const base = {
  id: "WILD_MIN_DAMAGE_DONE_DEBUFF_0",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_low",
  amount: -0.1,
  duration: 2,
  remove_if_not_active: false,
  rule_type: "lightbelow",
  is_false_rule: false,
  rule_data: {
    float: 51,
    string: ""
  }
};

const allLevels = generateLevels(level => ({
  ...base,
  id: nameScale(base.id, level)
}));

// console.log(allLevels);

module.exports = allLevels;
