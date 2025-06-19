import CardDate from "../CardDate/CardDate";
import CardItem from "../CardItem/CardItem";
import MainColumn from "../MainColumn/MainColumn";
import Cards from "../Cards/Cards";
function Main() {
  // без статуса
  let tasksWithoutStatus = [
    {
      color: "_orange",
      theme: "Веб-дизайн",
      title: "Задача 1",
      date: "30.10.23",
    },
    {
      color: "_green",
      theme: "Research",
      title: "Задача 2",
      date: "30.10.23",
    },
    {
      color: "_orange",
      theme: "Web Design",
      title: "Задача 3",
      date: "30.10.23",
    },
    {
      color: "_purple",
      theme: "Copywriting",
      title: "Задача 4",
      date: "30.10.23",
    },
    {
      color: "_orange",
      theme: "Веб-дизайн",
      title: "Задача 5",
      date: "30.10.23",
    },
  ];

  // нужно сделать
  let tasksTodo = [
    {
      color: "_green",
      theme: "Research",
      title: "Задача 1",
      date: "30.10.23",
    },
  ];

  // в работе
  let inWorkTasks = [
    {
      color: "_green",
      theme: "Исследование",
      title: "Задача 1",
      date: "30.10.23",
    },
    {
      color: "_purple",
      theme: "Копирайтинг",
      title: "Задача 2",
      date: "30.10.23",
    },
    {
      color: "_orange",
      theme: "Веб-дизайн",
      title: "Задача 3",
      date: "30.10.23",
    },
  ];

  // Тестирование
  let testingTasks = [
    {
      color: "_green",
      theme: "Исследование",
      title: "Задача 1",
      date: "30.10.23",
    },
  ];

  // готово
  let completedTasks = [
    {
      color: "_green",
      theme: "Исследование",
      title: "Задача 1",
      date: "30.10.23",
    },
  ];

  return (
    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
            {/* колонка без статуса */}

            <MainColumn title="Без статуса">
              <Cards array={tasksWithoutStatus} />
            </MainColumn>

            {/* колонка нужно сделать  */}
            <MainColumn title="Нужно сделать">
              <Cards array={tasksTodo} />
            </MainColumn>

            {/* колонка в работе */}
            <MainColumn title="В работе">
              <Cards array={inWorkTasks} />
            </MainColumn>

            {/* колонка тестирование */}
            <MainColumn title="Тестирование">
              <Cards array={testingTasks} />
            </MainColumn>

            {/* колонка готово */}
            <MainColumn title="Готово">
              <Cards array={completedTasks} />
            </MainColumn>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
