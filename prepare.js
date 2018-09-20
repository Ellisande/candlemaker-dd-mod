const fs = require("fs");

fs.copyFileSync(
  "./build/base.effects.darkest",
  "./candlemaker/effects/base.effects.darkest"
);

fs.copyFileSync(
  "./build/base.buffs.json",
  "./candlemaker/shared/buffs/base.buffs.json"
);

// Need to copy over the class, but we don't have the build for it yet.
