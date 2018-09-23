const { scaleJustNames } = require("./effectUtils");

const base = {
  name: "'CM Wild Single Target 0'",
  target: "'target'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "1",
  buff_ids: [
    "'BOOGEYMEN_DAMAGE_DONE_BUFF_0'",
    "'BOOGEYMEN_MIN_DAMAGE_DONE_DEBUFF_0'"
  ],
  on_hit: "true",
  on_miss: "true",
  apply_once: "false"
};

const allLevels = scaleJustNames(base);

// console.log(allLevels);

module.exports = allLevels;
