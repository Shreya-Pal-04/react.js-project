import './App.css';
import ClassCom from './Components/ClassCom';
import FunctionCom from './Components/FunctionCom';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Nirlep Forex Academy</h1>
      <ClassCom id='test' name='Nirav' gender='male'/>
      <hr/>
      <FunctionCom/>

    </div>
    </div>
  );
}

export default App;
