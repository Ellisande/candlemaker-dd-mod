const convert = require("./src/convert");
const fs = require("fs");
const skills = require("./src/skills");
const effects = require("./src/effects");
const buffs = require("./src/buffs");
const baseBuffs = require("./game_base/base.buffs.json");

const idMap = {
  "'blazing_star'": "'wyrd_reconstruction'",
  "'embers'": "'bloodlet'",
  "'snuff'": "'daemons_pull'",
  "'strike_match'": "'hands_from_abyss'",
  "'mere_trickery'": "'weakening_curse'"
};

const remapIds = skill => {
  if (!idMap[skill.id]) {
    return skill;
  }
  return {
    ...skill,
    id: idMap[skill.id]
  };
};

const skillsAsStrings = skills
  .map(remapIds)
  .map(convert.fromObject)
  .map(i => "combat_skill: " + i)
  .join("\n");

const effectsAsStrings = effects
  .map(convert.fromObject)
  .map(i => "effect: " + i)
  .join("\n");

fs.writeFileSync("./build/candlemaker.skills.info.darkest", skillsAsStrings);
fs.writeFileSync("./build/candlemaker.effects.info.darkest", effectsAsStrings);
fs.writeFileSync(
  "./build/candlemaker.buffs.json",
  JSON.stringify(buffs, null, 2)
);

fs.copyFileSync(
  `${process.cwd()}/game_base/base.effects.darkest`,
  `${process.cwd()}/build/base.effects.darkest`
);

fs.appendFileSync("./build/base.effects.darkest", effectsAsStrings);

const allBuffs = {
  buffs: [...baseBuffs.buffs, buffs]
};

fs.writeFileSync("./build/base.buffs.json", JSON.stringify(allBuffs, null, 2));
