const minIncease = {
  id: "CM_STEALTH_DAMAGE_BUFF_MIN",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_low",
  amount: 0.5,
  duration: 2,
  remove_if_not_active: false,
  is_false_rule: false,
  rule_type: "target_is_stealthed",
  rule_data: {
    float: 1,
    string: ""
  }
};

const maxIncrease = {
  id: "CM_STEALTH_DAMAGE_BUFF_MAX",
  stat_type: "combat_stat_multiply",
  stat_sub_type: "damage_high",
  amount: 0.5,
  duration: 2,
  remove_if_not_active: false,
  is_false_rule: false,
  rule_type: "target_is_stealthed",
  rule_data: {
    float: 1,
    string: ""
  }
};

module.exports = [minIncease, maxIncrease];
