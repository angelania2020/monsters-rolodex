import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>
        // console.log(response)
        response.json()
      )
      .then((users) => this.setState(() => {
        return { monsters: users };
      },
        () => {
          console.log(this.state);
        }
      ));
  }

  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchField));

    return (
      <div className="App" >

        <input className='search-box' type='seaarch' placeholder='Search monsters' onChange={(event) => {
          // console.log(event.target.value);
          const searchField = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return {
              searchField
            }
          })
        }} />

        {filteredMonsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}

      </div>
    );
  }

}

export default App;
