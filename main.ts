import { Vacuum } from "./class/vacuum";

type Coordinates = { x: number; y: number };

function move(
  dimension: Coordinates,
  vacuum: Vacuum,
  directions: string
): string {
  const orientations: string[] = ["N", "W", "S", "E"];
  let orientationIndex = orientations.findIndex(
    (element) => element === vacuum.getOrientation()
  );
  directions.split("").forEach((direction) => {
    if (direction.toUpperCase() === "D") {
      if (orientationIndex === 3) {
        orientationIndex = 0;
      } else {
        orientationIndex++;
      }
    } else if (direction.toUpperCase() === "G" && vacuum.getX() > 0) {
      if (orientationIndex === 0) {
        orientationIndex = 3;
      } else {
        orientationIndex--;
      }
    } else if (direction.toUpperCase() === "A" && vacuum.getY()) {
      if (orientationIndex === 0 && vacuum.getY() < dimension.y) {
        vacuum.setY(vacuum.getY() + 1);
      } else if (orientationIndex === 1 && vacuum.getX() < dimension.x) {
        vacuum.setX(vacuum.getX() + 1);
      } else if (orientationIndex === 2 && vacuum.getY() > 0) {
        vacuum.setY(vacuum.getY() - 1);
      } else if (orientationIndex === 3 && vacuum.getX() > 0) {
        vacuum.setX(vacuum.getX() - 1);
      }
    }
  });
  vacuum.orientation = orientations[orientationIndex];
  return vacuum.getPosition();
}

let vacuum = new Vacuum(5, 5, "N");
let dimension: Coordinates = { x: 10, y: 10 };

console.log(move(dimension, vacuum, "DADADADAA"));
