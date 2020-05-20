const Twit = require("twit");
const config = require("./config.js");
const woeid = require("woeid");
console.log(woeid.getWoeid("canada"));

let T = new Twit(config);

var params = {
  id: 2459115,
  exclude: "hashtags",
};
T.get("trends/place", params, gotData);

function gotData(err, data, response) {
  let trends = data[0].trends;
  let location = data[0].locations.name;
  // console.log(location);
  /// trends.forEach((trend) => console.log(trend.name));
}
