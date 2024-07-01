import React, { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Conunter";
import Greeting from "./components/Greetings";
import InputComponent from "./components/InputComponent";
import SiblingOne from "./components/SiblingOne";
import SiblingTwo from "./components/SiblingTwo";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { GlobalProvider } from "./context/GlobalContext";



function App() {
  const name = "Ravi";
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // sibling to sibling

  const [sharedValue, setSharedValue] = useState('');
  
  // Using context API for global state management.

  return (
    
      /* <HelloWorld />
      <Counter />

      <Greeting name={name} />

      <InputComponent onInputChange={handleInputChange} />
      <p>Input value: {inputValue}</p>

      <p><b>Sibling to Sibling data sharing</b></p>
      <SiblingOne sharedValue={sharedValue} setSharedValue={setSharedValue}/>
      <SiblingTwo sharedValue={sharedValue}/>

      <p><b>Global context</b></p> */
      <GlobalProvider>
        <div className="App">
          <ComponentA/>
          <ComponentB/>
        </div>
      </GlobalProvider>
    
  );
}

export default App;