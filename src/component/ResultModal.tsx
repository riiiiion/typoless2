import React,{useEffect, useCallback} from 'react';
import "../css/ResultModal.css";


interface Props {
  resultModalState: Boolean;
  setStartModalState: Function;
  setResultModalState: Function;
}

function ResultModal({resultModalState,setResultModalState, setStartModalState} : Props) {
   
    const hiddenResultModal = useCallback((event:any) => {
        if (event.key === 'Enter') {
          console.log("Enter");
          setResultModalState(false)
          setStartModalState(true)
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", hiddenResultModal, false);
      }, []);
  
  return (
<div className={"result-modal" + (resultModalState ? "-visible" : "-hidden" )}>

あなたのwpmは100です

</div>
  );
}

export default ResultModal;
