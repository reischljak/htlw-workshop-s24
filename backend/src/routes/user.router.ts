import express from "express";
import { pick } from "lodash";
import { createUserSchema, getUserSchema } from "../schema/user.schema";
import { UserModel } from "../model/user.model";
import { createUserHandler, getUserHandler } from "../controller/user.controller";
import { validate } from "../middleware/validation";

const router = express.Router();

router.get("/:id", validate(getUserSchema), getUserHandler);

router.post("/", validate(createUserSchema), createUserHandler);

export default router;