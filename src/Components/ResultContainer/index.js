import HeroCard from '../HeroCard';
import './style.scss';

function ResultContainer({superHeroes}) {
  return (
    <div className="ResultContainer">
      {
        superHeroes.length === 0 
        ? undefined
        : superHeroes.map((hero) => {
          return <HeroCard key={hero.id} hero={hero} />
        })
      }
    </div>
  );
}

export default ResultContainer;
