import React, { useEffect, useCallback, useState, useContext } from "react";
import Word from "./Word";
import { typingCounter, setTypingCounter } from "./globalVariables";
type Prop = {
  typingWordList?: String[] | null;
  resultModalState: boolean;
  startModalState: boolean;
  setEnemyHp: Function;
};

const TypingArea: React.FC<Prop> = ({
  typingWordList,
  resultModalState,
  startModalState,
  setEnemyHp,
}) => {
  useEffect(() => {
    if (resultModalState) {
      console.log("resultmodal");
      document.removeEventListener("keydown", keypressEvent, false);
      console.log("removeしました！");
    }
  }, [resultModalState]);

  useEffect(() => {
    if (!startModalState) {
      // const spantag
      const elems = document.getElementsByClassName("typingContainer");
      console.log(elems);
      document.getElementsByTagName("span")[2].classList.add("spotLetter");
    }
  }, [startModalState]);

  useEffect(() => {
    document.addEventListener("keydown", keypressEvent, false);
  }, []);

  let counter = 0;
  let inputCount = typingCounter;
  const LetterTags = document.getElementsByClassName(
    "unSpotLetter"
    ) as HTMLCollectionOf<HTMLElement>;
  console.log(LetterTags);
  // debugger;
  const spotTag = document.getElementsByClassName(
    "spotLetter"
  ) as HTMLCollectionOf<HTMLElement>;
  console.log(spotTag);
  const inputSound = new Audio("sound/kick.mp3");
  const missSound = new Audio("sound/Quiz-Wrong_Buzzer02-1.mp3");

  const keypressEvent = useCallback((e: any) => {
    console.log(spotTag[0]);
    if (e.key === spotTag[0].innerHTML) {
      spotTag[0].style.color = "red";
      spotTag[0].classList.remove("spotLetter");
      LetterTags[++counter].classList.add("spotLetter");
      setTypingCounter(typingCounter + 1);
      setEnemyHp((prev: number) => prev - 2);
      inputSound.currentTime = 0;
      inputSound.play();
      console.log(inputCount);
    } else if (e.key !== "Shift") {
      console.log(e.key);
      missSound.currentTime = 0;
      missSound.play();
    }
  }, []);

  return (
    <div className="typingContainer">
      <Word typingWordList={typingWordList} />
    </div>
  );
};

export default TypingArea;
