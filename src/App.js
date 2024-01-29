import './App.css';
import {Banner} from "./components/Banner";
import {Formulario} from "./components/Formulario";
import {useState} from "react";

function App() {

    const [colaboradores, setColaboradores] = useState([])

    const onNewWorker = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
    }

  return (
    <div className="App">
    <Banner/>
    <Formulario onSaved={colaborador => onNewWorker(colaborador)}/>

    </div>
  );
}

export default App;
