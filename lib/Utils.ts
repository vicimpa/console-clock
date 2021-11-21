export const dist = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => {
  return Math.round(
    Math.sqrt(
      (x1 - x2) ** 2 + (y1 - y2) ** 2
    )
  )
}

export const distSeg = (
  x: number,
  y: number,
  ax: number,
  ay: number,
  bx: number,
  by: number
) => {
  return distToSegmentSquared(
    { x, y },
    { x: ax, y: ay },
    { x: bx, y: by }
  )
}
type v2 = { x: number, y: number }
function sqr(x: number) { return x * x }
function dist2(v: v2, w: v2) { return sqr(v.x - w.x) + sqr(v.y - w.y) }
function distToSegmentSquared(p: v2, v: v2, w: v2) {
  var l2 = dist2(v, w);
  if (l2 == 0) return dist2(p, v);
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, {
    x: v.x + t * (w.x - v.x),
    y: v.y + t * (w.y - v.y)
  });
}