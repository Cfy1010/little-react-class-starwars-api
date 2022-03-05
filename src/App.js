import React from 'react';
import './App.css';
import FilmItemRow from './FilmItemRow';

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
    const randomNumber = Math.round(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomNumber}`;
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
    const movies = this.state.films.map((film, i) => {
      return <FilmItemRow url={film} key={i} />;
    });

    return (
      <>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p>
              <a href={this.state.homeworld}>Homeworld</a>
            </p>
            <ul>{movies}</ul>
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
