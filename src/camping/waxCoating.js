const waxCoating = {
  id: "wax_coating",
  level: 0,
  cost: 2,
  use_limit: 1,
  effects: [
    {
      selection: "party_other",
      requirements: [],
      chance: {
        code: "a",
        amount: 1
      },
      type: "effect",
      sub_type: "Euclidean Hilt Blight",
      amount: 1
    }
  ],
  hero_classes: ["candlemaker"],
  upgrade_requirements: [
    {
      code: "0",
      currency_cost: [
        {
          type: "gold",
          amount: 1750
        }
      ],
      prerequisite_requirements: []
    }
  ]
};
