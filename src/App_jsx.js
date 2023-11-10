import logo from './logo.svg';
import { useState } from 'react';

function App() {
  let data = "안녕하세요"
  let [listData,setListData] = useState(1)

  return (
    <div>
      <div>{listData}</div>
      <button onClick={()=>{setListData(listData+1)}}>click</button>
    </div>
  );
}

export default App;
