const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }

    // console.log(adventurer.inventory[0])

//###################################################################

const adventurer1 = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
    }
// console.log(adventurer1.companion.type)
// console.log(adventurer1.companion.name)
//###############################################################################
//Objects can also have their own functions, called methods.
const adventurer2 = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

// Accessing Leo's companion Frank's belongings
//console.log(adventurer2.companion.companion.belongings);

// Rolling dice for Robin
//adventurer2.roll();
//##########################################################################################################################
class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.id = 1;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
//   console.log(robin)


  
  // Adding companion Leo
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
//   console.log(robin)
  
  // Adding companion Frank to Leo
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // Roll for Robin
  //robin.roll();
  
  // Roll for Leo (companion of Robin)
  //robin.companion.roll();
  
  // Roll for Frank (companion of Leo)
  //robin.companion.companion.roll();

//#######################################################################################################

class Adventurer3 extends Character {                                                                           //extends 2 classes child extends parent
    constructor(name, role) {
      super(name);                                                                                    //super: create object from parent class, inherites
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins","bag");
    }
    
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    
    // Additional method for adventurers
    rest() {
      console.log(`${this.name} is taking a rest...`);
      this.health += 10; // Increase health by 10 when resting
    }
  }
  
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }

    
    // Additional method for companions
    play() {
      console.log(`${this.name} is playing happily.`);
    }
  }
  
  // Create instances using the new Adventurer and Companion classes
   const robin1 = new Adventurer3("Robin", "Warrior");
   //console.log(robin1)
  const leo = new Companion("Leo", "Cat");
  const frank = new Companion("Frank", "Flea");
  //console.log(frank)

  
  // Test the methods
//   robin1.scout(); // Example of using the scout method for Adventurer
//   leo.play(); // Example of using the play method for Companion

  //4#################################################################################################################4

  class Character2 {
    static MAX_HEALTH = 100; // Static property
  
    constructor(name) {
      this.name = name;
      this.health = Character2.MAX_HEALTH; // Using static property
      this.inventory = [];
    }
  }

  const mercy = new Character2('Mercy')
  mercy.inventory.push('bags','hair bands')
  //console.log(mercy)
  
  class Adventurer extends Character2 {
    static ROLES = ["Fighter", "Healer", "Wizard"]; // Static property
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.isValidRole(role)) {
        throw new Error(`Invalid role for adventurer: ${role}`);  //validation
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    static isValidRole(role) {
      return Adventurer.ROLES.includes(role); //method to validate
    }
  }
  
  // Create instances using the new Adventurer class
  const rob = new Adventurer("Robin", "Fighter");
  //console.log(rob);
  
  // Test the methods
  //console.log(Character2.MAX_HEALTH); // Accessing static property
  //console.log(Adventurer.ROLES); // Accessing static property
  //5##############################################################################################################################5

  class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {                                                  //method r function
      const newAdventurer = new Adventurer3(name, this.role);
      //console.log(newAdventurer)
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {                                                  //
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);   
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  //console.log(healers)
  healers.generate("Robin");
  healers.generate("John")
  healers.generate("Mercy")
 // console.log(healers)
  console.log("***************************************************")
  //console.log(healers.findByIndex(1))
  console.log("***************************************************")
  //console.log(healers.findByName('Mercy'))

  //6#############################################################################################################6




