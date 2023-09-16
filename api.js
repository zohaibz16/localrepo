const fs = require("fs/promises");
const express = require("express");
const cors = require("cors"); // Corrected module name
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const { request } = require("http");

const app = express();
app.use(express.json());

app.use(cors()); // Use the 'cors' middleware

app.get("/outfit", (req, res) => {
  const tops = ["black", "white", "orange", "white"];
  const jeans = ["blue", "black", "gray", "pants"];
  const shoes = ["sneakers", "sandals", "boots", "slippers"];

  res.json({
    tops: _.sample(tops),
    jeans: _.sample(jeans),
    shoes: _.sample(shoes)
  });
});




app.post("/comments",async (req, res) => {
    const id=uuid();
    const content = req.body.content ;
    
    if(!content){
    return res.sendStatus(400);
    }

await fs.mkdir("data/comments" , {recursive:true});
await fs.writeFile(`data/comments/${id}.txt`, content);

    console.log(id);
    res.sendStatus(201);
}); 


app.listen(3000, () => console.log("API server is running on port 3000"));
