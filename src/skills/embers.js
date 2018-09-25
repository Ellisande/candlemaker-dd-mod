const {
  atkScale,
  effectsScale,
  critScale,
  generateLevels
} = require("./skillUtils");

const base = {
  id: "'embers'",
  level: "0",
  type: "'ranged'",
  atk: "60%",
  dmg: "-60%",
  crit: "3%",
  launch: "23",
  target: "@1234",
  is_crit_valid: "True",
  effect: [
    "'CM Torch Decrease Minor 0'",
    "'CM Damge Taken Debuff 0'",
    "'CM Poised 0'"
  ],
  generation_guaranteed: "true"
};

const allLevels = generateLevels(level => ({
  ...base,
  level,
  atk: atkScale(base.atk, level),
  crit: critScale(base.crit, level),
  effect: effectsScale(base.effect, level),
  generation_guaranteed: level === 0 ? "true" : "false"
}));

// console.log(allLevels);

module.exports = allLevels;
