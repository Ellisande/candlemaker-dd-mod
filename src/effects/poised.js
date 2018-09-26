const { scaleJustNames } = require("./effectUtils");
const base = {
  name: "'CM Poised 0'",
  target: "'performer_group'",
  curio_result_type: "'positive'",
  chance: "100%",
  duration: "3",
  buff_ids: "'POISED_HEALING_TAKEN_BUFF_0'",
  on_hit: "true",
  on_miss: "false",
  apply_once: "false",
  queue: "true"
};

const allLevels = scaleJustNames(base);

// console.log(allLevels);

module.exports = allLevels;
