import { useState } from 'react';
import HeroInformation from '../HeroInformation';
import './style.scss';
import neutralAvatar from '../../assets/neutral_avatar.png';

function HeroCard({hero}) {
  const { name, image, id } = hero;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInformation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='HeroCard__container'>
      <article className='HeroCard'>
        <input type='hidden' value={id} className='HeroCard__input' />
        <figure className='HeroCard__thumb'>
          {
            image.url ? <img src={image.url} alt={name} className='HeroCard__image' /> : <img src={neutralAvatar} alt={name}/>
          }
          <figcaption className='HeroCard__caption'>
            <h2 className='HeroCard__title'>{name}</h2>
            <button onClick={handleOpenInformation} className='HeroCard__button'>
              {
                isOpen ? 'Close' : `Read more about ${name}`
              }
            </button>
          </figcaption>
        </figure>
      </article>
      <HeroInformation isOpen={isOpen} hero={hero} />    
    </section>



  );
}

export default HeroCard;
