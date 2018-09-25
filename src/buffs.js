const damageTakenDebuff = require("./buffs/damageTakenDebuff");
const poisedHealingReceived = require("./buffs/poisedHealingReceived");
const wildDamageDecrease = require("./buffs/wildDamageDecrease");
const wildDamageIncrease = require("./buffs/wildDamageIncrease");
const disableHealingDebuff = require("./buffs/disableHealing");
const stressDoneDebuff = require("./buffs/stressDisableDebuff");
const accuracyBuff = require("./buffs/accuracyBuff");
const horrorReduction = require("./buffs/horrorReduction");
const virtueBuff = require("./buffs/virtueBuff.js");

module.exports = [
  ...damageTakenDebuff,
  ...poisedHealingReceived,
  ...wildDamageDecrease,
  ...wildDamageIncrease,
  ...disableHealingDebuff,
  ...stressDoneDebuff,
  ...accuracyBuff,
  ...horrorReduction,
  ...virtueBuff
];
