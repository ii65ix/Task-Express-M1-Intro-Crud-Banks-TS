import { Router } from "express";
import {
  getallaccount,
  getaccountid,
  getdelete,
} from "./accounts.controllers";

const accountRouter = Router();


accountRouter.get("/accounts", getallaccount);


accountRouter.post("/accounts", getaccountid);


accountRouter.delete("/accounts/:id", getdelete);

export default accountRouter;
