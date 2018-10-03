const base = {
  id: "CAMPING_CM_PROTECTION_INCREASE",
  stat_type: "combat_stat_add",
  stat_sub_type: "protection_rating",
  amount: 0.1,
  duration_type: "combat_end",
  duration: 4,
  remove_if_not_active: false,
  rule_type: "always",
  is_false_rule: false,
  rule_data: {
    float: 0,
    string: ""
  }
};

module.exports = [base];
