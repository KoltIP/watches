import './App.css';
import { useState } from 'react';
import AddWatchMenu from './components/AddWatchMenu';

function App() {

  const [watches,setWathces] = useState([]);

  const addWatch = (watchName, watchTime) => {
    let item = {
      name : watchName,
      time : watchTime
    }
      setWathces([...watches, item]);
      console.log(watches);
  }


  return (
    <div>
      <AddWatchMenu action={addWatch}></AddWatchMenu>
    </div>
  );
}

export default App;
