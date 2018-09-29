const { generateLevels, nameScale } = require("./effectUtils");

const baseDamageBuff = 90;

const base = {
  name: "'CM Bleed Damage Increase 0'",
  target: "'performer'",
  curio_result_type: "'positive'",
  chance: "100%",
  key_status: "bleeding",
  combat_stat_buff: 1,
  damage_low_multiply: `${baseDamageBuff}%`,
  damage_high_multiply: `${baseDamageBuff}%`,
  on_hit: "true",
  on_miss: "false"
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  damage_low_multiply: `${baseDamageBuff + level * 10}%`,
  damage_high_multiply: `${baseDamageBuff + level * 10}%`
}));

// console.log(allLevels);

module.exports = allLevels;