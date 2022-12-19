import React,{useEffect, useCallback,useRef} from 'react';
import "../css/ResultModal.css";
import {typingCounter, setTypingCounter} from "../globalVariables"

interface Props {
  resultModalState: boolean;
  setStartModalState: Function;
  setResultModalState: Function;
  typingCounter: number;
}

function ResultModal({resultModalState,setResultModalState, setStartModalState, typingCounter} : Props) {
  let wpm = typingCounter / 30 / 5 * 60;

    const hiddenResultModal = useCallback((event:any) => {
        if (event.key === 'Enter') {
          console.log("Enter");
          window.location.reload()
          // document.removeEventListener("keydown", hiddenResultModal, false);
          // setResultModalState(false)
          // setStartModalState(true)
          // setTypingCounter(0);
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", hiddenResultModal, false);
      }, []);
  
  return (
<div className={"result-modal" + (resultModalState ? "-visible" : "-hidden" )}>
<div>
あなたのwpmは{wpm}です
</div>
<div>
 enterを押すと最初に戻ります
 </div>

</div>
  );
}

export default ResultModal;
