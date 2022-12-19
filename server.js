const path = require("path");
const express = require("express");
const app = express();
const knex = require("./knex");

// app.use(express.static(path.join(__dirname, "/build")));
app.use(express.json());

// const port = process.env.PORT || 4000;
const port = 4000;


app.get("/get/question", async (req, res) => {
  console.log("1");
  const questionArr = await knex("question_sentence")
  .select("*")
  .then((res) => {
    return res.reduce((acc, curr) => {
      acc.push(curr.question);
      return acc;
    }, []);
  });
  // console.log(questionArr);
  res.json(questionArr).status(200);
});

//login処理　
app.post("/post/login",async (req,res) =>{
  const name = req.body.name
  const password = req.body.password
  const loginAccount = await knex("account")
  .select("name","high_score","icon")
  .where("name",name)
  .andWhere("password","=",password)
  //{name: 'rion',password:'0000',high_score:40.03,icon:"icon1"},
  console.log(loginAccount)
  res.json(loginAccount).status(200)
})

//ランキング取得処理
app.get("/get/ranking", async (req, res) => {
  const rankingList = await knex("account")
  .select("name", "high_score","icon")
  .orderBy("high_score", "desc")
  .limit(30);
  
  console.log(rankingList)
  res.json(rankingList).status(200);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname,'/build/index.html'));
// });
app.listen(port, () => {
  console.log("App listening on port " + port);
});
