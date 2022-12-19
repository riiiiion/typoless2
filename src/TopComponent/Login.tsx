import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import "../css/topCss/Top.css";
import axios, { AxiosResponse } from "axios";


function Login() {
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
      axios.post("/post/login",{
        name:getValues("nameRequired"),
        password:getValues("passwordRequired")
      })
      .then((res: AxiosResponse) => {
        console.log(res);
      });
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
            variant="contained"
            color="primary"
            type="submit"
            onClick={comparisonUser}
            >
            ログイン
            </Button>
        </form>
  </Box>
    );
  }

  export default Login;