import itachi_image from "./images/itachi.jpeg";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hey fellow human,</h1>
      <h2>you fall straight into the Genjustsu of Itachi Uchiha!!!</h2>
      <div className="img-box">
      <div className="img-items">
      <img src={itachi_image} alt="somerandomitachiimage"></img>
      </div>
      </div>
      
    </div>
  );
}

export default App;
