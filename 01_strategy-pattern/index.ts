import { MallardDuck, ModelDuck } from "./class-duck";
import { FlyWithRockets } from "./fly-behavior";

const mallardDuck: MallardDuck = new MallardDuck();
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();

const modelDuck: ModelDuck = new ModelDuck();
modelDuck.display();
modelDuck.performFly();

// Changing FLyBehavior in Runtime
console.log("\nChanging ModelDuck's flying behavior...");
modelDuck.setFlyBehavior(new FlyWithRockets());
modelDuck.display();
modelDuck.performFly();
