import { useState } from 'react';
import './App.css';
import { fetchWeather } from './api/fetchWeather';

function App() {
  const [query, setQuery] =useState(""); 
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeather(query)
    }
  }
  return (
    <div className="main-container">
       <input type='text' className='search' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
}

export default App;
