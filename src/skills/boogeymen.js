const { generateLevels, effectsScale } = require("./skillUtils");
const base = {
  id: "'boogeymen'",
  level: "0",
  atk: "0%",
  dmg: "0%",
  crit: "0%",
  self_target_valid: "true",
  launch: "1234",
  target: "@1234",
  is_crit_valid: "True",
  effect: [
    "'CM Torch Decrease Minor 0'",
    "'CM Boogeymen Target Stress'",
    "'CM Boogeymen 0'",
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
