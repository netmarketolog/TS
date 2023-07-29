class Key {
  protected key: boolean;
  constructor() {
    this.key = true;
  }
}

class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
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
    console.log(person);

    if (this.door) this.tenants.push(person);
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  public openDoor(key: Key): void {
    console.log(key);

    if (key) this.door = key;
    console.log(this.door);
  }
}

const myKey = new Key();
const myHouse = new MyHouse(myKey);

myHouse.openDoor(myKey);
