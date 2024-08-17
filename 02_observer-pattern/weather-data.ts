import type { Observer, Subject } from "./observer-pattern";

export interface WeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
}

export class WeatherDataClass implements Subject<WeatherData> {
  private temperature: number = NaN;
  private humidity: number = NaN;
  private pressure: number = NaN;
  private ObserverList: Array<Observer<WeatherData>> = [];

  public registerObserver: (O: Observer<WeatherData>) => void = (observer) => {
    this.ObserverList.push(observer);
  };

  public removeObserver: (o: Observer<WeatherData>) => void = (observer) => {
    const index = this.ObserverList.indexOf(observer);
    if (index > -1) {
      this.ObserverList.splice(index, 1);
    }
  };

  public notifyObservers(): void {
    const data: WeatherData = {
      temperature: this.temperature,
      humidity: this.humidity,
      pressure: this.pressure,
    };
    this.ObserverList.forEach((observer) => {
      observer.update(data);
    });
  }

  private measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(data: WeatherData) {
    this.temperature = data.temperature;
    this.humidity = data.humidity;
    this.pressure = data.pressure;
    this.measurementsChanged();
  }
}
