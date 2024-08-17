export interface Subject<T> {
  registerObserver: (O: Observer<T>) => void;
  removeObserver: (O: Observer<T>) => void;
  notifyObservers: () => void;
}

export interface Observer<T> {
  update: (args: T) => void;
}

export interface DisplayElement {
  display: () => void;
}
