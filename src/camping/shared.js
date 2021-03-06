const sharedSkills = [
  {
    id: "encourage",
    level: 0,
    cost: 2,
    use_limit: 1,
    effects: [
      {
        selection: "individual",
        requirements: [],
        chance: {
          code: "a",
          amount: 1
        },
        type: "stress_heal_amount",
        sub_type: "",
        amount: 15
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
  },
  {
    id: "first_aid",
    level: 0,
    cost: 2,
    use_limit: 1,
    effects: [
      {
        selection: "individual",
        requirements: [],
        chance: {
          code: "a",
          amount: 1
        },
        type: "health_heal_max_health_percent",
        sub_type: "",
        amount: 0.15
      },
      {
        selection: "individual",
        requirements: [],
        chance: {
          code: "b",
          amount: 1
        },
        type: "remove_bleeding",
        sub_type: "",
        amount: 0
      },
      {
        selection: "individual",
        requirements: [],
        chance: {
          code: "c",
          amount: 1
        },
        type: "remove_poison",
        sub_type: "",
        amount: 0
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
  },
  {
    id: "pep_talk",
    level: 0,
    cost: 2,
    use_limit: 1,
    effects: [
      {
        selection: "individual",
        requirements: [],
        chance: {
          code: "a",
          amount: 1
        },
        type: "buff",
        sub_type: "campingStressResistBuff",
        amount: -0.15
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
  }
];

module.exports = sharedSkills;
