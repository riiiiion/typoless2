import React,{useEffect, useCallback,useRef} from 'react';
import "../css/ResultModal.css";


interface Props {
  resultModalState: Boolean;
  setStartModalState: Function;
  setResultModalState: Function;
  inputCount: number;
}

function ResultModal({resultModalState,setResultModalState, setStartModalState, inputCount} : Props) {
  let wpm = inputCount / 30 / 5 * 60;

    const hiddenResultModal = useCallback((event:any) => {
        if (event.key === 'Enter') {
          console.log("Enter");
          document.removeEventListener("keydown", hiddenResultModal, false);
          setResultModalState(false)
          setStartModalState(true)
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
