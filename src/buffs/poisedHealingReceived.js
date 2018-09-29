const { generateLevels, nameScale } = require("../effects/effectUtils");

const single = {
  id: "POISED_HEALING_TAKEN_BUFF_SINGLE",
  stat_type: "hp_heal_received_percent",
  stat_sub_type: "",
  amount: 0.25,
  duration: 3,
  remove_if_not_active: false,
  rule_type: "lightabove",
  is_false_rule: false,
  rule_data: {
    float: 49,
    string: ""
  }
};

const double = {
  id: "POISED_HEALING_TAKEN_BUFF_DOUBLE",
  stat_type: "hp_heal_received_percent",
  stat_sub_type: "",
  amount: 0.5,
  duration: 3,
  remove_if_not_active: false,
  rule_type: "lightabove",
  is_false_rule: false,
  rule_data: {
    float: 49,
    string: ""
  }
};

// console.log(single, double);

module.exports = [single, double];
