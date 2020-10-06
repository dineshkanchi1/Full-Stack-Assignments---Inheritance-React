// declare class

// export class
import React from "react";

class Shape extends React.Component {
  drawShape() {
    console.log("Draw!!!");
  }
  calculateArea() {
    console.log("Area!!!");
  }
  colorProperty() {
    console.log("Color!!!");
  }
  render() {
    return <h1>Shape</h1>;
  }
}

export default Shape;
