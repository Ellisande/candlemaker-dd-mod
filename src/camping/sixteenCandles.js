const sixteenCandles = {
  id: "sixteen_candles",
  level: 0,
  cost: 3,
  use_limit: 1,
  effects: [
    {
      selection: "self",
      requirements: [],
      chance: { code: "a", amount: 1.0 },
      type: "loot",
      sub_type: "TORCHONLY",
      amount: 16
    }
  ],
  hero_classes: ["candlemaker"],
  upgrade_requirements: [
    {
      code: "0",
      currency_cost: [{ type: "gold", amount: 1750 }],
      prerequisite_requirements: []
    }
  ]
};

module.exports = [sixteenCandles];
