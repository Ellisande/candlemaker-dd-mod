import { createStore } from "redux";

let buffCount = 0;

const STANDARD_DURATION = 4;

const durationReducer = state => {
  const updated = state.buffs
    .map(buff => ({ ...buff, duration: buff.duration - 1 }))
    .filter(buff => buff.duration);
  return {
    ...state,
    buffs: updated
  };
};

const buffReducer = (state, action) => {
  if (action.type === "EFFECT") {
    const updated = [
      ...state.buffs,
      ...action.buffs.map(buff => ({
        ...buff,
        duration: STANDARD_DURATION,
        id: `${buff.id} - ${buffCount++}`
      }))
    ];
    return {
      ...state,
      buffs: updated
    };
  }
  return state;
};

const torchReducer = (state, action) => {
  const { torch } = state;
  if (action.type === "EFFECT") {
    const { effects } = action;
    const torchDiff = effects.reduce((diff, effect) => {
      if (!effect.torch_increase && !effect.torch_decrease) {
        return diff;
      }
      return effect.torch_increase
        ? diff + parseInt(effect.torch_increase, 10)
        : diff - parseInt(effect.torch_decrease, 10);
    }, 0);
    const totalTorch = torch + torchDiff;
    const maxRestricted = Math.min(totalTorch, 100);
    const minRestricted = Math.max(0, maxRestricted);

    return {
      ...state,
      torch: minRestricted
    };
  }
  return state;
};

const reducers = [durationReducer, buffReducer, torchReducer];

const rootReducer = (state, action) => {
  if (!state) {
    return {
      buffs: [],
      effects: [],
      torch: 50
    };
  }
  return reducers.reduce(
    (currentState, reducer) => reducer(currentState, action),
    state
  );
};

const extension =
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
export default createStore(rootReducer, extension);
