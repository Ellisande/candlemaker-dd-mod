const blazingTorch = require("./effects/blazingTorch");
const damageDoneDecrease = require("./effects/damageDoneDecrease");
const damageTaken = require("./effects/damageTaken");
const groupHealDot = require("./effects/groupHealDot");
const poised = require("./effects/poised");
const singleHealdot = require("./effects/singleHealdot");
const snuffTorch = require("./effects/snuffTorch");
const stealth = require("./effects/stealth");
const torchDecreaseMinor = require("./effects/torchDecreaseMinor");
const torchIncreaseMinor = require("./effects/torchIncreaseMinor");
const wild = require("./effects/wild");
const clearmark = require("./effects/clearmark");
const disableHealing = require("./effects/disableHealing");
const mereTrickeryBuff = require("./effects/mereTrickeryBuff");
const boogeymen = require("./effects/boogeymen");
const causeStress = require("./effects/causeStress");
const dodge = require("./effects/dodge");
const shuffle = require("./effects/shuffle");
const stealBleed = require("./effects/stealBleed");
const stealBlight = require("./effects/stealBlight");
const blightDamageIncrease = require("./effects/blightDamageIncrease");
const bleedDamageIncrease = require("./effects/bleedDamageIncrease");
const increaseTorchBurn = require("./effects/increaseTorchBurn");
const reduceProtection = require("./effects/reduceProtection");

const preDefinedEffects = [
  {
    name: "'Darkness 3'",
    target: "'global'",
    chance: "100%",
    curio_result_type: "'negative'",
    torch_decrease: "25",
    on_hit: "true",
    on_miss: "false",
    apply_once: "true",
    queue: "true"
  },
  {
    name: "'Light 3'",
    target: "'global'",
    chance: "100%",
    curio_result_type: "'positive'",
    torch_increase: "15",
    on_hit: "true",
    on_miss: "true",
    apply_once: "true",
    queue: "true"
  },
  {
    name: "'Light 2'",
    target: "'global'",
    chance: "100%",
    curio_result_type: "'positive'",
    torch_increase: "10",
    on_hit: "true",
    on_miss: "true",
    apply_once: "true",
    queue: "true"
  }
];

module.exports = [
  ...blazingTorch,
  ...damageDoneDecrease,
  ...damageTaken,
  ...groupHealDot,
  ...poised,
  ...singleHealdot,
  ...snuffTorch,
  ...stealth,
  ...torchDecreaseMinor,
  ...torchIncreaseMinor,
  ...wild,
  ...clearmark,
  ...disableHealing,
  ...mereTrickeryBuff,
  ...boogeymen,
  ...causeStress,
  ...dodge,
  ...shuffle,
  ...stealBleed,
  ...stealBlight,
  ...blightDamageIncrease,
  ...bleedDamageIncrease,
  ...increaseTorchBurn,
  ...reduceProtection
];
