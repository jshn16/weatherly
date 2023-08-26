
import './App.css';
import './App.scss'
import { useEffect } from 'react';
import Weather from './components/weather';
function App() {

  //useEffect to set title
  // useEffect(() => {
  //   document.title = "Weatherly"
  //   function handleContextMenu(event){
  //     event.preventDefault()
  //   }
  //   window.addEventListener('contextmenu',handleContextMenu)
  // }, [])

  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
