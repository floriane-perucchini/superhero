import './style.scss';

function HeroInformation({isOpen, hero}) {

  const { name, appearance, biography, powerstats } = hero;

  return (
    <section 
      className='HeroInformation' 
      style={{display: isOpen ? 'block' : 'none'}}
    >
      <h2 className='HeroInformation__title'>{name}</h2>
      <div className='HeroInformation__biography'>
        <p className='HeroInformation__biography-item'>
          Real name : {biography['full-name']}
        </p>
        <span className='HeroInformation__biography-item'>Alias :&nbsp; 
          {
            biography.aliases.map((alias, index) => {
              return (
                <p key={index} className='HeroInformation__biography-item--alias'>
                  {alias}
                </p>
              );
            })
          }
        </span>
      </div>
      <div className='HeroInformation__appearance'>
        <p className='HeroInformation__appearance-item'>
          Gender : {appearance['gender']}
        </p>
        <p className='HeroInformation__appearance-item'>
          Race : {appearance['race']}
        </p>
        <p className='HeroInformation__appearance-item'>
          Eye Color : {appearance['eye-color']}
        </p>
      </div>
      <div className='HeroInformation__powerstats'>
        {
          Object.keys(powerstats).map((power, index) => {
            return (
              <p key={index} className='HeroInformation__powerstats-item'>
                {power.toUpperCase()}: {powerstats[power]}
              </p>
            );
          })
        }
          

      </div>

    </section>
  );
}

export default HeroInformation;
