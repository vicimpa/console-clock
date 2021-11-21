export class Entity {
  x = 0
  y = 0

  constructor(
    x: number,
    y: number
  ) {
    this.x = x
    this.y = y
  }

  render(x: number, y: number): number {
    return 0
  }
}