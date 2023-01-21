import logo from './logo.svg';
import './App.css';
import { PruebasComponent } from './components/PruebasComponent';
import { AjaxComponent } from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className='componentes'>
          <PruebasComponent/>

          <AjaxComponent/>
        </div>

      </header>
    </div>
  );
}

export default App;
