const single = {
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

const double = {
  id: "WILD_MIN_DAMAGE_DONE_DEBUFF_0",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_low",
  amount: -0.2,
  duration: 2,
  remove_if_not_active: false,
  rule_type: "lightbelow",
  is_false_rule: false,
  rule_data: {
    float: 51,
    string: ""
  }
};

console.log([single, double]);

module.exports = [single, double];
