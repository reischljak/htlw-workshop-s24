import { User, UserModel } from "../model/user.model";

export async function createUser(
    user: User
) {
    try {
        const userDocument = await UserModel.create(user);
        console.log("{User Serice | Create User} - Successfully created user with id: " + userDocument._id);
        return userDocument;
    } catch(e) {
        console.error(e);
        throw e;
    }
    
}

export async function getUser(
    id: string
) {
    try {
        const user = await UserModel.findById(id);

        if (!user) {
            throw new Error(`Could not find User with ${id}`);
        } else {
            console.log("{User Serice | Get User} - Successfully got user with id: " + id);
            return user;
        }
    } catch(e) {
        console.error("{User Serice | Get User} " + e);
        throw e;
    }
}