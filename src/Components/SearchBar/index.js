import superHeroesFetch from '../../SuperHeroesFetch';
import './style.scss';

function SearchBar() {

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    const heroName = event.target.value;
    superHeroesFetch.getSuperHeroesByName(heroName);
  }

  return (
    <section className='SearchBar'>
      <input onChange={handleSearchChange} className='SearchBar-input' type="text" placeholder="Search" />
    </section>
  );
}

export default SearchBar;
