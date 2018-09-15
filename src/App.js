import React, { Component } from "react";
import { withState, compose, withProps } from "recompose";
import { connect, Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import JsonPretty from "react-json-pretty";
import buffs from "./buffs.json";
import effects from "./effects.json";
import skills from "./skills.json";
import hydrateSkill from "./stitch";
import store from "./stores";

const hydratedSkills = skills.map(hydrateSkill);

const darkness = effects.find(i => i.name === "'Darkness 3'");
const light = effects.find(i => i.name === "'Light 3'");
console.log("My things", darkness, light);

const RawCollapse = ({ collapse, toggleCollapse, title, children }) => {
  return (
    <div onClick={() => toggleCollapse(!collapse)} className="list-item">
      {title}
      {collapse ? children : undefined}
    </div>
  );
};

const Collapse = compose(withState("collapse", "toggleCollapse"))(RawCollapse);

const List = ({ items }) =>
  items.map(item => (
    <Collapse title={item.name || item.id} key={item.name || item.id}>
      <JsonPretty json={item} />
    </Collapse>
  ));

const AllEffects = () => [
  <div key="buffs">
    <div>Buffs</div>
    <List items={buffs} />
  </div>,
  <div key="effects">
    <div>Effects</div>
    <List items={effects} />
  </div>,
  <div key="skills">
    <div>Skills</div>
    <List items={skills} />
  </div>
];

const RawAction = ({ use, skill, effect, className }) => {
  return (
    <button onClick={use} className={className}>
      {(skill && skill.id) || (effect && effect.name)}
    </button>
  );
};

const activeTorch = (buff, torch) =>
  (buff.rule_type === "lightabove" && torch >= buff.rule_data.float) ||
  (buff.rule_type === "lightbelow" && torch <= buff.rule_data.float);
const activeBuffSelector = state => {
  const initialBuffs = state.buffs;
  const onlyActive = initialBuffs.filter(buff =>
    activeTorch(buff, state.torch)
  );
  return {
    items: onlyActive
  };
};
const ActiveBuffs = connect(activeBuffSelector)(List);

const activeStatsSelector = state => {
  const initialBuffs = state.buffs;
  const onlyActive = initialBuffs.filter(buff =>
    activeTorch(buff, state.torch)
  );
  const stats = onlyActive.reduce((stats, buff) => {
    const type =
      buff.stat_type + (buff.stat_sub_type ? ": " + buff.stat_sub_type : "");
    return {
      ...stats,
      [type]: (stats[type] || 0) + buff.amount
    };
  }, {});
  return {
    stats
  };
};

const RawStats = ({ stats }) =>
  Object.keys(stats).map(key => (
    <div className="light">
      {key}: {stats[key].toFixed(2)}
    </div>
  ));

const ActiveStats = connect(activeStatsSelector)(RawStats);

const ReduceTorch = compose(
  connect(
    () => ({}),
    (dispatch, props) => ({
      use: () =>
        dispatch({
          type: "EFFECT",
          buffs: [],
          effects: [darkness]
        })
    })
  ),
  withProps({
    skill: {
      id: "Reduce Torch"
    },
    className: "torch-modifier"
  })
)(RawAction);

const IncreaseTorch = compose(
  connect(
    () => ({}),
    (dispatch, props) => ({
      use: () =>
        dispatch({
          type: "EFFECT",
          buffs: [],
          effects: [light]
        })
    })
  ),
  withProps({
    skill: {
      id: "Increase Torch"
    },
    className: "torch-modifier"
  })
)(RawAction);

const Action = connect(
  () => ({}),
  (dispatch, { skill }) => {
    return {
      use: () => {
        const effects = [...skill.effects];
        const buffLists = effects.map(effect => effect.buffs);
        const allBuffs = buffLists.reduce(
          (all, current) => [...all, ...current],
          []
        );
        dispatch({
          type: "EFFECT",
          buffs: allBuffs,
          effects
        });
      }
    };
  }
)(RawAction);

const RawTorch = ({ torch }) => (
  <div>
    <div>Torch light: {torch}</div>
  </div>
);

const Torch = connect(state => ({
  torch: state.torch
}))(RawTorch);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h3>Candle Maker</h3>
          <div>
            <IncreaseTorch />
            <ReduceTorch />
            <Torch />
          </div>

          <div className="current-state">
            <div className="column">
              <div>Active Buffs</div>
              <ActiveBuffs />
            </div>
            <div className="column">
              <div>Active Stats</div>
              <ActiveStats />
            </div>
          </div>
          <div>
            {hydratedSkills.map(skill => (
              <Action key={skill.id} skill={skill} />
            ))}
          </div>
          <div className="all-effects">
            <AllEffects />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
