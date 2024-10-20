import express from "express";
import { router } from "./routes";

export const startApp = () => {
  const app = express();

  app.use(express.json());
  
  app.use('/diobank', router)



  return app
};
