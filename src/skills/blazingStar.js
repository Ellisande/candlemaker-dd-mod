const { critScale, effectsScale, generateLevels } = require("./skillUtils");

const lowHeal = {
  0: 0,
  1: 1,
  2: 1,
  3: 2,
  4: 2
};

const highHeal = {
  0: 2,
  1: 3,
  2: 3,
  3: 4,
  4: 4
};
const base = {
  id: "'blazing_star'",
  level: "0",
  heal: `${lowHeal[0]} ${highHeal[0]}`,
  crit: "5%",
  self_target_valid: "true",
  launch: "432",
  target: "@1234",
  is_crit_valid: "false",
  can_crit_heal: "false",
  effect: [
    "'CM Blazing Torch 0'",
    "'CM Group Healdot 0'",
    "'CM Wild Double'",
    "'Disable Healing Abilities'",
    "'Increase Torch Burn'"
  ],
  is_stall_invalidating: "true"
};

const allLevels = generateLevels(level => ({
  ...base,
  level,
  heal: `${lowHeal[level]} ${highHeal[level]}`,
  crit: critScale(base.crit, level),
  effect: effectsScale(base.effect, level)
}));

// console.log(allLevels);

module.exports = allLevels;
