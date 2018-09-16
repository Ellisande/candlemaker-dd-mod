const _ = require("lodash");
const generateLevels = levelMap => _.range(0, 5).map(levelMap);

const nameScale = (effectName, level) => effectName.replace(/\d/, level);

module.exports = {
  generateLevels,
  nameScale
};
