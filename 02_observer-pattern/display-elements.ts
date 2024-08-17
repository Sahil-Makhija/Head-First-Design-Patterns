import type { DisplayElement, Observer, Subject } from "./observer-pattern";
import type { WeatherData } from "./weather-data";

export class CurrentConditionsDisplay
  implements Observer<WeatherData>, DisplayElement
{
  private weatherData: Subject<WeatherData>;
  private temperature: number = NaN;
  private humidity: number = NaN;
  private pressure: number = NaN;

  constructor(weatherData: Subject<WeatherData>) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update: (args: WeatherData) => void = (data) => {
    this.temperature = data.temperature;
    this.pressure = data.pressure;
    this.humidity = data.humidity;
    this.display();
  };

  public display: () => void = () => {
    console.log(
      `Current Conditions : ${this.temperature} F degress, humidity %${this.humidity} and pressure ${this.pressure} `
    );
  };
}
