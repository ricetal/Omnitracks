


function printMessage(temperatureUnits, location, main, temperature) {

  var temperatureUnitsF= 'F';
    var temperatureUnitsC= 'C';
    const string = main;
const substring = "Rain";
  var temperatureC = convertTemperatureC(temperature, temperatureUnitsC);
  var temperatureF = convertTemperatureF(temperature, temperatureUnitsF);
  var message = "Location: " + location + "\nPrecipitation: " + string.includes(substring) + "\nCurrent Temperature In C: " + temperatureC + "\nCurrent Temperature in F: " + temperatureF + "\n" ;
 var csvmessage = "Location: " + location + ","+"\nPrecipitation: " + string.includes(substring) + ","+"\nCurrent Temperature In C: " + temperatureC +","+ "\nCurrent Temperature in F: " + temperatureF + "\n" ;



     const fs = require('fs');
fs.writeFile('Omnitrack.csv', csvmessage, (err) => {
    if (err) throw err;
    console.log('File Saved as Omnitrack.csv');
});
  console.log(message);
}
function printError(error) {
  console.error(error.message);
}
function convertTemperatureC(temperature, units) {
  var message = "";
  switch(units) {
    case 'C':
      temperature = temperature - 273.15;
      break;
  }
  message += temperature.toFixed(0) + '\u00B0' + units;
  return message;
}


function convertTemperatureF(temperature, units) {
  var message = "";
  switch(units) {
    case 'F':
      temperature = (9/5) * temperature - 459.67;
          break;
  }
  message += temperature.toFixed(0) + '\u00B0' + units;
  return message;
}
module.exports.printMessage = printMessage;
module.exports.printError = printError;
