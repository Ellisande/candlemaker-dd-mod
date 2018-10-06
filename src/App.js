import React, { Component } from "react";
import { withState, compose, withProps } from "recompose";
import { connect, Provider } from "react-redux";
import "./App.css";
import JsonPretty from "react-json-pretty";
import buffs from "./buffs";
import effects from "./effects";
import skills from "./skills";
import hydrateSkill from "./stitch";
import store from "./stores";

const hydratedSkills = skills.map(hydrateSkill);

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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h3>Candle Maker</h3>
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
