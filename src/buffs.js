const damageTakenDebuff = require("./buffs/damageTakenDebuff");
const poisedHealingReceived = require("./buffs/poisedHealingReceived");
const wildDamageDecrease = require("./buffs/wildDamageDecrease");
const wildDamageIncrease = require("./buffs/wildDamageIncrease");

module.exports = [
  ...damageTakenDebuff,
  ...poisedHealingReceived,
  ...wildDamageDecrease,
  ...wildDamageIncrease
];
