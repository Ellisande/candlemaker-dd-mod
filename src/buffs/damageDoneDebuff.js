const base = {
  id: "DAMAGE_DONE_DECREASE",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_high",
  amount: -0.2,
  duration: 2,
  remove_if_not_active: true,
  rule_type: "is_stealthed",
  is_false_rule: false
};

module.exports = [base];
