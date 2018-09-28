const poisedHealingReceived = require("./buffs/poisedHealingReceived");
const wildDamageDecrease = require("./buffs/wildDamageDecrease");
const wildDamageIncrease = require("./buffs/wildDamageIncrease");
const disableHealingDebuff = require("./buffs/disableHealing");
const stressDoneDebuff = require("./buffs/stressDisableDebuff");
const accuracyBuff = require("./buffs/accuracyBuff");
const horrorReduction = require("./buffs/horrorReduction");
const stealthDamageBuff = require("./buffs/stealthDamageBuff");
const ignoreSealth = require("./buffs/ignoreStealth");

module.exports = [
  ...poisedHealingReceived,
  ...wildDamageDecrease,
  ...wildDamageIncrease,
  ...disableHealingDebuff,
  ...stressDoneDebuff,
  ...accuracyBuff,
  ...horrorReduction,
  ...stealthDamageBuff,
  ...ignoreSealth
];
