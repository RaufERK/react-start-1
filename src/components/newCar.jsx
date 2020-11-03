import React, { Component } from "react";
// import "./carStyle.css";

class newCAr extends Component {
  state = {
    cars: [
      { name: "Ford", year: 1978 },
      { name: "Yamaha", year: 2000 },
      { name: "Mazda", year: 1988 },
    ],
    pageTitle: "New Cars Component Titile!!!!",
  };
  clickHandler = () => {
    const oldCar = this.state.cars;
    const newCar = [
      ...oldCar,
      { name: "Volga", year: Math.round(1990+ Math.random() * 30) },
    ];
    this.setState({
      pageTitle: Math.random(),
      cars: newCar,
    });
  };
  render() {
    const carsLIst = this.state.cars.map(({ name, year }) => (
      <div className="carClass">
        name : {name} | year: {year}
      </div>
    ));
    return (
      <div className="carNewContainer">
        <h1 style={{ color: "black" }}>{this.state.pageTitle}</h1>
        {carsLIst}
        <button onClick={this.clickHandler}>CLICK FOR FUN!!</button>
      </div>
    );
  }
}

export default newCAr;
