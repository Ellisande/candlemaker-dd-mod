const { generateLevels, nameScale } = require("./effectUtils");

const healBase = {
  low: 1,
  high: 2
};
const base = {
  name: "'CM Healdot 1'",
  target: "'target'",
  curio_result_type: "'positive'",
  chance: "100%",
  dotHpHeal: `${healBase.low} ${healBase.high}`,
  duration: "3",
  on_hit: "true",
  on_miss: "true"
};

const healScale = level => {
  const offset = Math.floor(level / 2);
  const scaled = {
    low: healBase.low + offset,
    high: healBase.high + offset
  };
  return `${scaled.low} ${scaled.high}`;
};

const allLevels = generateLevels(level => ({
  ...base,
  name: nameScale(base.name, level),
  dotHpHeal: healScale(level)
}));

// console.log(allLevels);

module.exports = allLevels;
