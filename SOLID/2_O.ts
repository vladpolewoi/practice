// Open Close Principle

// class Square {
//   size: number
//   readonly type: string = 'square'

//   constructor(size: number) {
//     this.size = size
//   }
// }

// class Circle {
//   radius: number
//   readonly type: string = 'circle'

//   constructor(radius: number) {
//     this.radius = radius
//   }
// }

// type Shape = Square & Circle
// type oneOfShapes = Square | Circle

// class AreaCalculator {
//   shapes: Array<oneOfShapes>

//   constructor(shapes: Array<oneOfShapes>) {
//     this.shapes = shapes
//   }

//   sum(): number {
//     return this.shapes.reduce((acc: number, shape: Shape) => {
//       if (shape.type === 'circle') {
//         acc += Math.PI * (shape.radius ** 2)
//       } else if (shape.type === 'square') {
//         acc += shape.size ** 2
//       }
//       return acc
//     }, 0)
//   }
// }

// const calc = new AreaCalculator([new Circle(5), new Square(2)])

// console.log(calc.sum())

// 1. If we want to add Rectangle class and also calculate its area
// we will break open close principle since we will change sum method
// in AreaCalculator class.

// 2. We need to create abstract class Shape
abstract class Shape {
  // 3. Create abstract method area
  abstract area(): number
}

// 4. Extends from abstract class
class Square extends Shape {
  size: number
  // 7. Remove property type since we don't need it anymore

  constructor(size: number) {
    // 5. Call supper because this is inherited from other class
    super()
    this.size = size
  }

  // 6. Realization of method area
  area(): number {
    return this.size ** 2
  }
}

class Circle extends Shape {
  radius: number

  constructor(radius: number) {
    super()
    this.radius = radius
  }

  area(): number{
    return (this.radius ** 2) * Math.PI
  }
}

class Rectangle extends Shape {
  width: number
  height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  area(): number {
    return this.width * this.height
  }
}


class AreaCalculator {
  shapes: Array<Shape>

  constructor(shapes: Array<Shape>) {
    this.shapes = shapes
  }

  sum(): number {
    return this.shapes.reduce((acc: number, shape: Shape) => {
      // 8. Rewrite this method to use native area calculator method
      return acc + shape.area()
    }, 0)
  }
}

const calc = new AreaCalculator([new Circle(5), new Square(2), new Rectangle(10, 20)])

console.log(calc.sum())
