const { scaleJustNames } = require("./effectUtils");
const base = {
  name: "'CM Poised 1'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "4",
  buff_ids: "'POISED_HEALING_TAKEN_BUFF_0'",
  on_hit: "true",
  on_miss: "true",
  apply_once: "false"
};

const allLevels = scaleJustNames(base);

// console.log(allLevels);

module.exports = allLevels;
