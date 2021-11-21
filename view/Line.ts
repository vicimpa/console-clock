import { Colors } from "../lib/Colors";
import { Entity } from "../lib/Entity";
import { distSeg } from "../lib/Utils";

export class Line extends Entity {
  constructor(
    x: number,
    y: number,
    public tx: number,
    public ty: number,
    public c: Colors = Colors.WHITE
  ) {
    super(x, y)

  }

  render(vx: number, vy: number) {
    const { c, x, y, tx, ty } = this

    const s =
      distSeg(
        vx, vy,
        x, y,
        tx, ty
      )

    if (s >= -0.25 && s <= 0.25)
      return c

    return 0
  }
}