import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TEXT
      </header>
      <MyApp name="name" name1="1111" name2="23132131" />
      <MyApp name="2222" name1="2-1-1-1" name2="23232332" />
      <MyApp name="aaaa" name1="bbbb" name2="cccccc" />
      <MyApp name="fff" name1="bbbbb" name2="2020" />
    </div>
  );
}

const MyApp = (prop) => {
  return (
    <div>
      <h1>My Appp!!!!</h1>
      <div>{prop.name}</div>
      <div>{prop.name1}</div>
      <div>{prop.name2}</div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



