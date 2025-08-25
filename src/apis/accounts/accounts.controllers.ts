import { Request, Response } from "express";
import { accounts } from "../../../data/accounts";

export const getallaccount = (req: Request, res: Response) => {
  res.json(accounts);
};

export const getaccountid = (req: Request, res: Response) => {
  const { id, username } = req.body;

  const user = accounts.find((x) => x.id === id);
  if (user) {
    return res.status(400).send("User already exists");
  }

  const newAccount = {
    id: +id,
    username: username as string,
    funds: 0,
  };

  accounts.push(newAccount);
  res.status(201).send("Account created");
};

export const getdelete = (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "no params" });
  }
  const index = accounts.findIndex((x) => x.id === +id);
  if (index === -1) {
    return res.status(404).json({ error: "Account not found" });
  }

  accounts.splice(index, 1);
  res.status(204).send();
};
