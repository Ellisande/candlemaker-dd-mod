const { generateLevels, nameScale } = require("./effectUtils");

const baseDamageBuff = 230;
const damageScalar = 20;

const base = {
  name: "'CM Bleed Damage Increase 0'",
  target: "'performer'",
  curio_result_type: "'positive'",
  chance: `${baseDamageBuff}%`,
  keyStatus: "'bleeding'",
  combat_stat_buff: 1,
  damage_low_multiply: `${baseDamageBuff}%`,
  damage_high_multiply: `${baseDamageBuff}%`,
  on_hit: "true",
  on_miss: "false"
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level)
}));

// console.log(allLevels);

module.exports = allLevels;
