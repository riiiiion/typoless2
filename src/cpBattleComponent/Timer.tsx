import React, { useEffect } from "react";
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

  function startTimer() {
    let time = 29;
    const id = setInterval(() => {
      console.log("Timerのmodal");
      console.log(resultModalState);
      if (resultModalState) {
        time = 0;
      }

      if (time === 0) {
        setResultModalState(true);
        clearInterval(id);
        // navigate("result");
        console.log("clearInterval()");
        endSound.play();
      }
      const timerEl = document.getElementsByClassName("timer");
      timerEl[0].innerHTML = String(time) + " Sec";
      time--;
    }, 1000);

    return id;
  }

  useEffect(() => {
    console.log("useEffect()");
    if (startModalState === false) {
      console.log("スタートトリガー");
      const interval = startTimer();
      return function cleanUp() {
        console.log("cleanUp()");
        clearInterval(interval);
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
