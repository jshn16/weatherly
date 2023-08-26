import "./App.css";
import "./App.scss";
import { useEffect } from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import PreLoader from "./animations/preLoader";
import Weather from "./components/weather";
function App() {
  //useEffect to set title
  useEffect(() => {
    document.title = "Weatherly";
    console.warn(`You sneaky developer \n  what are you doing here?`);
    function handleContextMenu(event) {
      event.preventDefault();
    }
    window.addEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<PreLoader />}></Route>
          
        </Routes>

        <Routes>
          <Route path="home" element={<Weather />}></Route>
          
        </Routes>
      </HashRouter>
     
    </div>
  );
}

export default App;
