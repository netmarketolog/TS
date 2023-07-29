class Key {
  protected signature: number;
  constructor() {
    this.signature = this.generateSig();
  }

  private generateSig(): number {
    return Math.round(Math.random() * 100000);
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  protected key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }
  public abstract openDoor(key: Key): void;

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Come in home ");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  public openDoor(key: Key): void {
    console.log(MyHouse);
    console.log(Key);

    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is open");
    } else {
      console.log("Door is closed");
    }
  }
}

const myKey = new Key();
const myHouse = new MyHouse(myKey);
const person = new Person(myKey);
const badKey = new Key();

myHouse.openDoor(badKey);
myHouse.comeIn(person);
