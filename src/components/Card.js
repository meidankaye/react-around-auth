function Card({ onCardClick, card, onTrashClick }) {
  function handleCardClick() {
    onCardClick(card);
  }
  return (
    <article className="places__item place">
      <div className="place__trash" onClick={onTrashClick} />
      <div
        className="place__image"
        onClick={handleCardClick}
        style={{ backgroundImage: `url(${card.link})` }}
      />
      <div className="place__details">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-wrapper">
          <div className="place__button"></div>
          <span className="place__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
