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
      type: "buff",
      sub_type: "CAMPING_CM_PROTECTION_INCREASE",
      amount: 1
    },
    {
      selection: "party_other",
      requirements: [],
      chance: {
        code: "b",
        amount: 1
      },
      type: "buff",
      sub_type: "CAMPING_CM_STEAL_BUFFS",
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

module.exports = [waxCoating];
