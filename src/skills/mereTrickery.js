const { effectsScale, generateLevels, atkScale } = require("./skillUtils");

const base = {
  id: "'mere_trickery'",
  level: "0",
  type: "",
  atk: "0%",
  crit: "0%",
  launch: "1234",
  target: "@1234",
  is_crit_valid: "False",
  per_battle_limit: 3,
  effect: [
    "'CM Torch Increase Minor 0'",
    "'CM Mere Trickery Buff 0'",
    "'CM Wild 0'"
  ],
  is_stall_invalidating: "false"
};

const allLevels = generateLevels(level => ({
  ...base,
  level,
  effect: effectsScale(base.effect, level)
}));

// console.log(allLevels);

module.exports = allLevels;
