import CardDate from "../CardDate/CardDate";

function CardItem({ color, theme, title, date }) {
  return (
    <div class="cards__item">
      <div class="cards__card card">
        <div class="card__group">
          <div className={`card__theme ${color}`}>
            <p className={`${color}`}>{theme}</p>
          </div>
          <a href="#popBrowse" target="_self">
            <div class="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div class="card__content">
          <a href="" target="_blank">
            <h3 class="card__title">{title}</h3>
          </a>

          <CardDate date={date} />
        </div>
      </div>
    </div>
  );
}

export default CardItem;
