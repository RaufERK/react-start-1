import './App.css';
import './components/carStyle.css'
import Car from './components/Car'
import NewCar from './components/newCar'

function App() {
  const myСars = [
    {
      name: 'Honda',
      year: 2020,
      color: 'Black',
    },
    {
      name: 'BMW',
      year: 2010,
      color: 'Blue',
    },
    {
      name: 'Mercedes',
      year: 2020,
      color: 'Black',
    },
  ]
  const carCompList = myСars.map(({ name, year, color }) =>
    <Car name={name} year={year} color={color} />)
  return (
    <div className="App">
      <h1>Car sell market</h1>
      <div className='carContainer'>
        {carCompList}
        <NewCar />
      </div>
    </div>
  );
}

export default App;
