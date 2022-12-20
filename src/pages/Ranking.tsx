import axios, { AxiosResponse } from "axios";
import {useEffect} from "react";
import "../css/rankingCss/Ranking.css";

// function Ranking() {

//     //問題文取得API
//   useEffect(() => {
//     axios.get(`/get/ranking`).then((res: AxiosResponse) => {
//       console.log(res);
//       });
//   }, []);

//   return (
//     <>
//        <h2>ランキング表</h2>
//        <div className="ranking"></div>
//     </>
//   );
// }
  
// export default Ranking;
  

const Ranking: React.FC = () => {

  function dispRanking() {
      
      const rankingEl = document.getElementsByClassName("ranking");

      const blockEl = document.createElement("div");
      blockEl.classList.add("block");

      const numberEl = document.createElement("div");
      numberEl.textContent = "順位";
      numberEl.classList.add("number");

      const imgEl = document.createElement("div");
      //imgEl.textContent = "イメージ";
      imgEl.classList.add("img");

      const nameEl = document.createElement("div");
      nameEl.textContent = "ランカー";
      nameEl.classList.add("name");

      const scoreEl = document.createElement("div");
      scoreEl.textContent = "スコア";
      scoreEl.classList.add("score");

      blockEl.appendChild(numberEl);
      blockEl.appendChild(imgEl);
      blockEl.appendChild(nameEl);
      blockEl.appendChild(scoreEl);
      rankingEl[0].appendChild(blockEl);

      //axios.get(`dummyData/dummy2.json`).then((res: AxiosResponse) => {

      axios.get(`/get/ranking`).then((res: AxiosResponse) => {

          let numOfRow = 1;
          for (const elem of res.data) {
          
              const blockEl = document.createElement("div");
              blockEl.classList.add("block");

              const numberEl = document.createElement("div");
              numberEl.textContent = String(numOfRow);
              numberEl.classList.add("number");

              const imgEl = document.createElement("img");
              imgEl.classList.add("img");
              //imgEl.src = "icon_images/" + elem.icon;
              imgEl.src = "images/Abiruman.png";

              const nameEl = document.createElement("div");
              nameEl.textContent = elem.name;
              nameEl.classList.add("name");

              const scoreEl = document.createElement("div");
              scoreEl.textContent = elem.high_score;
              scoreEl.classList.add("score");

              blockEl.appendChild(numberEl);
              blockEl.appendChild(imgEl);
              blockEl.appendChild(nameEl);
              blockEl.appendChild(scoreEl);
              rankingEl[0].appendChild(blockEl);

              numOfRow++;
          }
      });

      console.log("dispRanking()");
  }

  function close() {
    console.log("close()");
    window.location.reload();
  }

  useEffect(() => {
      dispRanking();
      console.log("useEffect()")
  }, []);
  
  return (
      <>
          <h2 className="title">ランキング表</h2>
          <button type="button" className="close" onClick={close}>戻る</button>
          <div className="ranking"></div>
      </>
  );
}

export default Ranking;

/* EOF */
