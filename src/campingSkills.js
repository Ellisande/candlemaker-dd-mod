const sharedSkills = require("./camping/shared");
const waxCoating = require("./camping/waxCoating");

const allSkills = {
  configuration: {
    class_specific_number_of_classes_threshold: 4
  },
  skills: [...sharedSkills, ...waxCoating]
};

module.exports = allSkills;
