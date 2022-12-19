import React, { useEffect, useCallback } from "react";
import "../css/cpBattleCss/StartModal.css";

interface Props {
  startModalState: boolean;
  setStartModalState: Function;
}

function StartModal({ startModalState, setStartModalState }: Props) {
  const hiddenStartModal = useCallback((event: any) => {
    if (event.shiftKey) {
      console.log("シフトが押されました！");
      document.removeEventListener("keydown", hiddenStartModal, false);
      setStartModalState(false);
    }
  }, []);

  useEffect(() => {
    if (startModalState) {
      document.addEventListener("keydown", hiddenStartModal, false);
    }
  }, [startModalState]);

  return (
    <div className={"start-modal" + (startModalState ? "-visible" : "-hidden")}>
      Shiftを押すとスタートします
    </div>
  );
}

export default StartModal;
