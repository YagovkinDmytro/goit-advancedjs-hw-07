class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(public key: Key) {}

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
    return console.log(this.tenants);
  }
  public abstract openDoor(key: number): void;
}

class MyHouse extends House {
  door = false;
  constructor(key: Key) {
    super(key);
  }

  public openDoor(key: number): void {
    if (key === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const hause = new MyHouse(key);
const person = new Person(key);

hause.openDoor(person.getKey());
hause.comeIn(person);

export {};
