
import './App.css';
import Button from '@mui/material/Button';
import { metoda } from './components/firstcomponent';

function App() {
  function action (){
    metoda();
     console.log("tekst");
  }
  return (
    <div className="App">
      <div className="przycisk">
     <Button onClick={action} className='dzialajacyprzycisk' variant="text">Dalej</Button>  
     </div>
    </div>
  );
}

export default App;
