import React, { useEffect, useCallback, useRef ,useState} from "react";
import "../css/cpBattleCss/ResultModal.css";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import {
  correctTypingCounter,
  setCorrectTypingCounter,
  inCorrectTypingCounter,
  setInCorrectTypingCounter,
  totalTypingCounter,
  setTotalTypingCounter,
} from "./globalVariables";

interface Props {
  resultModalState: boolean;
  setStartModalState: Function;
  setResultModalState: Function;
  enemyHp: number;
  myHp: number;
}

function ResultModal({
  resultModalState,
  setResultModalState,
  setStartModalState,
  enemyHp,
  myHp,
}: Props) {
  let wpm = Math.round((correctTypingCounter / 30 / 5) * 60 * 100) / 100;
  const [winFlag,setWinFlag] = useState(false)
  const hiddenResultModal = useCallback((event: any) => {
    if (event.key === "Enter") {
      console.log("Enter");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", hiddenResultModal, false);
  }, []);


  useEffect(() => {
    if (resultModalState) {
//myRanking取得API
  axios.get(`/get/myRanking?score=${wpm}`).then((res: AxiosResponse) => {
        console.log(res.data.ranking);
  }); 
       if (enemyHp > myHp) {
        setWinFlag(false);
      } else {
        setWinFlag(true);
        console.log(winFlag);
      }
    }
  }, [resultModalState]);

  return (
    <div
      className={"result-modal" + (resultModalState ? "-visible" : "-hidden")}
    >
      <div>
        {winFlag ? "あなたの勝ちです！" : "あなたは負けましたw"}
      </div>
      <div>あなたのwpmは{wpm}です</div>
      <Link to={`/ranking`}>ランキング画面</Link>
      <div>enterを押すと最初に戻ります</div>
    </div>
  );
}

export default ResultModal;
