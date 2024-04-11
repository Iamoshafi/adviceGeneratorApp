import { useEffect, useState } from 'react';
import './App.css';
import image from "./images/icon-dice.svg";
import pattern from "./images/pattern-divider-desktop.svg";
import axios from "axios"

function App() {
  const [number, getNumber] = useState(0);
  const [advice, getAdvice] = useState([]);

  async function getData(){
    const resp = await axios.get("https://api.adviceslip.com/advice");
    // console.log(resp.data)
    console.log(resp.data.slip.advice)

    getAdvice(resp.data.slip.advice)
    getNumber(resp.data.slip.id)
  }

  async function update(){
    getData()
  }

  useEffect(() => {
    getData();
  }, []);
  


  return (
    <div className="App">
      <div className="body">
        <div className="parent">
          <div className="child1">
            <div className="header">ADVICE #{number}</div>
            <div className="advice">"{advice}"</div>
            <div>
              <img src={pattern} alt="img" className="divider" />
            </div>
          </div>

          <div className="dice-cont" onClick={() => update()}>
            <img src={image} alt="img" className="dice" />
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/dashboard">Omotiafe Aregbeyen</a>
        .
      </div>
    </div>
  );
}

export default App;
