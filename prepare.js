const fs = require("fs");

// Copy built effects into the mod deliverable
fs.copyFileSync(
  "./build/candlemaker.effects.darkest",
  "./candlemaker/effects/candlemaker.effects.darkest"
);

// Copy built buffs into the mod deliverable
fs.copyFileSync(
  "./build/candlemaker.buffs.json",
  "./candlemaker/shared/buffs/candlemaker.buffs.json"
);

// Copy built camping skills into the mod deliverable
fs.copyFileSync(
  "./build/candlemaker.camping_skills.json",
  "./candlemaker/raid/camping/candlemaker.camping_skills.json"
);

// Copy built class skills into the mod deliverable
fs.copyFileSync(
  "./build/candlemaker.info.darkest",
  "./candlemaker/heroes/candlemaker/candlemaker.info.darkest"
);

// Copy built string localizations into the mod deliverable
fs.copyFileSync(
  "./build/candlemaker.string_table.xml",
  "./candlemaker/localization/candlemaker.string_table.xml"
);
