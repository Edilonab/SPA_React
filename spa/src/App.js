import Imagen from './imagens/image.jpg';
import './App.css';
import Nave from './navebar/Navebar';
import Cadastrar from './layout/pages/Cadastrar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><Nave/></p>
        <img src={Imagen} className="App-logo" alt="logo" />
        <p><Cadastrar/></p>
      </header>
    </div>
  );
}

export default App;
