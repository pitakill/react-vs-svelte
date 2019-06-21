import React from 'react';
import './App.css';
import Character from './Character';
import { URL } from './constants';

function App() {
  const [characters, setCharacters] = React.useState([]);
  const [data, setData] = React.useState({});

  const fetchData = async (url = URL) => {
    try {
      const r = await fetch(url);
      const data = await r.json();

      setData(data);
      setCharacters([...characters, ...data.results]);
    } catch (e) {
      console.error(e);
    }
  }

  const handleClick = () => {
    if (data.info.next === '') return
    fetchData(data.info.next);
  }

  React.useEffect(() => {fetchData()}, []);

  return (
    <div className="characters">
      { characters.length === 0
        ? <p>loading...</p>
        : characters.map((e, i) => <Character key={i} {...e} />)
      }
      { characters.length !== 0 && data.info.next !== ''
        ? <button onClick={handleClick}>
            Add more
          </button>
        : null
      }
    </div>
  );
}

export default App;
