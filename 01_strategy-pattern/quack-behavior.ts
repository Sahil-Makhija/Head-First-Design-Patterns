export interface QuackBehavior {
  quack: () => void;
}

export class Quack implements QuackBehavior {
  quack: () => void = () => {
    console.log("=<<< 'Quac, Quack'");
  };
}

export class Squeak implements QuackBehavior {
  quack: () => void = () => {
    console.log("=<<< 'SQUEAK'");
  };
}

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("=<<< ~Silence~");
  }
}
