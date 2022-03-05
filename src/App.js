import React from 'react';
import './App.css';
// import Item from './MyItem';

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    };
  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 82 )
    const url =  `https://swapi.dev/api/people/${randomNumber}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
        });
      });
  }

  render() {
    return (
      <>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p>Homeworld: {this.state.homeworld}</p>
            <ul>
              <li>{this.state.films}</li>
            </ul>
          </div>
        )}
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
