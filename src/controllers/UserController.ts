import { Request, Response } from "express";
import database from "../database/database";

class UserControler {
  getAllUsers = (_: Request, res: Response) => {
    res.status(200).json(database);
  };

  createUser = async (req: Request, res: Response) => {
    const body = await req.body;

    database.push(body);

    console.log(body);

    res.status(201).json({
      message: "Usuário criado com sucesso!",
    });
  };
}
export const userControler = new UserControler();
