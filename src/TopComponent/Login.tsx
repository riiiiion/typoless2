import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import "../css/topCss/Top.css";
import axios, { AxiosResponse } from "axios";
import { loginUserData, setLoginUserData } from "../cpBattleComponent/globalVariables";

type Props = {
  setLogin:(bool:boolean)=>void
};


const Login: React.FC<Props> = ({ setLogin }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
      } = useForm();
      const onSubmit = (data: any) => {
        console.log(data);
};





//nameとpasswordを入れてpostするとpassword を除いた以下の配列を返してます。
//ログイン情報が見つからなかった場合空の配列が返ります。
// [
//     {
//         "name": "rion",
//         "high_score": 40.03,
//         "icon": "アザラシ.png"
//     }
// ]
    function comparisonUser() {
      const loginButton = document.getElementById("loginButton");
      const name = getValues("nameRequired");
      const password = getValues("passwordRequired");
      const errorTag = document.getElementById("errorMessage");

      if (name !== "" && password !== "") {
        loginButton!.innerHTML = "ログイン中・・・";
        axios.post("/post/login",{
          name:getValues("nameRequired"),
          password:getValues("passwordRequired")
        })
        .then((res: AxiosResponse) => {
          console.log(Boolean(res.data));
          // const errorTag = document.getElementById("errorMessage");
          if (res.data) {
            setLoginUserData(res.data[0])
            errorTag!.innerHTML = "";
            const login = document.getElementsByClassName("MuiBox-root") as HTMLCollectionOf<HTMLElement>;
            login[0].style.display = "none";
            loginButton!.innerHTML = "ログイン";
            setLogin(true)
          } else {
            errorTag!.innerHTML = "ユーザーが存在しないまたはパスワードが違います";
            loginButton!.innerHTML = "ログイン";
          }
        });
      } else {
        errorTag!.innerHTML = "ユーザー名・パスワードを入力してください";
      }
      // console.log(getValues("nameRequired"))
      // console.log(getValues("passwordRequired"))
    }

    return (
        
    <Box>
    {/* フォームサブミット前に、handleSubmit が input
    コントロールの検証を行います。 */}
        <form
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        >
      {/* register 関数を利用し、input コントロールを hook に登録します。 */}
            <TextField
                {...register("nameRequired", { required: true })}
                error={!!errors.nameRequired}
                id="name"
                label="username"
                variant="outlined"
                helperText={!!errors.nameRequired && "名前を入力してください。"}
            />
            <TextField
                {...register("passwordRequired", { 
                  required: true,
                  pattern: /\d{4}/,
                //"^[0-9]{4}$"　\d{4}
                })}
                error={!!errors.passwordRequired}
                id="password"
                label="password"
                variant="outlined"
                type="password"
                helperText={
                !!errors.passwordRequired && "パスワードを入力してください。"
                }
            />
            <Button
            id="loginButton"
            variant="contained"
            color="primary"
            type="submit"
            onClick={comparisonUser}
            >
            ログイン
            </Button>
            <Button
            id="loginButton"
            variant="contained"
            color="primary"
            type="submit"
            // onClick={}
            >
            新規登録
            </Button>

        </form>
        <p id="errorMessage"></p>
  </Box>
    );
  }

  export default Login;