import { Request, Response } from "express";
import UserService from "./user.service";

export interface IUser {
  id: Number;
  name?: string;
  email?: string;
}
const userService = new UserService();
export default class UserController {
  async userInfoController(req: Request, res: Response) {
    const { id, name, email } = req.body;
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
      const userInfo = await userService.getuUserInfoById({ num_id, email, name });
      return res.status(200).json({
        message: "데이터 가져오기 성공",
        data: userInfo,
      });
    } catch (error) {
      res.status(500).json({ error: "internal serverError" });
    }
  }
}
