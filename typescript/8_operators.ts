interface Person {
  name: string,
  age: number,
}

type PersonKeys = keyof Person; // name | age

const myName: PersonKeys = 'name';
let key: PersonKeys = 'name';
key = 'age';

// ---------

type User = {
  _id: number,
  name: string,
  email: string,
  createdAt: Date,
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // name | email
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let user1: UserKeysNoMeta = 'name';
user1 = 'name';
user1 = 'email';
