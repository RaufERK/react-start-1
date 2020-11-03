import React, { Component } from "react";
// import "./carStyle.css";

class newCAr extends Component {
  constructor({ changeMyTitile }) {
    super();
    this.state.pageTitle = changeMyTitile;
  }
  index = 0;
  state = {
    cars: [
      { name: "Ford", year: 1978 },
      { name: "Yamaha", year: 2000 },
      { name: "Mazda", year: 1988 },
    ],
    pageTitle: "New Cars Component Titile!!!!",
    showCarsFlag: true,
  };
  clickHandler = () => {
    const oldCar = this.state.cars;
    const newCar = [
      ...oldCar,
      { name: "Volga", year: Math.round(1990 + Math.random() * 30) },
    ];
    this.setState({
      pageTitle: Math.random(),
      cars: newCar,
    });
  };
  render() {
    const carsLIst = this.state.cars.map(({ name, year }, index) => (
      <div className="carClass" key={index}>
        name : {name} | year: {year}
        <button onClick={() => this.state.pageTitle(name + year)}>UP</button>
      </div>
    ));
    return (
      <div className="carNewContainer">
        <button
          onClick={() =>
            this.setState({ showCarsFlag: !this.state.showCarsFlag })
          }
        >
          SHOW OR NOT
        </button>
        <h1 style={{ color: "black" }}>{this.state.pageTitle}</h1>
        {this.state.showCarsFlag && carsLIst}
        <button onClick={this.clickHandler}>CLICK FOR FUN!!</button>
        <button onClick={() => this.state.pageTitle(this.index++)}>
          CHANGE TITILE!
        </button>
      </div>
    );
  }
}

export default newCAr;
