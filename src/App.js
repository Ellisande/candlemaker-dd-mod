import React, { Component } from "react";
import { withState, compose, withProps, lifecycle } from "recompose";
import { connect, Provider } from "react-redux";
import { Typeahead } from "react-typeahead";
import "./App.css";
import JsonPretty from "react-json-pretty";
import buffs from "./buffs";
import effects from "./effects";
import skills from "./skills";
import hydrateSkill from "./stitch";
import store from "./stores";
import _ from "lodash";

const cleanName = name => {
  const cleanName = name
    .replace(/\d/, "")
    .replace(/'/g, "")
    .trim();
  return cleanName;
};

const getlevel = skill => {
  const level = skill.level || skill.name.match(/\d/) || 0;
};

const RawCollapse = ({ collapse, toggleCollapse, title, children }) => {
  return (
    <div onClick={() => toggleCollapse(!collapse)} className="list-item">
      {title}
      {collapse ? children : undefined}
    </div>
  );
};

const Collapse = compose(withState("collapse", "toggleCollapse"))(RawCollapse);

const Attribute = ({ attribute, value }) => (
  <div>
    <span>{attribute}</span>:<span>{JSON.stringify(value)}</span>
  </div>
);

const Effect = ({ effect }) => (
  <Collapse title={effect.id || effect.name}>
    {_.map(effect, (value, key) => (
      <Attribute key={key} attribute={key} value={value} />
    ))}
  </Collapse>
);

const List = ({ items }) =>
  items.map(item => (
    <Collapse title={item.name || item.id} key={item.name || item.id}>
      <JsonPretty json={item} />
    </Collapse>
  ));

const RawSkill = ({ skills, currentLevel, setCurrentLevel, setLinked }) => {
  const skill = skills[currentLevel];
  const id = skill.id || skill.name;
  const cleanId = id.replace(/'/g, "");
  const level = skill.level || cleanId.match(/\d/) || 0;
  const attributes = _.omit(skill, [
    "effect",
    "buff_ids",
    "id",
    "level",
    "name"
  ]);
  const effects = Array.isArray(skill.effect)
    ? [...skill.effect]
    : skill.effect
      ? [skill.effect]
      : [];
  const buffs = Array.isArray(skill.buff_ids)
    ? [...skill.buff_ids]
    : skill.buff_ids
      ? [skill.buff_ids]
      : [];
  const triggers = [...effects, ...buffs].map(i => i.replace(/'/g, ""));
  return (
    <div>
      <div>{cleanId}</div>
      <div>Level: {level}</div>
      <div>
        {_.range(0, skills.length).map(i => (
          <span
            onClick={() => setCurrentLevel(i)}
            key={i}
            style={{ padding: "5px", color: "blue", cursor: "pointer" }}
          >
            {i}
          </span>
        ))}
      </div>
      Attributes:
      <ul>
        {_.map(attributes, (value, key) => (
          <Attribute key={key} attribute={key} value={value} />
        ))}
      </ul>
      Triggers: (effect or buff)
      <ul>
        {triggers.map(trig => (
          <li key={trig}>
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setLinked(trig)}
            >
              {trig}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skill = withState(
  "currentLevel",
  "setCurrentLevel",
  props => props.currentLevel || 0
)(RawSkill);

const groupByEffectName = effect => {
  const uniqueId = effect.name || effect.id;
  return cleanName(uniqueId);
};

const allEffects = [...skills, ...buffs, ...effects];
const groupedEffects = _.groupBy(allEffects, groupByEffectName);

const RawLinkedSkills = ({ baseSkill, linkedSkills, setLinkedSkills }) => {
  const setFirstLinked = linkedIndex => {
    const newLinked = [groupedEffects[cleanName(linkedIndex)], undefined];
    setLinkedSkills(newLinked);
  };
  const setSecondLinked = linkedIndex =>
    setLinkedSkills([linkedSkills[0], groupedEffects[cleanName(linkedIndex)]]);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Skill skills={baseSkill} setLinked={setFirstLinked} />
      {linkedSkills[0] && (
        <Skill skills={linkedSkills[0]} setLinked={setSecondLinked} />
      )}
      {linkedSkills[1] && (
        <Skill skills={linkedSkills[1]} setLinked={() => {}} />
      )}
    </div>
  );
};

const LinkedSkills = compose(
  withState(
    "linkedSkills",
    "setLinkedSkills",
    props => props.linkedSkills || []
  ),
  lifecycle({
    componentDidUpdate(oldProps) {
      if (oldProps.baseSkill != this.props.baseSkill) {
        this.props.setLinkedSkills([]);
      }
    }
  })
)(RawLinkedSkills);

const RawEffectPicker = ({ selectedEffect, setSelectedEffect }) => (
  <div>
    <LinkedSkills baseSkill={groupedEffects[selectedEffect]} />
    <div>Search for an effect</div>
    <Typeahead
      options={Object.keys(groupedEffects)}
      onOptionSelected={option => setSelectedEffect(option)}
      defaultValue="embers"
      value="embers"
    />
  </div>
);

const EffectPicker = withState("selectedEffect", "setSelectedEffect", "embers")(
  RawEffectPicker
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ padding: "15px" }}>
          <h3>Candle Maker</h3>
          <EffectPicker />
        </div>
      </Provider>
    );
  }
}

export default App;
