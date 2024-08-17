export interface FlyBehavior {
  fly: () => void;
}

export class FlyWithWings implements FlyBehavior {
  fly: () => void = () => {
    console.log("**Flying with wings...**");
  };
}

export class FlyNoFly implements FlyBehavior {
  fly: () => void = () => {
    console.log("cannot fly...");
  };
}

export class FlyWithRockets implements FlyBehavior {
  fly: () => void = () => {
    console.log("**Flying with ROCKETS!!!**");
  };
}
