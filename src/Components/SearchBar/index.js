import './style.scss';

function SearchBar({ handleChangeName }) {

  const handleSearchChange = (event) => {
    const heroName = event.target.value;
    handleChangeName(heroName);
  };

  return (
    <section className='SearchBar'>
      <input onChange={handleSearchChange} className='SearchBar-input' type="text" placeholder="Search" />
    </section>
  );
}

export default SearchBar;
