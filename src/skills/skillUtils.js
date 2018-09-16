const _ = require("lodash");
const atkScale = (base, level) => addPercent(base, level * 5);
const critScale = (base, level) => addPercent(base, level);
const effectScale = (base, level) => base.replace(/\d/, level);
const effectsScale = (baseEffects, level) =>
  baseEffects.map(baseEffect => effectScale(baseEffect, level));

const addPercent = (percent, addition) => {
  const value = parseInt(percent.replace(/%/, ""));
  return `${value + addition}%`;
};

const generateLevels = levelMap => _.range(0, 5).map(levelMap);

module.exports = { atkScale, critScale, effectsScale, generateLevels };
