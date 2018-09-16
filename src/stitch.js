import buffs from "./buffs";
import effects from "./effects";

const hydrateBuff = buffId => {
  const cleanId = buffId.replace(/'/g, "");
  return buffs.find(buff => buff.id == cleanId);
};

const hydrateEffect = effectName => {
  const effect = effects.find(effect => effect.name === effectName) || {
    name: effectName
  };
  const buffIds = Array.isArray(effect.buff_ids)
    ? effect.buff_ids
    : [effect.buff_ids];
  return {
    ...effect,
    buffs: buffIds.filter(i => i).map(hydrateBuff)
  };
};

const hydrateSkill = skill => {
  return {
    ...skill,
    effects: skill.effect.map(hydrateEffect)
  };
};

export default hydrateSkill;
