const flickering = {
  id: "flickering_light",
  level: 0,
  cost: 4,
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
      sub_type: "CAMPING_POISED_HEALING_TAKEN_BUFF_SINGLE",
      amount: 0.2
    },
    {
      selection: "party_other",
      requirements: [],
      chance: {
        code: "b",
        amount: 1
      },
      type: "buff",
      sub_type: "CAMPING_WILD_MAX_DAMAGE_DONE_BUFF_SINGLE",
      amount: 0.2
    },
    {
      selection: "party_other",
      requirements: [],
      chance: {
        code: "c",
        amount: 1
      },
      type: "buff",
      sub_type: "CAMPING_WILD_MIN_DAMAGE_DONE_BUFF_SINGLE",
      amount: 0.2
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

module.exports = [flickering];
