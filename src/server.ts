import chalk from "chalk";
import express, { Request, Response } from "express";
import {userControler} from "./controllers/UserController";

const app = express();
const PORT = process.env.PORT ?? 3030;



app.use(express.json())

app.get("/", userControler.getAllUsers );

app.post("/user", userControler.createUser)

app.listen(PORT, () => {
  const log = console.log;

  log(chalk.green(`  ✔ Server initial on port: ${PORT}\n`));
  log(` 🔗 link: ${chalk.blue(`http://localhost:${PORT}`)}`);
});
