import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import Login from "../TopComponent/Login";
import { loginUserData } from "../cpBattleComponent/globalVariables";

function Top() {
    const navigate = useNavigate()
    const login = document.getElementsByClassName("MuiBox-root") as HTMLCollectionOf<HTMLElement>;
    function loginForm(){
      login[0].style.display = "flex";
    }
    const [ logined, setLogin ] = useState<boolean>(false);

    useEffect(() => {
      console.log(logined)
    }, [logined]);

    return (
        <>
        <Login setLogin={setLogin} />
        <p id="loginUserName">{loginUserData.name}</p>
        <img id="icon" src={"icon_images/" + loginUserData.icon} alt="icon" />
        <div className="buttonContainer">
            <button onClick={loginForm}>ログイン</button>
            <button onClick={()=>{navigate("cpBattle")}}>CP対戦</button>
            <button onClick={()=>{navigate("ranking")}}>２人対戦</button>
            <button onClick={()=>{navigate("result")}}>みんなで対戦</button>
        </div>
        </>
    );
  }
  
  export default Top;
  