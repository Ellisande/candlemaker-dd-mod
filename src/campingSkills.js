const sharedSkills = require("./camping/shared");

const allSkills = {
  configuration: {
    class_specific_number_of_classes_threshold: 4
  },
  skills: [...sharedSkills]
};

module.exports = allSkills;
