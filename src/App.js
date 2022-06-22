import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {

  // console.log('rendered')

  const [searchField, setSearchField] = useState('');
  // console.log(searchField);  // it is a string
  // console.log({searchField});  // to convert into an object
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // console.log('first effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>
        response.json()
      )
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField));

    setFilteredMonsters(newFilteredMonsters);

    // console.log('new effect is firing!')
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  }

  // console.log(filteredMonsters);

  return (
    <div className="App" >

      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox onChangeHandler={onSearchChange} placeholder='Search mosters' className='monsters-search-box' />

      <CardList monsters={filteredMonsters} />
    </div>)
}

export default App;
