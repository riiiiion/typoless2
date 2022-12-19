import React, { useEffect, useState, useRef, useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import "../css/cpBattleCss/cpBattle.css";
import StartModal from "../cpBattleComponent/StartModal";
import ResultModal from "../cpBattleComponent/ResultModal";
import TypingArea from "../cpBattleComponent/TypingArea";
import Timer from "../cpBattleComponent/Timer";
import Enemy from "../cpBattleComponent/Enemy";
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
