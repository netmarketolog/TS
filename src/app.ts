class Key {
  protected key: number;
  protected pass: number[];
  constructor(key: number) {
    this.pass = [12345, 54321, 98123];
    this.key = key;
  }

  public getStatus(): boolean {
    return this.pass.includes(this.key);
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

    if (this.door) {
      this.tenants.push(person);
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  public openDoor(key: Key): void {
    if (key.getStatus()) {
      this.door = true;
      console.log("Door is open");
    } else {
      console.log("Door is closed");
    }
  }
}

const myKey = new Key(12345);
const myHouse = new MyHouse(myKey);

myHouse.openDoor(myKey);
