const convert = require("./src/convert");
const fs = require("fs");
const skills = require("./src/skills");
const baseHeroTemplate = require("./src/candlemakerBase");
const effects = require("./src/effects");
const buffs = require("./src/buffs");
const l10nEntries = require("./src/l10n/candlemaker.json");
const campingSkills = require("./src/campingSkills");

const idMap = {
  "'blazing_star'": "'wyrd_reconstruction'",
  "'embers'": "'bloodlet'",
  "'snuff'": "'daemons_pull'",
  "'strike_match'": "'hands_from_abyss'",
  "'mere_trickery'": "'weakening_curse'"
};

const skillsAsStrings = skills
  .map(convert.fromObject)
  .map(i => "combat_skill: " + i)
  .join("\n");

const effectsAsStrings = effects
  .map(convert.fromObject)
  .map(i => "effect: " + i)
  .join("\n");

fs.writeFileSync(
  "./build/candlemaker.info.darkest",
  baseHeroTemplate(skillsAsStrings)
);
fs.writeFileSync("./build/candlemaker.effects.darkest", effectsAsStrings);
fs.writeFileSync(
  "./build/candlemaker.buffs.json",
  JSON.stringify({ buffs }, null, 2)
);

const mapL10nEntry = entry =>
  `<entry id="${entry.id}"><![CDATA[${entry.data}]]></entry>`;

const l10nTemplate = `
<?xml version="1.0" encoding="UTF-8"?>
<root>
  <language id="english">
    ${l10nEntries.map(mapL10nEntry).join("\n")}
  </language>
</root>
`;

fs.writeFileSync("./build/candlemaker.string_table.xml", l10nTemplate);

fs.writeFileSync(
  "./build/candlemaker.camping_skills.json",
  JSON.stringify(campingSkills, null, 2)
);
