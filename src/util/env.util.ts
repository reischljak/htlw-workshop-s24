import { object, string, number, coerce } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = object({
    //PORT: string({
    //    message: "PORT must be defined!"
    //}).transform(portStr => {
    //    try {
    //        const port = parseInt(portStr);
//
    //        if (port < 1 || port > 65535) {
    //            throw "PORT not in valid range";
    //        }
//
    //        return port;
    //    } catch(e) {
    //        console.error(e);
    //    }
    //})
    PORT: coerce.number({
        message: "PORT must be a number!"
    }).min(0).max(65536),

    MONGO_URL: string({
        message: "required"
    })
});


export default envSchema.parse(process.env);
