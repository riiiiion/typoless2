import React, { useEffect, useState, useRef, useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import "../css/cpBattleCss/CpBattle.css";
import StartModal from "../cpBattleComponent/StartModal";
import ResultModal from "../cpBattleComponent/ResultModal";
import TypingArea from "../cpBattleComponent/TypingArea";
import Timer from "../cpBattleComponent/Timer";
import BattleImageArea from "../cpBattleComponent/BattleImageArea";
import LinearProgress from '@mui/material/LinearProgress'; 

// import { TypingCountProvider } from "./context/TypingCountContext";

function App() {
  const [startModalState, setStartModalState] = useState<boolean>(true);
  const [resultModalState, setResultModalState] = useState<boolean>(false);
  const [typingWordList, setTypingWordList] = useState<String[] | null>(null);
  const [enemyHp, setEnemyHp] = useState<number>(100);
  const [myHp, setMyHp] = useState<number>(100);
//  const  gameLevel = useRef()


  //問題文取得API
  useEffect(() => {
    axios.get(`/get/question`).then((res: AxiosResponse) => {
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
        resultModalState = {resultModalState}
      />
      <span className="hp-var">
      <LinearProgress variant="determinate" value={myHp}  className = "myHp-var"/>
      <LinearProgress variant="determinate" value={enemyHp}  className = "enemyHp-var"/>
      </span>
      <BattleImageArea enemyHp={enemyHp} myHp={myHp}/>
      <StartModal
        startModalState={startModalState}
        setStartModalState={setStartModalState}
      />
      <ResultModal
        resultModalState={resultModalState}
        setResultModalState={setResultModalState}
        setStartModalState={setStartModalState}
        enemyHp={enemyHp}
        myHp={myHp}
      />
      <TypingArea
        typingWordList={typingWordList}
        resultModalState={resultModalState}
        setResultModalState={setResultModalState}
        startModalState={startModalState}
        setEnemyHp={setEnemyHp}
        setMyHp={setMyHp}
      />
    </div>
    // </TypingCountProvider>
  );
}

export default App;
