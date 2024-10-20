import chalk from "chalk";
import { startApp } from "./app";

const app = startApp();
const PORT = process.env.PORT ?? 3030;

app.listen(PORT, () => {
  const log = console.log;

  log(chalk.green(`  ✔ Server initial on port: ${PORT}\n`));
  log(` 🔗 link: ${chalk.blue(`http://localhost:${PORT}`)}`);
});
