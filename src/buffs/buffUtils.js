const _ = require("lodash");

const amountScale = (base, level) => {
  const offset = level * 0.05;
  return base + offset;
};

module.exports = { amountScale };
