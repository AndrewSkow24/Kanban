import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Wrapper from "./components/Wrapper/Wrapper";
import { cardList } from "/data.js";
import { useState } from "react";

function App() {
  const [cardListArray, setCardList] = useState(cardList);

  function addCard() {
    // console.log("Из addCard:", cardList);

    // обновляем массив
    const newTask = {
      id: cardListArray.length + 1,
      color: "_green",
      theme: "Исследование",
      title: `Задача добавлена через кнопку id=${cardListArray.length + 1}`,
      date: "30.10.23",
      status: "Без статуса",
    };
    let newCardList = [...cardListArray, newTask];
    setCardList(newCardList);

    alert("Нажата кнопка добавить задачу");
  }

  return (
    <Wrapper>
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header addFunction={addCard} />
      <Main arrayList={cardListArray} />
    </Wrapper>
  );
}

export default App;
