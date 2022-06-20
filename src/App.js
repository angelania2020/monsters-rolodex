import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    // console.log('constructor')
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>
        // console.log(response)
        response.json()
      )
      .then((users) => this.setState(() => {
        return { monsters: users };
      },
        () => {
          // console.log(this.state);
        }
      ));
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }

  render() {
    // console.log('render')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App" >

        <SearchBox onChangeHandler={onSearchChange} placeholder='Search mosters' className='search-box' />

        {/* {filteredMonsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })} */}

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
