const path = require("path");
const express = require("express");
const app = express();
const knex = require("./knex");

// app.use(express.static(path.join(__dirname, "/build")));
app.use(express.json());

// const port = process.env.PORT || 4000;
const port = 4000;

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname,'/build/index.html'));
// });

app.get("/question", async (req, res) => {
  console.log("1");
  const questionArr = await knex("question_sentence")
    .select("*")
    .then((res) => {
      return res.reduce((acc, curr) => {
        acc.push(curr.question);
        return acc;
      }, []);
    });
  console.log(questionArr);
  res.json(questionArr).status(200);
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
