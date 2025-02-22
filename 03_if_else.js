function calculateTotal(amount) {
  // covert to number
  //     if (amount >= 1000) {
  //       return amount * 0.9;
  //     } else {
  //       return amount;
  //     }
  //   }

  return amount > 100 ? amount * 0.9 : amount; // ternary opeartor --->
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

function login(username, password) {
  if (username === "admin" && (password === "1234" || loginIp == "127")) {
    console.log("login successful");
  } else {
    console.log("invalid credentials");
  }
}

login("admin", "1234");
