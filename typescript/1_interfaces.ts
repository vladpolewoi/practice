interface Rect {
  readonly id: string,
  color?: string,
  size: {
    width: number,
    height: number,
  }
}

const rect1: Rect = {
  id: '12H24',
  size: {
    width: 50,
    height: 200,
  },
  color: 'white'
}

const rect2: Rect = {
  id: '14SA243',
  size: {
    width: 100,
    height: 50,
  }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ------------------------------

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '23325',
  size: {
    width: 120,
    height: 55,
  },
  getArea(): number {
    return this.width * this.height
  }
}

// ------------------------------

interface IClock {
  time: Date,
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// ----------------------------

interface Styles {
  [key: string]: string
}

const css: Styles = {
  'border': '1px solid black',
  'width': '50px',
  'height': '10px'
}