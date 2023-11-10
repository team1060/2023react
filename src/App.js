import logo from './logo.svg';
import './App.css';

function App() {
  const han = "안녕하세요"
  function test() {
    return 100;
  }

  return (
    <div className="App">
      {han}
      {test()}
    </div>
  );
}

export default App;
