import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import logo from "./logo.svg";
import "./App.css";
import StartModal from "./component/StartModal";
import ResultModal from "./component/ResultModal";
import TypingArea from "./component/TypingArea";

function App() {
  const [startModalState, setStartModalState] = useState<Boolean>(true);
  const [resultModalState, setResultModalState] = useState<Boolean>(false);
  const [typingWordList, setTypingWordList] = useState<String[] | null>(null);
  
  
  useEffect(() => {
    axios.get(`dummyData/dummy1.json`).then((res: AxiosResponse) => {
      setTypingWordList(res.data);
      console.log(res);
    })
  }, []);

 

  return (
    <div className="App">
      <button> 問題取得</button>
      <StartModal
        startModalState={startModalState}
        setStartModalState={setStartModalState}
      />
      <ResultModal
        resultModalState={resultModalState}
        setResultModalState={setResultModalState}
        setStartModalState={setStartModalState}
      />
      <TypingArea />
    </div>
  );
}

export default App;
