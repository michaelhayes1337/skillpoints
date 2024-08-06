class Player {
  constructor({ name, type }) {
    this.name = name;
    this.type = type;
  }
  Introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor({ name, type, mana }) {
    super({ name, type });
    this.mana = mana;
  }

  Play() {
    console.log(`Weeeee I'm a ${this.type} with ${this.mana} mana`);
  }
}

const p1 = new Player({ name: "Conan", type: "Barbarian" });
p1.Introduce();
const p2 = new Wizard({ name: "John", type: "Wizard", mana: 50 });
p2.Introduce();
p2.Play();
