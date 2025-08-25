import express from "express";
import accountRouter from "./accounts.routes";

const app = express();
app.use(express.json());

app.use("/", accountRouter);

app.listen(8000, () => {
  console.log(" Server is running on port 8000");
});
