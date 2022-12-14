import React,{useEffect, useCallback} from 'react';


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
          setStartModalState(false)
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", hiddenResultModal, false);
      }, []);
  
  return (
<div className={"start-Modal" + (resultModalState ? "-hidden" : "-visible" )}>

あなたのwpmは100です

</div>
  );
}

export default ResultModal;
