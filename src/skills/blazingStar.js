const { critScale, effectsScale, generateLevels } = require("./skillUtils");

const baseHeal = {
  low: 2,
  high: 4
};
const base = {
  id: "'blazing_star'",
  level: "0",
  heal: `${baseHeal.low} ${baseHeal.high}`,
  crit: "5%",
  self_target_valid: "true",
  launch: "432",
  target: "@1234",
  is_crit_valid: "True",
  effect: [
    "'CM Blazing Torch 0'",
    "'CM Group Healdot 0'",
    "'CM Wild 0'",
    "'CM Wild 0'",
    "'Disable Healing Abilities'"
  ],
  is_stall_invalidating: "true"
};

const scaleHeal = level => {
  const offset = level;
  const scaled = {
    low: baseHeal.low + offset,
    high: baseHeal.high + offset
  };
  return `${scaled.low} ${scaled.high}`;
};

const allLevels = generateLevels(level => ({
  ...base,
  level,
  heal: scaleHeal(level),
  crit: critScale(base.crit, level),
  effect: effectsScale(base.effect, level)
}));

// console.log(allLevels);

module.exports = allLevels;
