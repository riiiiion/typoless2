import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data: any) => {
        console.log(data);
      };

    return (
        
    <Box>
    {/* フォームサブミット前に、handleSubmit が input
    コントロールの検証を行います。 */}
        <form
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            margin: "3rem",
        }}
        >
      {/* register 関数を利用し、input コントロールを hook に登録します。 */}
        <TextField
            {...register("nameRequired", { required: true })}
            error={!!errors.nameRequired}
            id="name"
            label="username"
            variant="outlined"
            helperText={!!errors.nameRequired && "名前を入力してください。"}
            style={{
            marginBottom: "1rem",
            }}
        />
        <TextField
            {...register("passwordRequired", { required: true })}
            error={!!errors.passwordRequired}
            id="password"
            label="password"
            variant="outlined"
            type="password"
            helperText={
            !!errors.passwordRequired && "パスワードを入力してください。"
            }
            style={{
            marginBottom: "1rem",
            }}
        />
        <Button variant="contained" color="primary" type="submit">
        ログイン
        </Button>
    </form>
  </Box>
    );
  }
//ログイン画面これ参考に作りませんか？
//https://watermargin.net/programming/react/react-mui-textfield-react-form-hook-validation/
//りょ
//@mui/materialはHPバーの実装でインストール済みです。
//いろんな素材があって便利そうです
//CSSはまとめてCssのフォルダに各フォルダを作ったんでそっちで一括管理しませんか？
//うす！勝手して申し訳ございません🙇‍♂️
//やめてくださいw
  export default Login;