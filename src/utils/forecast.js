const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily&appid=6b3fcbf75f10c88ec0b583bf4082d75d&units=metric`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.message) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `It is currently <strong>${body.current.temp}\u00B0C</strong> out there. Weather: ${body.current.weather[0].description}.`
      );
    }
  });
};

module.exports = forecast;
