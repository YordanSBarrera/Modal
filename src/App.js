import './App.css';
import openModal from './components/openModal';

function App() {
function handleOpenModal(){
  openModal();
}

  return (
    <div className="App">
     <h1>Modal</h1>
     <button onClick={handleOpenModal} >Abrir Modal</button>
    </div>
  );
}

export default App;
