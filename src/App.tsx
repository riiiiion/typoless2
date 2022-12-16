import React, { useEffect, useState ,useRef} from "react";
import axios, { AxiosResponse } from "axios";
import logo from "./logo.svg";
import "./App.css";
import StartModal from "./component/StartModal";
import ResultModal from "./component/ResultModal";
import TypingArea from "./component/TypingArea";
import Timer from "./component/Timer";
import Enemy from "./component/Enemy";


function App() {
  const [startModalState, setStartModalState] = useState<Boolean>(true);
  const [resultModalState, setResultModalState] = useState<Boolean>(false);
  const [typingWordList, setTypingWordList] = useState<String[] | null>(null);
  
  
  useEffect(() => {
    axios.get(`/question`).then((res: AxiosResponse) => {
      setTypingWordList(res.data);
      console.log(res);
    })
    document.addEventListener('keydown', keypress_ivent);
    console.log(document.getElementsByTagName("span"))
  }, []);


  let counter = 0;
  let inputCount = useRef(0)
  const spanTags = document.getElementsByTagName("span");
  const spotTag = document.getElementsByClassName("spotLetter") as HTMLCollectionOf<HTMLElement>;
  const inputSound = new Audio("sound/kick.mp3")
  const missSound = new Audio("sound/Quiz-Wrong_Buzzer02-1.mp3")

  function keypress_ivent(e:any) {
    
      // console.log(spanTags)
      // console.log(spotTag)
      // console.log(counter)
      // for (let i = 0; i < spanTags.length; i++){
      //   }
      if(e.key === spotTag[0].innerHTML){
          spotTag[0].style.color = "red";
          spotTag[0].className = "";
          spanTags[++counter].className = "spotLetter";
          inputCount.current++;
          inputSound.currentTime = 0;
          inputSound.play();
          console.log(inputCount);
      } else if (e.key !== "shift") {
        missSound.currentTime = 0;
        missSound.play();
      }
         
      // return false; 
}




  return (
    <div className="App">
      <Timer 
        startModalState={startModalState} 
        setResultModalState={setResultModalState}  
      />
      <Enemy/>
      <StartModal
        startModalState={startModalState}
        setStartModalState={setStartModalState}
      />
      <ResultModal
        resultModalState={resultModalState}
        setResultModalState={setResultModalState}
        setStartModalState={setStartModalState}
        inputCount={inputCount.current}
      />
      <TypingArea 
      typingWordList={typingWordList}
      />
    
    </div>
  );
}

export default App;
