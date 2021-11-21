import { Colors } from "../lib/Colors";
import { Entity } from "../lib/Entity";

export class Rectangle extends Entity {
  public tx: number
  public ty: number
  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    public c: Colors = Colors.WHITE,
    public f: Colors = Colors.TRANSPARENCY
  ) {
    super(x, y)
    this.tx = x + w
    this.ty = y + h
  }

  render(vx: number, vy: number) {
    const { x, y, tx, ty, c, f } = this

    if (false
      || ((vx == x || vx == tx) && vy >= y && vy <= ty)
      || ((vy == y || vy == ty) && vx >= x && vx <= tx)
    ) return c

    if (vx >= x && vx <= tx && vy >= y && vy <= ty)
      return f
  }
}