import './style.scss';

function Header() {
  return (
    <header className="Header">
      <h1 className='Header-title' >Find your favorite super Hero !</h1>
      
      <section className='Header-search'>
        <input className='Header-search-input' type="text" placeholder="Search" />
        <button className='Header-search-button'>Search</button>
      </section>

    </header>
  );
}

export default Header;
