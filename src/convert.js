function effectToJson(effectLine) {
  const keyValueRegex = /\.([^ ]+) ([^\.]+)( .)?/g;
  const matches = [];
  while (true) {
    const match = keyValueRegex.exec(effectLine);
    if (!match) {
      break;
    }
    const value = match[2].trim().replace(/"/g, "'");

    const arrayValue = value.match(/'.*'.*'/)
      ? value.match(/('[^']+')(?:[ $]?)/g).map(i => i.trim())
      : value;

    matches.push({
      [match[1]]: arrayValue
    });
  }
  const effect = matches.reduce(
    (oldObj, newObj) => ({ ...oldObj, ...newObj }),
    {}
  );
  return JSON.stringify(effect);
}

const parseValue = value => (Array.isArray(value) ? value.join(" ") : value);
function fromJson(jsonEffect) {
  const effect = JSON.parse(jsonEffect);
  return fromObject(effect);
}

function fromObject(effect) {
  const pairStrings = Object.keys(effect).map(key => {
    const value = parseValue(effect[key]);
    const cleanedValue =
      typeof value == "string" ? value.replace(/'/g, '"') : value;
    return `.${key} ${cleanedValue}`;
  });
  return pairStrings.join(" ");
}

module.exports = {
  effectToJson,
  fromJson,
  fromObject
};
