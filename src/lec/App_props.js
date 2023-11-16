import { useState } from 'react';
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  const [data, setData] = useState([
    "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde in modi reprehenderit magni pariatur eos incidunt tempora nostrum cum et?",
    "2Illum tempora neque delectus dicta consequuntur, voluptas ea sit mollitia exercitationem repudiandae quidem fugiat asperiores, blanditiis deserunt ad error sint.",
    "3Iure sed distinctio quis quia, corrupti, dolore veniam quibusdam, magni iste excepturi ab vitae aut id nesciunt veritatis eius sapiente."
  ])

  return (
    <div className='App'>
    
      {/* <Modal></Modal>  */}
      {num}

      <div className='tab'>
        <ul>
          <li onClick={()=>{setNum(0)}} className={`${num==0 ? "active" : ""}`}>tab1</li>
          <li onClick={()=>{setNum(1)}} className={`${num==1 ? "active" : ""}`}>tab2</li>
          <li onClick={()=>{setNum(2)}} className={`${num==2 ? "active" : ""}`}>tab3</li>
        </ul>
      </div>
      <div style={{margin:"0 0 10px 0"}}>
        {data[num]}
      </div>
      <hr />

      <ul className='lists'>
      {
        data.map(function (item, i) {
          return (
            <>
            <li onClick={()=>{setNum(i)}}>{item}</li>
            </>
          )
        })
      }
      </ul>
      <Modal rData={data} rNum={num}></Modal>
    </div>
  );
}

function Modal(props) {
return(
    <>
    <div className='modal'>
      <h3>subject1</h3>
      <p>{props.rData[props.rNum]}</p>
    </div>
    </>
  )
}

export default App;
