const xml = require("xml2js");
const _ = require("lodash");
const fs = require("fs");

const l10nXml = fs
  .readFileSync("./game_base/heroes.string_table.xml")
  .toString();

const result = new Promise((resolve, reject) =>
  xml.parseString(
    l10nXml.toString(),
    (err, result) => (err ? reject(err) : resolve(result))
  )
)
  .then(result => result.root.language[0].entry)
  .then(raw => raw.filter(value => value._ && value.$))
  .then(withoutJunk =>
    withoutJunk.map(value => ({ id: value.$.id, data: value._ }))
  )
  .then(formatted => formatted.filter(value => value.id.match(/occultist/g)));

var done = (function wait() {
  if (!done) setTimeout(wait, 1000);
})();
result
  .then(result => {
    fs.writeFileSync("./occultist_l10n.json", JSON.stringify(result));
  })
  .finally(() => (done = true));
