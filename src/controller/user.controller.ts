import type {Request, Response} from "express";
import { pick } from "lodash";
import { createUserInput, getUserInput } from "../schema/user.schema";
import { createUser, getUser } from "../service/user.service";

export async function createUserHandler(
    req: Request<{}, {}, createUserInput["body"]>,
    res: Response
) {
   
    try {
        const user = await createUser(req.body);
        res.status(200).json(pick(user, "username", "email", "_id"));
    } catch(e) {
        console.log(e);
        res.status(400).send(e);
    }

}

export async function getUserHandler(
    req: Request<getUserInput["params"]>, 
    res: Response
) {
    try {
        const user = await getUser(req.params.id);
        return res.status(200).json(
            pick(user, "_id", "username", "email")
            );
    } catch(e) {
        return res.status(404).json({
            message: "User not found",
            error: e
        });
    }
   
}