import React, { useEffect, useState, useRef, useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";
import StartModal from "./component/StartModal";
import ResultModal from "./component/ResultModal";
import TypingArea from "./component/TypingArea";
import Timer from "./component/Timer";
import Enemy from "./component/Enemy";
import {typingCounter, setTypingCounter} from "./globalVariables"
import LinearProgress from '@mui/material/LinearProgress'; 

// import { TypingCountProvider } from "./context/TypingCountContext";

function App() {
  const [startModalState, setStartModalState] = useState<boolean>(true);
  const [resultModalState, setResultModalState] = useState<boolean>(false);
  const [typingWordList, setTypingWordList] = useState<String[] | null>(null);
  const [enemyHp, setEnemyHp] = useState<number>(100);



  //問題文取得API
  useEffect(() => {
    axios.get(`/question`).then((res: AxiosResponse) => {
      setTypingWordList(res.data);
      console.log(res);
    });
  }, []);



 
  return (
    // <TypingCountProvider>
    <div className="App">
      <Timer
        startModalState={startModalState}
        setResultModalState={setResultModalState}
      />
      <LinearProgress variant="determinate" value={enemyHp}  className = "hp-var"/>
      <Enemy />
      <StartModal
        startModalState={startModalState}
        setStartModalState={setStartModalState}
      />
      <ResultModal
        resultModalState={resultModalState}
        setResultModalState={setResultModalState}
        setStartModalState={setStartModalState}
        typingCounter={typingCounter}
      />
      <TypingArea
        typingWordList={typingWordList}
        resultModalState={resultModalState}
        startModalState={startModalState}
        setEnemyHp={setEnemyHp}
      />
    </div>
    // </TypingCountProvider>
  );
}

export default App;
