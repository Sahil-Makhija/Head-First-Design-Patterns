import { FlyNoFly, FlyWithWings, type FlyBehavior } from "./fly-behavior";
import { MuteQuack, Quack, type QuackBehavior } from "./quack-behavior";

abstract class Duck {
  protected flyBehavior: FlyBehavior;
  protected quachBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quachBehavior = quackBehavior;
  }

  abstract display: () => void;

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quachBehavior.quack();
  }

  setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackBehavior): void {
    this.quachBehavior = qb;
  }
}

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display: () => void = () => {
    console.log("I'm a Mallard Duck");
  };
}

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoFly(), new MuteQuack());
  }

  display: () => void = () => {
    console.log("I'm a model duck");
  };
}
