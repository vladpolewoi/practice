class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

const TS3: Typescript = new Typescript('3.0.0');
console.log(TS3.info('NAME'));

// -------------------------------

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
class Car {
  readonly numberOfWheels: number = 4;

  constructor(readonly model:string) {}
}

const newCar = new Car('BMW');
console.log(newCar.model);

// --------------------------

class Animal {
  protected voice: string = '';
  // default public
  public color: string = 'black';

  constructor() {
    this.go();
  }

  private go(): void {
    console.log('GO');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat1 = new Cat()
cat1.setVoice('Voice 1');
// can't get property voice or go()
console.log(cat1.color);

// ---------------------------

abstract class Component {
  abstract render(): void;
  abstract info(): void;
}

class AppComponent extends Component {
  render(): void {
    console.log('component on render...');
  }

  info(): void {
    console.log('info:');
  }
}
