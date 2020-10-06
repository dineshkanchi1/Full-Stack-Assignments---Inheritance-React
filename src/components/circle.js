// import 

// declare class


// export

import React from "react";
import Shape from "./Shape";

class Circle extends Shape {
  drawShape() {
    return "Draw Circle";
  }
  calculateArea() {
    return "Circle Area";
  }
  colorProperty() {
    return "Circle Color";
  }
}

export default Circle;
