import './App.css';
import './components/carStyle.css'
import Car from './components/Car'
import NewCar from './components/newCar'
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Car sell market')
  const [myСars, setMyCars] = useState([
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
  ])
  const [showCarsFlag, setShowCarsFlag] = useState(true)
  const carCompList = myСars.map(({ name, year, color }, index) =>
    <Car key={index} name={name} year={index} color={color} setTitle={setTitle} />)
  const clickFromButtonHandel = () => {
    setMyCars(prev => [...prev, {
      name: title,
      year: 2020,
      color: 'Black'
    }])
    setTitle('');
  }
  return (
    <div className="App">
      <h1>{title}</h1>
      <input type='text' placeholder='enter text' onChange={(e) => setTitle(e.target.value)} value={title}></input>
      <button onClick={clickFromButtonHandel}>TITILE</button>
      <button onClick={() => setShowCarsFlag(prev => !prev)}>SHOW OR NOT</button>
      <div className='carContainer'>
        {showCarsFlag && carCompList}
      </div>
      <NewCar changeMyTitile={setTitle} />
    </div>
  );
}

export default App;
