var http = require("http");
var printer = require("./printer");
function getWeather(temperatureUnits) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?zip=75201,us&appid=28b7b986108a285b1e7cef0fd1222cca';
  var request = http.get(url, function(response) {
    var body = "";
    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          var weather = JSON.parse(body);
          printer.printMessage(temperatureUnits, weather.name, weather.weather[0].main, weather.main.temp);
        } catch(error) {
          printer.printError({message: "Hay un error (" + error.message + ")"});
        }
      } else {
        printer.printError({message: "Error buscando clima " + zipcode});
      }
    });
    response.on('error', function(error) {
      printer.printError({message: "Error de conexion. (" + error.message + ")"});
    });
  });
}

module.exports.getWeather = getWeather;
