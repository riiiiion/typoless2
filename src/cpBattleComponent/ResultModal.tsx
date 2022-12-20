import React,{useEffect, useCallback,useRef} from 'react';
import "../css/cpBattleCss/ResultModal.css";
import { Link } from "react-router-dom";
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
}

function ResultModal({resultModalState,setResultModalState, setStartModalState} : Props) {
  let wpm = correctTypingCounter / 30 / 5 * 60;

    const hiddenResultModal = useCallback((event:any) => {
        if (event.key === 'Enter') {
          console.log("Enter");
          window.location.reload()
    
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", hiddenResultModal, false);
      }, []);
  
  return (
<div className={"result-modal" + (resultModalState ? "-visible" : "-hidden" )}>
<div>対戦終了！</div>
<div>
あなたのwpmは{wpm}です
</div>
<div>
 enterを押すと最初に戻ります
 </div>
 <Link to={`/ranking`}>ランキング画面</Link>

</div>
  );
}

export default ResultModal;
