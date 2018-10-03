const { generateLevels, nameScale } = require("../effects/effectUtils");
const single = {
  id: "WILD_MAX_DAMAGE_DONE_BUFF_SINGLE",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_high",
  amount: 0.2,
  duration: 2,
  remove_if_not_active: false,
  rule_type: "lightbelow",
  is_false_rule: false,
  rule_data: {
    float: 51,
    string: ""
  }
};

const double = {
  id: "WILD_MAX_DAMAGE_DONE_BUFF_DOUBLE",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_high",
  amount: 0.4,
  duration: 2,
  remove_if_not_active: false,
  rule_type: "lightbelow",
  is_false_rule: false,
  rule_data: {
    float: 51,
    string: ""
  }
};

const camping = {
  id: "CAMPING_WILD_MAX_DAMAGE_DONE_BUFF_SINGLE",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_high",
  amount: 0.2,
  duration: 4,
  duration_type: "combat_end",
  remove_if_not_active: false,
  rule_type: "lightbelow",
  is_false_rule: false,
  rule_data: {
    float: 51,
    string: ""
  }
};

// console.log([single, double]);

module.exports = [single, double, camping];
