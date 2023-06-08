import './style.scss';

function HeroCard({hero}) {
  const { name, image } = hero;
  return (
    <article className='HeroCard'>
      <figure className='HeroCard__thumb'>
        <img src={image.url} alt={name} className='HeroCard__image' />
        <figcaption className='HeroCard__caption'>
          <h2 className='HeroCard__title'>{name}</h2>
          <button className='HeroCard__button'>Read more about {name}</button>
        </figcaption>
      </figure>
    </article>
  );
}

export default HeroCard;
