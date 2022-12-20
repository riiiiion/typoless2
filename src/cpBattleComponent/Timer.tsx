import React, { useEffect, useRef } from "react";
import "../css/cpBattleCss/Timer.css";
import { useNavigate } from "react-router-dom";

type Props = {
  startModalState: Boolean;
  resultModalState: Boolean;
  setResultModalState: Function;
};

const Timer: React.FC<Props> = ({
  startModalState,
  resultModalState,
  setResultModalState,
}) => {
  const navigate = useNavigate();
  const endSound = new Audio("sound/round_gong.mp3");
  let countDownId = useRef<NodeJS.Timer | number>(0);

  function startTimer() {
    let time = 29;
    const id = setInterval(() => {
      if (time === 0) {
        setResultModalState(true);
        clearInterval(id);
        // navigate("result");
        console.log("clearInterval()");
        endSound.play();
        const timerEl = document.getElementsByClassName("timer");
        timerEl[0].innerHTML = "終了";
      }
      const timerEl = document.getElementsByClassName("timer");
      timerEl[0].innerHTML = String(time) + " Sec";
      time--;
    }, 1000);

    return id;
  }

  //早期決着の場合の処理
  useEffect(() => {
    if (resultModalState) {
      clearInterval(countDownId.current);
      endSound.play();
      const timerEl = document.getElementsByClassName("timer");
      timerEl[0].innerHTML = "終了";
    }
  }, [resultModalState]);

  useEffect(() => {
    console.log("useEffect()");
    if (startModalState === false) {
      console.log("スタートトリガー");
      countDownId.current = startTimer();
      return function cleanUp() {
        console.log("cleanUp()");
        clearInterval(countDownId.current);
      };
    }
  }, [startModalState]);

  return (
    <div className="outer">
      <label className="timer"> 30 Sec</label>
    </div>
  );
};

export default Timer;
