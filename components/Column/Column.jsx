import Card from "../Card/Card";
import CardList from "../../data";

const Column = ({ status }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{status}</p>
      </div>

      <div className="cards">
        {CardList.filter((item) => item.status == status).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Column;
