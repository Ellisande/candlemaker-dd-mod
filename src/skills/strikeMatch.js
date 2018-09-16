const { effectsScale, generateLevels } = require("./skillUtils");

const base = {
  id: "'strike_match'",
  level: "0",
  type: "'melee'",
  heal: "0 1",
  self_target_valid: "true",
  launch: "1234",
  target: "@1234",
  is_crit_valid: "True",
  effect: ["'CM Torch Increase Minor 1'", "'CM Healdot 1'", "'CM Wild 1'"],
  is_stall_invalidating: "false"
};

const scaleHeal = level => {
  const increase = Math.floor(level / 2);
  return `${0 + increase} ${1 + increase}`;
};

const allLevels = generateLevels(level => ({
  ...base,
  level,
  heal: scaleHeal(level),
  effect: effectsScale(base.effect, level)
}));

// console.log(allLevels);

module.exports = allLevels;
