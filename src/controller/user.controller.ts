import type {Request, Response} from "express";
import { pick } from "lodash";
import { createUserSchema } from "../schema/user.schema";
import { UserModel } from "../model/user.model";
import { createUser } from "../service/user.service";

export async function createUserHandler(
    req: Request,
     res: Response
) {
    const validated = createUserSchema.safeParse(req.body);

    if (validated.success) {
        try {
            const user = await createUser(validated.data);
            res.status(200).json(pick(user, "username", "email", "_id"));
        } catch(e) {
            console.log(e);
            res.status(400).send(e);
        }

        
    } else {
        res.status(400).json({
            error: "Malformed request body"
        });
    }
}