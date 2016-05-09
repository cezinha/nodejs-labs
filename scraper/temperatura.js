var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + "-23.5737865,-46.6946916";

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      temperature = $("[data-variable='temperature'] .wx-value").html();

    console.log("Está " + temperature + "°C.");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});