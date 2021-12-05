import './App.css';
import {useState} from 'react'
import MyCounter from './components/MyCounter';
import CounterContextProvider from './contexts/CounterContext';


function App() {

  const [name, setName] = useState('Truly Mittal')

  return (

    <CounterContextProvider>
    <div className="App">
      <h1>Context API</h1>
      <MyCounter/>
    </div>
    </CounterContextProvider>
  );
}

export default App;
