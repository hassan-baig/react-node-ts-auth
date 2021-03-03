import { LoginInterface } from "../models";
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken'

export const login = (req: Request, res: Response) => {
  const { email, password }: LoginInterface = req.body;
  if(email === "test1@email.com" && password === "123456"){
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET);
    return res.status(200).send({ token, email });
  } 

  return res.status(401).send({msg: "unauthorized users"})
};
