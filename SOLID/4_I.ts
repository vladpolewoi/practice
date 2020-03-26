// Interface segregation principle

// class Animal {
//   swim():void {
//     console.log('swim');
//   }

//   fly():void {
//     console.log('fly');
//   }
// }

// class Eagle extends Animal {
//   swim():void {
//     return null;
//   }
// }

// class Fish extends Animal {
//   fly():void {
//     return null;
//   }
// }

// const eagle = new Eagle();

// eagle.swim();
// eagle.fly();

// const fish = new Fish();

// fish.swim();
// fish.fly();

// 1. Problem is what class Eagle and Fish have methods what they don't need.
// We have to rewrite this methods. To avoid this lets rewrite:

// 2. Remove all methods implementation
class Animal {}

// 3. implement methods like this in composition style
const canSwim = {
  swim(): void {
    console.log('swim');
  }
}

const canFly =  {
  fly(): void {
    console.log('fly');
  }
}

// 4. remove rewriting methods
class Eagle extends Animal {}
// 5. add ability to fly via assign method to class prototype
Object.assign(Eagle.prototype, canFly);

class Fish extends Animal {}
Object.assign(Fish.prototype, canSwim);

const eagle = new Eagle();
// 6. Have problems with typescript here :)
// @ts-ignore
eagle.fly();

const fish = new Fish();
// @ts-ignore
fish.swim();
