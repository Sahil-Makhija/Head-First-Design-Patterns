# SimUDuck - Design Patterns Project

This project is a practical implementation of the **Strategy Design Pattern** as part of my learning journey through the book "Head First Design Patterns." The purpose of the project is to create a simulation of different types of ducks, each with varying behaviors like flying and quacking. The Strategy Pattern is used to allow these behaviors to be interchangeable at runtime.

## The Strategy Pattern

**Definition**: The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

In this project, the Strategy Pattern is implemented by defining interfaces for fly and quack behaviors, allowing different types of ducks to have unique behavior implementations that can be changed dynamically.

## Project Structure

- **`src/`**: Contains the main source code for the project.
  - **`fly-behavior.ts`**: Interface for fly behavior, implementing `FlyWithWings` behavior, `FLyNoWay` behavior and `FlyWithRockets` behavior.
  - **`QuackBehavior.ts`**: Interface for quack behavior, implementing `Quack` , `Squeak` and `MuteQuack` behaviors.
  - **`Duck.ts`**: Abstract base class for all ducks, including concrete classes `MallardDuck` and `ModelDuck`.
  - **`index.ts`**: Main entry point for running the simulation.

## Running the Project

This project was initialized using [Bun](https://bun.sh/). To run the project:

1. **Install Bun**: If you haven't installed Bun yet, you can follow the installation instructions on their [website](https://bun.sh/).

2. **Clone the repository** and navigate to the project directory.

3. **Run the code**:
   ```bash
   bun run src/index.ts
   ```

This will execute the simulation, showcasing the behavior of different types of ducks.

## Learning Outcomes

Through this project, I've gained a deeper understanding of the Strategy Pattern and its application in real-world scenarios. This pattern is particularly powerful in situations where you need to define a family of algorithms or behaviors and allow them to be interchanged dynamically, promoting flexibility and adherence to the Open/Closed Principle.
