import React from 'react';
import './App.css';
// import Item from './MyItem';

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films: []
    }
  }
  getNewCharacter() {
    console.log('new personage');
    this.setState({
      name: 'Luke',
      height: 172,
      homeworld: 'Tatooine',
      films: ['film1',' film2']
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <p>{this.state.height} cm</p>
        <p>Homeworld: {this.state.homeworld}</p>
        <ul>
          <li>{this.state.films}</li>
        </ul>
        <button
          type='button'
          onClick={() => this.getNewCharacter()}
          className='btn'>
          Change de personnage au hasard
        </button>
      </>
    );
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
