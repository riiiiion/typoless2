import React, { useEffect, useCallback } from "react";
import "../css/cpBattleCss/StartModal.css";
import {
  damageRatio,
  setDamageRatio,
  typoDamageRatio,
  setTypoDamageRatio,
  damageInterval,
  setDamageInterval,
} from "./globalVariables";

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
      <button
        onClick={() => {
          setDamageRatio(5);
          console.log(damageRatio);
          setTypoDamageRatio(2.5);
          console.log(typoDamageRatio);
          setDamageInterval(1000);
          console.log(damageInterval);
        }}
      >
        かんたん
      </button>
      <button
        onClick={() => {
          setDamageRatio(5);
          console.log(damageRatio);
          setTypoDamageRatio(5);
          console.log(typoDamageRatio);
          setDamageInterval(500);
          console.log(damageInterval);
        }}
      >
        ふつう
      </button>
      <button
        onClick={() => {
          setDamageRatio(5);
          console.log(damageRatio);
          setTypoDamageRatio(10);
          console.log(typoDamageRatio);
          setDamageInterval(250);
          console.log(damageInterval);
        }}
      >
        むずい
      </button>
      <button
        onClick={() => {
          setDamageRatio(5);
          console.log(damageRatio);
          setTypoDamageRatio(10);
          console.log(typoDamageRatio);
          setDamageInterval(100);
          console.log(damageInterval);
        }}
      >
        むっっず！
      </button>
    </div>
    
  );
}

export default StartModal;
