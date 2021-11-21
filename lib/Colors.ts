export enum Colors {
  TRANSPARENCY = 0,
  BLACK = 1,
  RED = 2,
  GREEN = 3,
  YELLOW = 4,
  BLUE = 5,
  MAGENTA = 6,
  CYAN = 7,
  WHITE = 8
}

const { TRANSPARENCY: T } = Colors

export const drawPoint = (n: number) => {
  const [a, b] = [n >> 4 & 0b1111, n & 0b1111]
  const [cA, cB] = [a, b].map(e => Colors[e])

  if (a != T && b == T) return Fg[cA] + '▀'
  if (b != T && a == T) return Fg[cB] + '▄'
  if (a != T && b != T) return Fg[cA] + Bg[cB] + '▀' + "\x1b[0m"
  return ' '
}

class Fg {
  static BLACK = "\x1b[30m"
  static RED = "\x1b[31m"
  static GREEN = "\x1b[32m"
  static YELLOW = "\x1b[33m"
  static BLUE = "\x1b[34m"
  static MAGENTA = "\x1b[35m"
  static CYAN = "\x1b[36m"
  static WHITE = "\x1b[37m"
}

class Bg {
  static BLACK = "\x1b[40m"
  static RED = "\x1b[41m"
  static GREEN = "\x1b[42m"
  static YELLOW = "\x1b[43m"
  static BLUE = "\x1b[44m"
  static MAGENTA = "\x1b[45m"
  static CYAN = "\x1b[46m"
  static WHITE = "\x1b[47m"
}

