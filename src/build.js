const convert = require("./convert");
const fs = require("fs");
const skills = require("./skills.json");
const effects = require("./effects.json");

const enabled = ["'strike_match'", "'embers'"];

const enabledSkills = skills.filter(skill => enabled.includes(skill.id));

const skillsAsStrings = enabledSkills.map(convert.fromObject).join("\n");

const effectsAsStrings = effects.map(convert.fromObject).join("\n");

fs.writeFileSync("./build/skills.info.darkest", skillsAsStrings);
fs.writeFileSync("./build/effects.info.darkest", effectsAsStrings);
