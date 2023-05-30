export class Vacuum {
  x: number;
  y: number;
  orientation: string;

  constructor(x: number, y: number, orientation: string) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  getPosition(): string {
    return `x=${this.x} y=${this.y} orientation=${this.orientation}`;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getOrientation(): string {
    return this.orientation;
  }

  setX(x: number): void {
    this.x = x;
  }

  setY(y: number): void {
    this.y = y;
  }

  setOrientation(orientation: string): void {
    this.orientation = orientation;
  }
}
