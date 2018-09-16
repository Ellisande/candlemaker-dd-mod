const convert = require("./convert");
const fs = require("fs");
const skills = require("./skills");
const effects = require("./effects");
const buffs = require("./buffs");

const skillsAsStrings = skills
  .map(convert.fromObject)
  .map(i => "combat_skill: " + i)
  .join("\n");

const effectsAsStrings = effects
  .map(convert.fromObject)
  .map(i => "effect: " + i)
  .join("\n");

fs.writeFileSync("./build/skills.info.darkest", skillsAsStrings);
fs.writeFileSync("./build/effects.info.darkest", effectsAsStrings);
fs.writeFileSync("./build/buffs.json", JSON.stringify(buffs, null, 2));
