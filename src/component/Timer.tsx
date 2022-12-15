// import React, { useEffect } from "react";
// import Word from "./Word";
// // import TypingArea from "./TypingArea";

// type Prop = {

// }

// const Timer: React.FC<Prop> = () => {
    
//     function startTimer() {
//         let time = 30;
//         const id = setInterval(() => {
//             if (time === 0) {
//                 clearInterval(id);
//             }
//             const divEl = document.getElementsByClassName("timer");
//             console.log("aaa",divEl)
//             divEl[0].innerHTML = String(time) + " Sec";
//             time--;
//         }, 1000);
        
//     }

//     useEffect(() => {
//         startTimer()
//         document.addEventListener("load", startTimer, false);
//     }, []);

//     return (
//         <div className="timer">
//             0 Sec            
//         </div>
//     );    


// }

// export default Timer;

/* EOF */



import React, { useEffect } from "react";
import "../css/Timer.css"


type Props = {
    startModalState: Boolean
    setResultModalState: Function
}

const Timer: React.FC<Props> = ({startModalState, setResultModalState}) => {
    
    function startTimer() {
        console.log("startTimer()")
        let time = 29;
        const id = setInterval(() => {
            if (time === 0) {
                setResultModalState(true);
                clearInterval(id);
                console.log("clearInterval()")
            }
            const timerEl = document.getElementsByClassName("timer");
            timerEl[0].innerHTML = String(time) + " Sec";
            time--;
        }, 1000);

        return id;
    }

    useEffect(() => {
        console.log("useEffect()")
        if (startModalState === false) {
            console.log("スタートトリガー")
            const interval = startTimer()
            return function cleanUp() {
                console.log("cleanUp()")
                clearInterval(interval);
            }
        }

    }, [startModalState]);

    // useEffect(() => {
    //     document.addEventListener("load", startTimer, false);
    // }, []);

    // useEffect(() => {
    //     const interval = setInterval(() = > {
    //         startTimer();
    //     }, 1000);
    //
    //      return function cleanUp() {
    //          clearInterval(interval);
    //      }
    // }, []);

    return (
        <div className="outer">
            <label className="timer"> 30 Sec</label>         
        </div>
    );    
}

export default Timer;


/* EOF */




