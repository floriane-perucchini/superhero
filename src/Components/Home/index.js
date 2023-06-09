import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import './style.scss';
import superHeroesFetch from '../../SuperHeroesFetch';
import Loader from '../Loader';
import HeroCard from '../HeroCard';
import ResultContainer from '../ResultContainer';

function Home() {
  const [superHeroes, setSuperHeroes] = useState([]);
    const [loading, setLoading] = useState(false);


  const handleChange = async (searchName) => {
    setLoading(true);
    const newHeroes = await superHeroesFetch.getSuperHeroesByName(searchName);
    console.log('newHeroes', newHeroes)

    setSuperHeroes(newHeroes);
  };

  useEffect(() => {
    setLoading(false);
    if (superHeroes.length === 0) return;
    console.log(superHeroes)
  }, [superHeroes]);




  return (
    <main className='Home'>
      <SearchBar handleChangeName={handleChange} />
      <section className='Home-results'>
        {
          loading ? <Loader /> : <ResultContainer superHeroes={superHeroes} />
        }        
      </section>
    </main>

  );
}

export default Home;
