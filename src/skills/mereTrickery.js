const {
  critScale,
  effectsScale,
  generateLevels,
  atkScale
} = require("./skillUtils");

const base = {
  id: "'mere_trickery'",
  level: "0",
  type: "'ranged'",
  atk: "95%",
  dmg: "-100%",
  crit: "0%",
  launch: "43",
  target: "1234",
  is_crit_valid: "False",
  ignore_stealth: "true",
  effect: [
    "'CM Torch Increase Minor 0'",
    "'Destealth'",
    "'Stress Done Debuff'",
    "'CM Wild 0'"
  ],
  is_stall_invalidating: "true"
};

const allLevels = generateLevels(level => ({
  ...base,
  level,
  atk: atkScale(base.atk, level),
  crit: critScale(base.crit, level),
  effect: effectsScale(base.effect, level)
}));

// console.log(allLevels);

module.exports = allLevels;
