import { Link,useNavigate } from "react-router-dom";
import Login from "../TopComponent/Login";

function Top() {
    const navigate = useNavigate()
    const onClickButton = () => {
        navigate("/cpBattle"); // 画面遷移を書く
      };
    return (
        <>
        <Login />
        <div>
            <button onClick={()=>{navigate("cpBattle")}}>CP対戦</button>
            <button onClick={()=>{navigate("ranking")}}>２人対戦</button>
            <button onClick={()=>{navigate("result")}}>みんなで対戦</button>
        </div>
        </>
    );
  }
  
  export default Top;
  