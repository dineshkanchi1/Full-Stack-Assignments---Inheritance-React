// import 

// declare class


// export

import React from "react";
import Shape from "./Shape";

class Circle extends Shape {
  drawShape() {
    console.log("Draw Circle");
  }
  calculateArea() {
    console.log("Circle Area");
  }
  colorProperty() {
    console.log("Circle Color");
  }
  render() {
    return <h1>Circle</h1>;
  }
}

export default Cirlce;
