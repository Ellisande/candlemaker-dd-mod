const { critScale, effectsScale, generateLevels } = require("./skillUtils");

const baseHeal = {
  low: 3,
  high: 5
};
const base = {
  id: "'blazing_star'",
  level: "0",
  heal: `${baseHeal.low} ${baseHeal.high}`,
  crit: "5%",
  self_target_valid: "true",
  per_battle_limit: 2,
  launch: "432",
  target: "@1234",
  is_crit_valid: "True",
  effect: [
    "'CM Blazing Torch 0",
    "'CM Group Healdot 0",
    "'CM Wild 0'",
    "'CM Wild 0'"
  ],
  is_stall_invalidating: "true"
};

const scaleHeal = level => {
  const offset = Math.floor(level / 2);
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
