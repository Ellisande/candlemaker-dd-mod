const template = skills =>
  `resistances: .stun 20% .poison 30% .bleed 40% .disease 40% .move 20% .debuff 60% .death_blow 67% .trap 10%
crit: .effects "on_crit_healdone"
weapon: .name "candlemaker_weapon_0" .atk 0% .dmg 4 7 .crit 6% .spd 6
weapon: .name "candlemaker_weapon_1" .atk 0% .dmg 5 8 .crit 7% .spd 6 .upgradeRequirementCode 0
weapon: .name "candlemaker_weapon_2" .atk 0% .dmg 6 10 .crit 8% .spd 7 .upgradeRequirementCode 1
weapon: .name "candlemaker_weapon_3" .atk 0% .dmg 6 11 .crit 9% .spd 7 .upgradeRequirementCode 2
weapon: .name "candlemaker_weapon_4" .atk 0% .dmg 7 13 .crit 10% .spd 8 .upgradeRequirementCode 3
armour: .name "candlemaker_armour_0" .def 10% .prot 0 .hp 19 .spd 0
armour: .name "candlemaker_armour_1" .def 15% .prot 0 .hp 23 .spd 0 .upgradeRequirementCode 0
armour: .name "candlemaker_armour_2" .def 20% .prot 0 .hp 27 .spd 0 .upgradeRequirementCode 1
armour: .name "candlemaker_armour_3" .def 25% .prot 0 .hp 31 .spd 0 .upgradeRequirementCode 2
armour: .name "candlemaker_armour_4" .def 30% .prot 0 .hp 35 .spd 0 .upgradeRequirementCode 3
combat_move_skill: .id "move" .level 0 .type "move" .move 2 2 .launch 4321
${skills}
tag: .id "light"
tag: .id "non-religious"
tag: .id "library"
deaths_door: .buffs deathsdoorACCDebuff deathsdoorDMGLowDebuff deathsdoorDMGHighDebuff deathsdoorSPDDebuff deathsdoorSRDebuff .recovery_buffs mortalityACCDebuff mortalityDMGLowDebuff mortalityDMGHighDebuff mortalitySPDDebuff mortalitySRDebuff .recovery_heart_attack_buffs heartattackACCDebuff heartattackDMGLowDebuff heartattackDMGHighDebuff heartattackSPDDebuff heartattackSRDebuff
controlled: .target_rank 4
id_index: .index 980
skill_selection: .can_select_combat_skills true .number_of_selected_combat_skills_max 4
generation: .is_generation_enabled true .number_of_positive_quirks_min 1 .number_of_positive_quirks_max 2 .number_of_negative_quirks_min 1 .number_of_negative_quirks_max 2 .number_of_class_specific_camping_skills 2 .number_of_shared_camping_skills 1 .number_of_random_combat_skills 4 .number_of_cards_in_deck 8 .card_chance 1.0
`;

module.exports = template;
