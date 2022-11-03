import './App.css';
import {openModalAccount,openModalSetting} from './components/openModal';

function App() {
function handleOpenModalAccont(){
  openModalAccount();
}
function handleOpenModalSetting(){
  openModalSetting();
}

  return (
    <div className="App">
     <h1>Modal</h1>
     <button onClick={handleOpenModalAccont} >Abrir Modalde Cuenta</button>
     <button onClick={handleOpenModalSetting} >Abrir Modal de Configuraciones</button>
    </div>
  );
}

export default App;
