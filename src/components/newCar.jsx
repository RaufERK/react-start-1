import React, { Component } from "react";

class newCAr extends Component {
  constructor({ changeMyTitile }) {
    super();
    this.state.pageTitle = changeMyTitile;
  }
  index = 0;
  state = {
    cars: [
      { index: 1, name: "Ford", year: 1978 },
      { index: 2, name: "Yamaha", year: 2000 },
      { index: 3, name: "Mazda", year: 1988 },
    ],
    pageTitle: "New Cars Component Titile!!!!",
    showCarsFlag: true,
    // index: 0,
  };
  addCar = () => {
    const oldCar = this.state.cars;
    const newIndex = this.state.cars.length + 1;
    const newCar = [
      ...oldCar,
      {
        index: newIndex,
        name: "Volga",
        year: Math.round(1990 + Math.random() * 30),
      },
    ];
    this.setState({
      cars: newCar,
    });
  };
  deleteElemet(indexFromClick) {
    this.setState({
      cars: this.state.cars.filter(({ index }) => index !== indexFromClick),
    });
  }
  render() {
    const carsLIst = this.state.cars.map(({ index, name, year }, mapIndex) => (
      <div className="carClass" key={index}>
        {index} | name : {name} | year: {year}
        <button onClick={() => this.state.pageTitle(name + year)}>UP</button>
        <button onClick={() => this.deleteElemet(index)}>DEL</button>
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
        {this.state.showCarsFlag ? carsLIst : null}
        <button onClick={this.addCar}>ADD CAR</button>
        <button onClick={() => this.state.pageTitle(this.index++)}>
          TITILE
        </button>
      </div>
    );
  }
}

export default newCAr;
