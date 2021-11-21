import { Colors } from "../lib/Colors";
import { Entity } from "../lib/Entity";

export class Point extends Entity {
  constructor(
    x: number,
    y: number,
    public c: Colors = Colors.WHITE
  ) {
    super(x, y)
  }

  render(vx: number, vy: number) {
    const { x, y, c } = this

    if (vx == x && vy == y)
      return c
  }
}