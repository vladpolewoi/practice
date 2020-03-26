// Dependency inversion principle
class Fetch {
  request(): Promise<string> {
    return Promise.resolve('data fetch');
  }
}

class LocalStorage {
  get(): Promise<string> {
    return Promise.resolve('localStorage');
  }
}

// 2. We will create wrapper for each implementation
interface Client {
  getData(): Promise<string>
}

class FetchClient implements Client {
  fetch: Fetch

  constructor() {
    this.fetch = new Fetch();
  }

  getData(): Promise<string> {
    return this.fetch.request();
  }
}

class LocalStorageClient {
  localStorage: LocalStorage;

  constructor() {
    this.localStorage = new LocalStorage();
  }

  getData(): Promise<string> {
    return this.localStorage.get();
  }
}

// 3. rewrite database class to common client class
class DataBase {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  getData(): void {
    console.log(this.client.getData());
  }
}

const db1 = new DataBase(new FetchClient());
db1.getData();

const db2 = new DataBase(new LocalStorageClient());
db2.getData();

// 1. when we need to add different implementation for example localStorage
// We have to rewrite methods in DataBase because it depending on Fetch
