import { Entity } from "./Entity"
import { Colors, drawPoint } from './Colors'

const { stdin, stdout } = process

stdin.resume()

export class Screen {
  width = 0
  height = 0
  runned = false

  objects: Entity[] = []

  constructor(public back = Colors.TRANSPARENCY) { }

  add<T extends Entity>(object: T) {
    this.objects.push(object)
    return object
  }

  del<T extends Entity>(object: T) {
    const index = this.objects.indexOf(object)
    if (index != -1) this.objects.splice(index, 1)
    return object
  }

  renderPoint(x: number, y: number) {
    let first = this.back
    let second = this.back

    for (const o of this.objects) {
      const [
        firstNew = Colors.TRANSPARENCY,
        secondNew = Colors.TRANSPARENCY,
      ] = [o.render(x, y), o.render(x, y + 1)]

      first = firstNew == Colors.TRANSPARENCY ? first : firstNew
      second = secondNew == Colors.TRANSPARENCY ? second : secondNew
    }

    stdout.cursorTo(x, y / 2)
    stdout.write(drawPoint(first << 4 | second))
  }

  resize() {
    const [newWidth, newHeight] = stdout.getWindowSize()
    this.width = newWidth
    this.height = newHeight * 2
    this.clear()
    this.render()
  }

  clear() {
    for (let y = this.height - 1; y >= 0; y--) {
      stdout.cursorTo(0, y)
      stdout.clearLine(1)
    }
  }

  render() {
    if (!this.runned) {
      this.runned = true
      stdout.on('resize', () => {
        this.resize()
        this.render()
      })
    }
    for (let y = 0; y < this.height; y += 2) {
      for (let x = 0; x < this.width; x++) {
        this.renderPoint(x, y)
      }
    }
  }
}