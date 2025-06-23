import MainColumn from "../MainColumn/MainColumn";
import Cards from "../Cards/Cards";
import { statusList } from "/data.js";

function Main({ arrayList }) {
  // console.log(cardList);
  // console.log(statusList);

  return (
    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
            {statusList.map((status) => {
              return (
                <MainColumn title={status}>
                  <Cards
                    array={arrayList.filter((card) => card.status === status)}
                  />
                </MainColumn>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
