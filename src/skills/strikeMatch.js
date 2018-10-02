const { effectsScale, generateLevels } = require("./skillUtils");

const base = {
  id: "'strike_match'",
  level: "0",
  type: "'melee'",
  heal: "0",
  self_target_valid: "true",
  launch: "1234",
  target: "@1234",
  is_crit_valid: "True",
  effect: ["'CM Torch Increase Minor 0'", "'CM Healdot 0'", "'CM Wild Single'"],
  is_stall_invalidating: "false"
};

const healScale = {
  0: `0 0`,
  1: `0 0`,
  2: `0 0`,
  3: `0 1`,
  4: `0 1`
};

const allLevels = generateLevels(level => ({
  ...base,
  level,
  heal: healScale[level],
  effect: effectsScale(base.effect, level)
}));

// console.log(allLevels);

module.exports = allLevels;
