const base = {
  id: "CAMPING_CM_STEAL_BUFFS",
  stat_type: "transfer_buff_from_attacker_chance",
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
