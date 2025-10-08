import prisma from "../lib/prisma";
import { IUser } from "./user.controller";

export default class UserService {
    
    async getuUserInfoById({num_id, email, name}:{num_id:number,email: string, name: string}):Promise<IUser |null>{
        const user_id = num_id
        const userInfo = await prisma.user.findUnique({
            where: {id:user_id},
            select:{
                id:true,
                email:true,
                nickname:true
            }
         })
         return userInfo
    }
}