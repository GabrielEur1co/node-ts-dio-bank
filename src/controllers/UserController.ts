import { Request, Response } from "express";
import database from "../database/database";

class UserController {
  getAllUsers = (_: Request, res: Response) => {
    res.status(200).json(database);
  };

  createUser = async (req: Request, res: Response) => {
    const user = await req.body;

    database.push(user);

    res.status(201).json({
      message: "Usuário criado com sucesso!",
    });
  };
}
export const userController = new UserController();
