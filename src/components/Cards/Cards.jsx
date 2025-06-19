import CardItem from "../CardItem/CardItem";

function Cards({ array }) {
  return (
    <div class="cards">
      {array.map((el) => (
        <CardItem
          color={el.color}
          theme={el.theme}
          title={el.title}
          date={el.date}
        />
      ))}
    </div>
  );
}

export default Cards;
