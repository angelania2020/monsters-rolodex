import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12frd42'
        },
        {
          name: 'Frank',
          id: '12frd542'
        },
        {
          name: 'Jacky',
          id: '12f2d42'
        },
        {
          name: 'Angela',
          id: '1266rd42'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App" >
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
}

export default App;
