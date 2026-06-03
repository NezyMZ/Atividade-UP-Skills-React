import './App.css'
import Alunos from './components/Alunos'
import ListaPendencia from './components/ListaPendencia'
import { alunos } from './data/alunos' 
import ContarPendencias from './components/ContarPendencias'

function App() {



  return (
    <>
      <Alunos alunos={alunos}/>
      <ListaPendencia alunos={alunos}/>
      <ContarPendencias alunos={alunos}/>
    </>
  )
}

export default App