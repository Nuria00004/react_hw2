import "./App.css";
import { useState } from "react";
import NameInput from "./components/NameInput";
import SurNameInput from "./components/SurNameInput";


function App() {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [data, setData] =useState(null)

  function NameChange(e) {
    setName(e.target.value);
  }
  function SurNameChange(e) {
    setSurName(e.target.value);
  }

  function showMessage() {
    setData({name,surname})
  }

  return (
    <div className="App">
      <NameInput 
        name={name}
        setName={setName}
        nameChange={NameChange}
      />
      <SurNameInput 
        surname={surname}
        setSurName={setSurName}
        surNameChange={SurNameChange}
      />
      <button onClick={showMessage}>Ok</button>
      {data && 
        <div>
          <p>First name: {name}</p>
          <p>Last name: { surname}</p>
        </div> 
      }
    </div>
  );
}

export default App;
