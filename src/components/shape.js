// declare class

// export class
import React from "react";

class Shape extends React.Component {
  state = { color: "" };
  drawShape() {
    super.drawShape();
    return "shape draw";
  }
  calculateArea() {
    super.calculateArea();
    return "shape area";
  }
  render() {
    return null;
  }
}

export default Shape;
