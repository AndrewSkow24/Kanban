import "./App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import PopExit from "../components/popups/PopExit/PopExit";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div class="wrapper">
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header />

        {loading ? <Loader /> : <Main />}
      </div>
    </>
  );
}

export default App;
