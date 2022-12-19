import axios, { AxiosResponse } from "axios";
import {useEffect} from "react"

function Ranking() {


    //問題文取得API
  useEffect(() => {
    axios.get(`/get/ranking`).then((res: AxiosResponse) => {
      console.log(res);
    });
  }, []);
    return (
        <>
        </>
    );
  }
  
  export default Ranking;
  