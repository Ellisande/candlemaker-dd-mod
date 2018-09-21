const fs = require("fs");

fs.copyFileSync(
  "./build/base.effects.darkest",
  "./candlemaker/effects/base.effects.darkest"
);

fs.copyFileSync(
  "./build/base.buffs.json",
  "./candlemaker/shared/buffs/base.buffs.json"
);

// Remove localization for now since it doesn't seem to work correctly
// fs.copyFileSync(
//   "./build/candlemaker.string_table.xml",
//   "./candlemaker/localization/candlemaker.string_table.xml"
// );

// Need to copy over the class, but we don't have the build for it yet.
