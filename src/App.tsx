import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StartModal from './component/StartModal';
import ResultModal from './component/ResultModal';
import TypingArea from './component/TypingArea';


function App() {
const [startModalState, setStartModalState] = useState<Boolean>(true)
const [resultModalState, setResultModalState] = useState<Boolean>(false)



  return (
    <div className="App">
      
    <StartModal startModalState = {startModalState} setStartModalState = {setStartModalState}/>
    <ResultModal resultModalState = {resultModalState} setResultModalState = {setResultModalState}  setStartModalState = {setStartModalState}/>
    <TypingArea />
    </div>
  );
}

export default App;
