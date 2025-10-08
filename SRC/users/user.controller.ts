import { Request, Response } from "express";
import UserService from "./user.service";
import { error } from "console";

export interface IUserDTO {
  id: number;
  nickname: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}


const userService = new UserService();
export default class UserController {
  async findDuplicateUserController(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user_id = Number(id);
      if(typeof user_id !=="number"&& user_id > 0){
        return res.status(400).json({ error: "인덱스는 0보다 큰정수이 어야합니다"})
      }
  }catch(error){
      res.status(500).json({ error: "internal serverError" });  
  }
}
  async userInfoController(req: Request, res: Response) {
    const { id, nickname, email } = req.body;
    try {
      const num_id = Number(id);
      if (typeof name !== "string")
        return res.status(400).json({ error: "문자열이어야합니다" });
      if (typeof email !== "string")
        return res.status(400).json({ error: "문자열이어야합니다" });
      if (typeof num_id !== "number" && num_id > 0)
        return res
          .status(400)
          .json({ error: "인덱스는 0보다 큰정수이 어야합니다" });
      const userInfo = await userService.getuUserInfoById({ num_id, email,nickname });
      return res.status(200).json({
        message: "데이터 가져오기 성공",
        data: userInfo,
      });
    } catch (error) {
      res.status(500).json({ error: "internal serverError" });
    }
  }
  async userUpdateController(req: Request, res: Response) {
    const { id, nickname: rawNickname, email: rawEmail } = req.body;
    try{
      const num_id = Number(id);
      const nickname = String(rawNickname);
      const email = String(rawEmail);
      if (typeof rawNickname !== "string"){
        return res.status(400).json({ error: "문자열이어야합니다"})
      }
      if (typeof rawEmail !== "string"){
        return res.status(400).json({ error: "문자열이어야합니다"})
      }
      if (typeof num_id !== "number" && num_id > 0){
        return res.status(400).json({ error: "인덱스는 0보다 큰정수이 어야합니다"})
      }
      const updatedUser = await userService.updatedUser({ num_id, email, nickname });    }catch(error){
      res.status(500).json({ error: "internal serverError" });
    }
  }
}