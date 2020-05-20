const Twit = require("twit");
const config = require("./config.js");

let T = new Twit(config);

var params = {
  /*   q: "rainbow",
  count: 2, */
  id: 1,
};
T.get("trends/place", params, gotData);

function gotData(err, data, response) {
  let trends = data[0].trends;
  let location = data[0].keys();
  console.log(location);
  trends.forEach((trend) => console.log(trend.name));
}
