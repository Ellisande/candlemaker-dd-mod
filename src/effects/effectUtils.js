const _ = require("lodash");
const generateLevels = levelMap => _.range(0, 5).map(levelMap);

const nameScale = (effectName, level) => effectName.replace(/\d/, level);

const scaleJustNames = baseEffect =>
  generateLevels(level => ({
    ...baseEffect,
    name: nameScale(baseEffect.name, level),
    buff_ids: Array.isArray(baseEffect.buff_ids)
      ? baseEffect.buff_ids.map(effect => nameScale(effect, level))
      : nameScale(baseEffect.buff_ids, level)
  }));

module.exports = {
  generateLevels,
  nameScale,
  scaleJustNames
};
