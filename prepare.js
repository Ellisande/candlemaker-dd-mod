const fs = require("fs");

fs.copyFileSync(
  "./build/candlemaker.effects.darkest",
  "./candlemaker/effects/candlemaker.effects.darkest"
);

fs.copyFileSync(
  "./build/candlemaker.buffs.json",
  "./candlemaker/shared/buffs/candlemaker.buffs.json"
);

fs.copyFileSync(
  "./build/candlemaker.info.darkest",
  "./candlemaker/heroes/candlemaker/candlemaker.info.darkest"
);

// Remove localization for now since it doesn't seem to work correctly
// fs.copyFileSync(
//   "./build/candlemaker.string_table.xml",
//   "./candlemaker/localization/candlemaker.string_table.xml"
// );

// Need to copy over the class, but we don't have the build for it yet.
