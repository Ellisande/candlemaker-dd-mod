const poisedHealingReceived = require("./buffs/poisedHealingReceived");
const wildMinDamageIncrease = require("./buffs/wildMinDamageIncrease");
const wildMaxDamageIncrease = require("./buffs/wildMaxDamageIncrease");
const disableHealingDebuff = require("./buffs/disableHealing");
const stressDoneDebuff = require("./buffs/stressDisableDebuff");
const accuracyBuff = require("./buffs/accuracyBuff");
const stressReduction = require("./buffs/stressReduction");
const stealthDamageBuff = require("./buffs/stealthDamageBuff");
const ignoreSealth = require("./buffs/ignoreStealth");
const campingBleedBuff = require("./buffs/campingBleedBuff");

module.exports = [
  ...poisedHealingReceived,
  ...wildMinDamageIncrease,
  ...wildMaxDamageIncrease,
  ...disableHealingDebuff,
  ...stressDoneDebuff,
  ...accuracyBuff,
  ...stressReduction,
  ...stealthDamageBuff,
  ...ignoreSealth,
  ...campingBleedBuff
];
