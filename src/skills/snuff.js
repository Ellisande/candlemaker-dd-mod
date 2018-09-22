const { effectsScale, generateLevels } = require("./skillUtils");

const base = {
  id: "'snuff'",
  level: "0",
  self_target_valid: "false",
  launch: "34",
  target: "@123",
  is_crit_valid: "False",
  effect: [
    "'CM Snuff Torch 0'",
    "'Clearmark'",
    "'Stealth'",
    "'CM Dodge 0'",
    "'CM Poised 0'",
    "'CM Poised 0'"
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
