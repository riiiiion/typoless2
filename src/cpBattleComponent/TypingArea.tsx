import React, {
  useEffect,
  useCallback,
  useState,
  useContext,
  useRef,
} from "react";
import Word from "./Word";
import {
  correctTypingCounter,
  setCorrectTypingCounter,
  inCorrectTypingCounter,
  setInCorrectTypingCounter,
  totalTypingCounter,
  setTotalTypingCounter,
} from "./globalVariables";

type Prop = {
  typingWordList?: String[] | null;
  resultModalState: boolean;
  setResultModalState: Function;
  startModalState: boolean;
  setEnemyHp: Function;
  setMyHp: Function;
};

const TypingArea: React.FC<Prop> = ({
  typingWordList,
  resultModalState,
  setResultModalState,
  startModalState,
  setEnemyHp,
  setMyHp,
}) => {
  const attackTimerId = useRef<number | NodeJS.Timeout>(0);
  const attackIntervalId = useRef<number | NodeJS.Timer>(0);
  const attackFlag = useRef<boolean>(false);

  useEffect(() => {
    if (resultModalState) {
      document.removeEventListener("keydown", keypressEvent, false);
      console.log("removeしました！");
    }
  }, [resultModalState]);

  useEffect(() => {
    if (!startModalState) {
      // const spantag
      const elems = document.getElementsByClassName("typingContainer");
      console.log(elems);
      document.querySelectorAll(".unSpotLetter")[0].classList.add("spotLetter");

      attackTimerId.current = setTimeout(() => {
        setMyHp((prev: number) => prev - 5);
        attackFlag.current = true;
        console.log("setTimeoutで攻撃しています1");
      }, 1000);

      console.log(attackTimerId.current);
  
    }
  }, [startModalState]);

  useEffect(() => {
    document.addEventListener("keydown", keypressEvent, false);
    console.log("mount");
  }, []);

  let counter = 0;

  const LetterTags = document.getElementsByClassName(
    "unSpotLetter"
  ) as HTMLCollectionOf<HTMLElement>;
 
  const spotTag = document.getElementsByClassName(
    "spotLetter"
  ) as HTMLCollectionOf<HTMLElement>;

  const inputSound = new Audio("sound/kick.mp3");
  const missSound = new Audio("sound/Quiz-Wrong_Buzzer02-1.mp3");

  const beAttacked = useCallback((prev: number) => {
    const newHp =  prev - 5
      if(newHp <= 0){
        setResultModalState(true)
      }
    return newHp
    },[]);

  const keypressEvent = useCallback((e: any) => {
    setTotalTypingCounter(totalTypingCounter);
    // console.log(attackTimerId.current)
    clearTimeout(attackTimerId.current);
    clearInterval(attackIntervalId.current);
    if (e.key === spotTag[0].innerHTML) {
      spotTag[0].style.color = "red";
      spotTag[0].classList.remove("spotLetter");
      LetterTags[++counter].classList.add("spotLetter");
      setCorrectTypingCounter(correctTypingCounter + 1);
      setEnemyHp((prev: number) => prev - 2);
      inputSound.currentTime = 0;
      inputSound.play();
    } else if (e.key !== "Shift") {
      setInCorrectTypingCounter(inCorrectTypingCounter + 1);
      setMyHp((prev: number) => prev - 5);
      console.log(e.key);
      missSound.currentTime = 0;
      missSound.play();
    }



//何も操作がない時の単発攻撃
    attackTimerId.current = setTimeout(() => {
      setMyHp(beAttacked);
      attackFlag.current = true;
    }, 500);

//何も操作がない時の定期攻撃
    attackIntervalId.current = setInterval(() => {
      if (!attackFlag.current) {
        setMyHp(beAttacked);
      } else {
        attackFlag.current = false;
      }
    }, 500);
  }, []);

  return (
    <div className="typingContainer">
      <Word typingWordList={typingWordList} />
    </div>
  );
};

export default TypingArea;
