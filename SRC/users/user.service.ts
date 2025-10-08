import prisma from "../lib/prisma";
import { IUserDTO } from "./user.controller";

export default class UserService {
    
    async getuUserInfoById({num_id, email, nickname}:{num_id:number,email: string,nickname: string}):Promise<IUserDTO |null>{
        const user_id = num_id
        const userInfo = await prisma.user.findUnique({
            where: {id:user_id},
            select:{
                id:true,
                email:true,
                nickname:true,
            }
         })
         return userInfo
    }
    async  updatedUser({num_id, nickname, email}:{num_id:number,nickname: string, email: string}):Promise<IUserDTO |null>{
        const user_id = num_id

        const updatedUser = await prisma.user.update({
            where: {id:user_id},
            data:{
                nickname:nickname,
                email:email
            }
        })
        return updatedUser
        
    }
}