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
  damageInterval,
  typoDamageRatio,
  damageRatio
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
  let counter = 0;
  const LetterTags = document.getElementsByClassName(
    "unSpotLetter"
  ) as HTMLCollectionOf<HTMLElement>;
  const spotTag = document.getElementsByClassName(
    "spotLetter"
  ) as HTMLCollectionOf<HTMLElement>;
  const inputSound = new Audio("sound/kick.mp3");
  const missSound = new Audio("sound/Quiz-Wrong_Buzzer02-1.mp3");
 
  useEffect(() => {
    if (resultModalState) {
      document.removeEventListener("keydown", keypressEvent, false);
      console.log("removeしました！");
    }
  }, [resultModalState]);

  useEffect(() => {
    if (!startModalState) {
      document.querySelectorAll(".unSpotLetter")[0].classList.add("spotLetter");
      document.addEventListener("keydown", keypressEvent, false);
    }
  }, [startModalState]);


  //タイピング回数の初期化
  useEffect(()=>{
    setCorrectTypingCounter(0)
    setInCorrectTypingCounter(0)
    setTotalTypingCounter(0)
  },[])

  
  const beAttacked = useCallback((prev: number) => {
    const newHp =  prev - damageRatio
      if(newHp <= 0){
        setResultModalState(true)
      }
    return newHp
    },[]);

    const enemyAttack = useCallback((prev: number) => {
      const newHp =  prev - 1
        if(newHp <= 0){
          setResultModalState(true)
        }
      return newHp
      },[]);

  const keypressEvent = useCallback((e: any) => {
    
    clearTimeout(attackTimerId.current);
    clearInterval(attackIntervalId.current);
    
    if (e.key === spotTag[0].innerHTML) {
      spotTag[0].style.color = "red";
      spotTag[0].classList.remove("spotLetter");
      LetterTags[++counter].classList.add("spotLetter");

      setTotalTypingCounter(totalTypingCounter + 1);
      setCorrectTypingCounter(correctTypingCounter + 1);
      
      //enemy攻撃処理
      setEnemyHp(enemyAttack);
      inputSound.currentTime = 0;
      inputSound.play();
      
    } else if (e.key !== "Shift") {
      setTotalTypingCounter(totalTypingCounter + 1);
      setInCorrectTypingCounter(inCorrectTypingCounter + 1);
      setMyHp(beAttacked);
      console.log(e.key);
      missSound.currentTime = 0;
      missSound.play();
    }
    //何も操作がない時の単発攻撃
        attackTimerId.current = setTimeout(() => {
          setMyHp(beAttacked);
          attackFlag.current = true;
        }, damageInterval);
    
    //何も操作がない時の定期攻撃
        attackIntervalId.current = setInterval(() => {
          if (!attackFlag.current) {
            setMyHp(beAttacked);
          } else {
            attackFlag.current = false;
          }
        }, damageInterval);



  }, []);

  return (
    <div className="typingContainer">
      <Word typingWordList={typingWordList} />
    </div>
  );
};

export default TypingArea;
