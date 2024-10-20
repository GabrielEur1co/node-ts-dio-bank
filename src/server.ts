import chalk from "chalk";
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(express.json())

app.get("/", (_: Request, res: Response) => {
  res.status(200).json({
    message: " Boas vindas à DioBank API",
  });
});

app.post("/user", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);

  res.status(201).json({
    message: "Usuário criado com sucesso!",
  });
});

app.listen(PORT, () => {
  const log = console.log;

  log(chalk.green(`  ✔ Server initial on port: ${PORT}\n`));
  log(` 🔗 link: ${chalk.blue(`http://localhost:${PORT}`)}`);
});
