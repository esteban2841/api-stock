import { Request, Response } from "express";
import userService from "../../application/services/UserService";

class UserController {
  static async stockPurchase(req: Request, res: Response): Promise<void> {
    const { 
        userToAddStock,
        currentSymbolPrice,
        staleQuantity
     } = req.body;
    try {
      const userModified = await userService.stockPurchase(
        userToAddStock,
        currentSymbolPrice,
        staleQuantity
    );
      res.json(userModified);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
  static async getUser(req: Request, res: Response): Promise<void> {
    const { 
      email
    } = req.body;
    try {
      const userModified = await userService.getUser(
        email
      );
      res.json(userModified);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }

}

export default UserController;