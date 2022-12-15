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
      document.removeEventListener("keydown", hiddenStartModal, false)
      setStartModalState(false);
      document.getElementsByTagName("span")[0].className = "spotLetter";
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", hiddenStartModal, false);
    console.log("Ddddddd");
  }, []);

  return (
    <div className={"start-modal" + (startModalState ? "-visible" : "-hidden")}>
      Shiftを押すとスタートします
    </div>
  );
}

export default StartModal;
