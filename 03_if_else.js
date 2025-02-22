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