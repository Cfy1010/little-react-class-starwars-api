import React from 'react';
import './App.css';
// import Item from './MyItem';

class StarWars extends React.Component{
  render() {
    return (
      <h1>C'est StarWars</h1>
    )
  }
}


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <StarWars />
      </header>
    </div>
  );
}

export default App;
