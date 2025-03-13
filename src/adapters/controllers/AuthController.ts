import { Request, Response } from "express";
import AuthService from "../../application/services/AuthService";

class AuthController {
  static async register(req: Request, res: Response): Promise<void> {
    const { name, username, password, email } = req.body;
    try {
      const token = await AuthService.register(
        name,
        email,
        username,
        password,
    
      );
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    try {
      const token = await AuthService.login(email, password);
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
}

export default AuthController;
