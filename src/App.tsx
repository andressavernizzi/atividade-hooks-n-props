import Card from "./components/card/Card"
import Contador from "./components/contador/Contador"
import Tarefa from "./components/tarefa/Tarefa"
import './App.css'

function App() {

  return (
    <>
    <div style={{
      display: "flex",
      justifyContent: "center",  
    }}>
    <Card titulo='Animais' descricao='Gatinhos'/>
    </div>
    <Contador/>
    <Tarefa/>
    </>
  )
}

export default App