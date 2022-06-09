import './App.scss';
import List from './components/List';
import data from './components/data'
import { useState } from 'react';



function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="app">
      <div className="app_container">
        <h3 className='app_container_heading'>Total peoples: {people.length} </h3>
        <List people={people} />
        <button onClick={() => setPeople([])} >Clear All</button>
      </div>
    </div>
  );
}

export default App;
