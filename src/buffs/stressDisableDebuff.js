const base = {
  id: "STRESS_DISABLE_DEBUFF",
  stat_type: "disable_combat_skill_attribute",
  stat_sub_type: "stress",
  amount: 1.0,
  duration: 2,
  remove_if_not_active: false,
  is_false_rule: false,
  rule_type: "lightabove",
  rule_data: {
    float: 50,
    string: ""
  }
};

module.exports = [base];
