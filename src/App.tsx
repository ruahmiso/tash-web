import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BoxNButtonForTextToBeTranslated from "./Component/BoxNButtonForTextToBeTranslated";
import BoxForTextThatIsTranslated from "./Component/BoxForTextThatIsTranslated";

function App() {
  const [textToBeTranslated, setTextToBeTranslated] = useState("")
  const [textThatHasBeenTranslated, setTextThatHasBeenTranslated] = useState("")

    // function add(a: int, b: int ) {
    //     return a+b
    // }
    // add(1, 2)
    // const x = 10
    // const y = 20
    // add(a=x, b=y)

  return (
    <div className="App">
      <BoxNButtonForTextToBeTranslated textToBeTranslated={textToBeTranslated} setTextToBeTranslated={setTextToBeTranslated} setTextThatHasBeenTranslated={setTextThatHasBeenTranslated}></BoxNButtonForTextToBeTranslated>
      <BoxForTextThatIsTranslated textThatHasBeenTranslated={textThatHasBeenTranslated}></BoxForTextThatIsTranslated>

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
