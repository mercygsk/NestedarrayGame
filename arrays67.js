class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.id = 1;
    this.inventory = [];
  }

  roll(mod = 0) {
    //const result = Math.floor(Math.random() * 20) + 1 + mod;
    //console.log(`${this.name} rolled a ${result}.`);
    return Math.floor(Math.random() * 20) + 1 + mod;
  }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]; // Static property
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.isValidRole(role)) {
        throw new Error(`Invalid role for adventurer: ${role}`);
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    static isValidRole(role) {
      return Adventurer.ROLES.includes(role);
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll(); // Using static method
    }
  
    duel(opponent) {
      while (this.health > 50 && opponent.health > 50) {
        const thisRoll = super.roll();
        const opponentRoll = opponent.roll();
        console.log(`${this.name} rolls: ${thisRoll}, Health: ${this.health} ${opponent.name} rolls: ${opponentRoll}, opponent health: ${opponent.health}`);
  
        if (thisRoll > opponentRoll) {
          opponent.health -= 1;
          console.log(`${opponent.name} loses 1 health. Health: ${opponent.health}`);
        } else if (thisRoll < opponentRoll) {
          this.health -= 1;
          console.log(`${this.name} loses 1 health. Health: ${this.health}`);
        } else {
          console.log("It's a tie!");
        }
      }
  
      if (this.health > 50) {
        console.log(`${this.name} wins the duel with ${this.health} health remaining!`);
      } else {
        console.log(`${opponent.name} wins the duel with ${opponent.health} health remaining!`);
      }
    }
  }
  
  // Create instances using the new Adventurer class
  const robin = new Adventurer("Robin", "Fighter");
  const alice = new Adventurer("Alice", "Wizard");
  console.log(robin)
  console.log(alice)
  
  // Test the duel method
  robin.duel(alice);