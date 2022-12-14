import React, { useEffect, useCallback } from "react";
import "../css/StartModal.css";

interface Props {
  startModalState: Boolean;
  setStartModalState: Function;
}

function StartModal({ startModalState, setStartModalState }: Props) {
  const hiddenStartModal = useCallback((event: any) => {
    if (event.shiftKey) {
      console.log("シフトが押されました！");
      setStartModalState(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", hiddenStartModal, false);
    console.log("Ddddddd");
  }, []);

  return (
    <div className={"start-modal" + (startModalState ? "-visible" : "-hidden")}>
      start
    </div>
  );
}

export default StartModal;
