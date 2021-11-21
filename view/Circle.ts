import { Colors } from "../lib/Colors";
import { Entity } from "../lib/Entity";
import { dist } from "../lib/Utils";

export class Circle extends Entity {

  constructor(
    x: number,
    y: number,
    public r: number,
    public c: Colors = Colors.WHITE,
    public f: Colors = Colors.TRANSPARENCY
  ) { super(x, y) }
  render(vx: number, vy: number): number {
    const { x, y, r, c, f } = this
    const d = dist(x, y, vx, vy)

    if (d <= r)
      return d >= r ? c : f
  }
}