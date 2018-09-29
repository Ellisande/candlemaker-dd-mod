const { generateLevels, nameScale } = require("./effectUtils");

const baseDamageBuff = 100;
const damageScalar = 20;
const baseCritBuff = 5;
const critScalar = 2;

const base = {
  name: "'CM Bleed Damage Increase 0'",
  target: "'performer'",
  curio_result_type: "'positive'",
  chance: "100%",
  keyStatus: "'bleeding'",
  combat_stat_buff: 1,
  damage_low_multiply: `${baseDamageBuff}%`,
  damage_high_multiply: `${baseDamageBuff}%`,
  crit_chance_add: `${baseCritBuff}%`,
  on_hit: "true",
  on_miss: "false"
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  damage_low_multiply: `${baseDamageBuff + level * damageScalar}%`,
  damage_high_multiply: `${baseDamageBuff + level * damageScalar}%`,
  crit_chance_add: `${baseCritBuff + level * critScalar}`
}));

console.log(allLevels);

module.exports = allLevels;
