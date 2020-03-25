// Liskov substitution principal

interface Person {
  // old code: look step 3
  // access(): void {
  //   console.log('Access Granted!')
  // }
}

// 2. Add new layer of Abstraction
abstract class Member implements Person {
  // 3. move access method here
  access(): void {
    console.log('Access Granted!')
  }
}

// 4. Class for Guests
interface Guest extends Person {}

// 5. Now it extends from Member (not Person)
// class Director extends Person {
class Director extends Member {
  fireEmployee(): void {}
}

// 6. Now it extends from Member (not Person)
// class Employee extends Person {
class Employee extends Member {
  work(): void {}
}

// 6. Now it extends from Guest (not Person)
// class Stranger extends Person {
class Stranger implements Guest {}

// 7. change parameter person type to Member instead of Person
// function openSecretDoor(person: Person) {
function openSecretDoor(person: Member): void {
  //old code
  // person.access()

  // 8. Check if person is extends from member
  if (person instanceof Member) {
    person.access()
  }
}

openSecretDoor(new Director())
openSecretDoor(new Employee())
// 9. uncomment this below and see it gives and error
// openSecretDoor(new Stranger())

// 1. Problem is what function openSecretDoor fires access method
// to every person it gets no matter if this is realized.
// Working not correctly for base class given.
