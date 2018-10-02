const base = {
  id: "CAMPING_BLEED_BUFF",
  stat_type: "hp_bleed_dot",
  stat_sub_type: "",
  amount: 1,
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
