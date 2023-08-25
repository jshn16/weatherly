import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Weather from './components/weather';
function App() {

  //useEffect to set title
  useEffect(()=>{
    document.title="Weatherly"
  },[])

  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
