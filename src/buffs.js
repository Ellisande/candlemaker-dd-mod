const damageTakenDebuff = require("./buffs/damageTakenDebuff");
const poisedHealingReceived = require("./buffs/poisedHealingReceived");
const wildDamageDecrease = require("./buffs/wildDamageDecrease");
const wildDamageIncrease = require("./buffs/wildDamageIncrease");
const disableHealingDebuff = require("./buffs/disableHealing");
const stressDoneDebuff = require("./buffs/stressDisableDebuff");
const boogeymenDamageDecrease = require("./buffs/boogeymenDamageDecrease");
const boogeymenDamageIncrease = require("./buffs/boogeymenDamageIncrease");

module.exports = [
  ...damageTakenDebuff,
  ...poisedHealingReceived,
  ...wildDamageDecrease,
  ...wildDamageIncrease,
  ...disableHealingDebuff,
  ...stressDoneDebuff,
  ...boogeymenDamageDecrease,
  ...boogeymenDamageIncrease
];
