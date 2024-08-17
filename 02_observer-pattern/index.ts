import { CurrentConditionsDisplay } from "./display-elements";
import { WeatherDataClass as WeatherData } from "./weather-data";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements({ humidity: 12, pressure: 15, temperature: 20 });
weatherData.setMeasurements({ humidity: 21, pressure: 51, temperature: 2 });
weatherData.setMeasurements({ humidity: 40, pressure: 50, temperature: 60 });
