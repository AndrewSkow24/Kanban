import MainColumn from "../MainColumn/MainColumn";
import Cards from "../Cards/Cards";
import { statusList } from "/data.js";
import { useEffect } from "react";
import { useState } from "react";

function Main({ arrayList }) {
  // console.log(cardList);
  // console.log(statusList);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []); // пустой массив зависимостей для для запуска только при монтировании компонента

  console.log(isLoading);

  if (isLoading)
    return (
      <>
        <div>Страница в процессе загрузки</div>
      </>
    );

  return (
    <>
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
      ;
    </>
  );
}
export default Main;
