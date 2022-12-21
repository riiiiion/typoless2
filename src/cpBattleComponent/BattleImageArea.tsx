import React,{useEffect} from "react";
import "../css/cpBattleCss/BattleImageArea.css"


type Prop = {
    enemyHp: number;
    myHp: number;
  };
const Enemy: React.FC<Prop> = (enemyHp,myHp) => {


useEffect(()=>{
    // document.querySelector(".enemy-image").classList.add("spotLetter");
},[enemyHp])

  return (
    <div className="battle-image-container">
      <img src="images/Bara-emon.PNG" alt=""  className="my-image"/>
      <img src="images/Angry_Erikosan.png" alt="" className="enemy-image"/>
    </div>
  );
};

export default Enemy;
