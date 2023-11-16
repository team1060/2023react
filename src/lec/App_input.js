import { useState } from 'react';
import './App.css'

function App() {
  const [vData, setVData] = useState([
    "1","2","3"
  ])
  const [num, setNum] = useState(0)
  const [view,setView] = useState(false)
  const listView = function () {
    setNum(num)
    setView(view)
    console.log(num);
  }
  const [text, setText] = useState("")
  return(
    <div className='App'>
      <div className='num'>
        {num}
      </div>
      <ul className="lists">
      {
        vData.map((item, i)=>{
          return(
            <>
            <li onClick={()=>{listView(i)}} >{item}</li>
            </>
          )
        })
      }
      </ul>

      {
        view == true ? <Modal vContent={vData} num={num} /> : null
      }
      {text} <br />
      {/* onChange  */}
      <input type="text" onChange={(e)=>{setText(e.target.value)}} value={text} />
      <button onClick={()=>{
        let copy = [...vData];
        copy.unshift(text);
        setVData(copy)
      }}>입력</button>
      <button onClick={()=>{setText("")}}>초기화</button>
    </div>
  )
}

function Modal(vContent, num, onClose) {
  return(
      <>
      <div className="modal">
          <div>
              <h3>제목</h3>
              <p>{vContent[num]}</p>
          </div>
          <div className="btnWrap">
              <button onClose>닫기</button>
          </div>
      </div>
      </>
  )
}


export default App;
