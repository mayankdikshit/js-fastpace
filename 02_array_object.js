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

function calculateTotal(amount) {
  // covert to number
  if (amount >= 1000) {
    return amount * 0.9;
  } else {
    return amount;
  }
}

// function calculateTotal(amount) {
//     // covert to number
//     if (amount >= 1000){
//         return amount * 0.9
//     }
//      return amount
// }

// <---- switch case ---->

function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Slow Down");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("chalan kaat lo");
  }
}

trafficLight("yellow");
