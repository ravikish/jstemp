import React, { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Conunter";
import Greeting from "./components/Greetings";
import InputComponent from "./components/InputComponent";
import SiblingOne from "./components/SiblingOne";
import SiblingTwo from "./components/SiblingTwo";



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
    <div className="App">
      <HelloWorld />
      <Counter />

      <Greeting name={name} />

      <InputComponent onInputChange={handleInputChange} />
      <p>Input value: {inputValue}</p>

      <p><b>Sibling to Sibling data sharing</b></p>
      <SiblingOne sharedValue={sharedValue} setSharedValue={setSharedValue}/>
      <SiblingTwo sharedValue={sharedValue}/>
    </div>
  );
}

export default App;