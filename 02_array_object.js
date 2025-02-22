let chaiTypes = ["masala chai", "ginger chai", "green chai", "lemon tea"];

console.log(chaiTypes[2]);

console.log(`total chai types: ${chaiTypes.length} `);

chaiTypes.push("Herbal Tea");
let popItem = chaiTypes.pop();
console.log(popItem);

let index = chaiTypes.indexOf("green chai");
console.log(index);

// OBJECTS

function preparechai(type) {
  if (type === "masalaChai") {
    console.log("Addding spices to chai");
  } else {
    console.log("preapre regular chai");
  }
}

preparechai("masalaChai");
preparechai("gingerChai");


