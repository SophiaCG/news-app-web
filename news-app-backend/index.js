import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "news",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/bookmarks", (req, res) => {
  const q = "SELECT * FROM news.news";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/bookmarks", (req, res) => {
  const q =
    "INSERT INTO news(`title`, `author`, `desc`, `url`, `image`, `publishedAt`, `content`, `sourceName`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.author,
    req.body.desc,
    req.body.url,
    req.body.image,
    req.body.publishedAt,
    req.body.content,
    req.body.sourceName,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/bookmarks/:title", (req, res) => {
  const title = req.params.title;
  const q = " DELETE FROM news.news WHERE (`title` = ?) ";

  db.query(q, [title], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
