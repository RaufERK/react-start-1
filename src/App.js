import './App.css';
import './components/carStyle.css'
import Car from './components/Car'
import NewCar from './components/newCar'
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Car sell market')
  const [myСars, setMyCars] = useState([
    {
      index: 0,
      name: 'Honda',
      year: 2020,
      color: 'Black',
    },
    {
      index: 1,
      name: 'BMW',
      year: 2010,
      color: 'Blue',
    },
    {
      index: 2,
      name: 'Mercedes',
      year: 2020,
      color: 'Black',
    },
  ])
  const [showCarsFlag, setShowCarsFlag] = useState(true)
  const setNewCarName = (text, i) => {
    console.log(text, i) 

    setMyCars(prev => {
      const newArray = [...prev]
      newArray[i].name = text
      return newArray
    })
  }
  const carCompList = myСars.map(({ name, year, color, index }, mapIndex) =>
    <Car key={index} name={name} year={index} color={color} setTitle={setTitle} setNewName={(text) => setNewCarName(text, mapIndex)} />)
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
        {showCarsFlag ? carCompList : null}
      </div>
      <NewCar changeMyTitile={setTitle} />
    </div>
  );
}

export default App;
