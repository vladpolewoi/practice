// Single Responsibility Principal

class Plane {
  maxSpeed: Number
  isFlying: Boolean

  constructor(readonly model: string, maxSpeed: Number) {
    this.maxSpeed = maxSpeed
  }

  fly(): void {
    this.isFlying = true
  }
  // 1. Class Plane have nothing to do with displaying his info in JSON
  // so it's better to move it in new class
  // class should be responsible only for itself

  // getInfoInJSON(): PlaneInfo {
  //   return {
  //     model: this.model,
  //     maxSpeed: this.maxSpeed,
  //   }
  // }
}

class InfoBox {
  constructor(readonly plane: Plane) {}
  // 2. Moved method to new class which is responsible
  // only for displaying info

  getInfoInJSON(): string {
    return JSON.stringify({
      model: this.plane.model,
      maxSpeed: this.plane.maxSpeed
    })
  }
}

const plane = new Plane('Airbus-37', 3453)
const infoBox = new InfoBox(plane)

console.log(infoBox.getInfoInJSON())
