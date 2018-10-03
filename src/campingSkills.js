const sharedSkills = require("./camping/shared");
const waxCoating = require("./camping/waxCoating");
const sixteenCandles = require("./camping/sixteenCandles");
const flickeringLight = require("./camping/flickeringLight");
const allSkills = {
  configuration: {
    class_specific_number_of_classes_threshold: 4
  },
  skills: [
    ...sharedSkills,
    ...waxCoating,
    ...sixteenCandles,
    ...flickeringLight
  ]
};

// console.log(allSkills);

module.exports = allSkills;
