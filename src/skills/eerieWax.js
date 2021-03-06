const {
  atkScale,
  effectsScale,
  critScale,
  generateLevels
} = require("./skillUtils");

const base = {
  id: "'eerie_wax'",
  level: "0",
  type: "'melee'",
  atk: "95%",
  dmg: "-40%",
  crit: "3%",
  launch: "1234",
  target: "123",
  is_crit_valid: "True",
  effect: [
    "'CM Torch Decrease Minor 0'",
    "'CM Bleed Damage Increase 0'",
    "'CM Blight Damage Increase 0'",
    "'CM Steal Bleed 0'",
    "'CM Steal Blight 0'",
    "'CM Poised Single'"
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
