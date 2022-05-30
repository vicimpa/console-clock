import { Colors } from "./lib/Colors";
import { Screen } from "./lib/Screen";
import { Circle } from "./view/Circle";
import { Line } from "./view/Line";
import { Rectangle } from "./view/Rectange";

const screen = new Screen();
screen.resize();

const x = (screen.width / 2) | 0;
const y = (screen.height / 2) | 0;
const r = (Math.min(screen.width / 2, screen.height / 2) | 0) - 10;
const PI2 = Math.PI * 2;

const toPosition = (r = 0, angle = 0) => {
  return [
    x + r * Math.sin(angle),
    y + r * -Math.cos(angle)
  ] as [number, number];
};

const cube = screen.add(
  new Rectangle(
    x - r - 5,
    y - r - 5,
    r * 2 + 10,
    r * 2 + 10,
    Colors.WHITE,
    Colors.YELLOW
  )
);

const circle = screen.add(
  new Circle(x, y, r, Colors.BLACK, Colors.WHITE)
);

const hours = screen.add(
  new Line(x, y, 0, 0, Colors.BLUE)
);

const minutes = screen.add(
  new Line(x, y, 0, 0, Colors.GREEN)
);

const seconds = screen.add(
  new Line(x, y, 0, 0, Colors.RED)
);

const point = screen.add(
  new Circle(x, y, 4, Colors.RED, Colors.BLACK)
);

const update = (v: Line, a: number, r: number) => {
  [v.tx, v.ty] = toPosition(r, a);
};

const setDel = (v: Line, a: number, rs: number, re: number) => {
  [v.x, v.y] = toPosition(rs, a);
  [v.tx, v.ty] = toPosition(re, a);
};

const updateTime = () => {
  const d = new Date();
  const h = (d.getHours() % 12) / 12;
  const m = (d.getMinutes()) / 60;
  const s = (d.getSeconds()) / 60;

  update(hours, PI2 * h, r - 25);
  update(minutes, PI2 * m, r - 10);
  update(seconds, PI2 * s, r - 5);
  screen.render();
};


for (let i = 0; i < 60; i++) {
  const line = screen.add(
    new Line(0, 0, 0, 0, Colors.CYAN)
  );

  if (i % 5 != 0)
    setDel(line, (i / 60) * PI2, r - 2, r - 1);
}

for (let i = 0; i < 12; i++) {
  const line = screen.add(
    new Line(0, 0, 0, 0, Colors.BLACK)
  );

  setDel(line, (i / 12) * PI2, r - 3, r - 1);
}


updateTime();

setInterval(() => {
  updateTime();
}, 1000);


