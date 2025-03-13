import User from "../../domain/models/User";
import { StockType, UserInterface } from "../../infrastructure/types/index";
import UserRepository from "../../domain/repositories/UserRepository";

class UserRepositoryImpl extends UserRepository {
  async findByEmail(email: string): Promise<UserInterface | null> {
		console.log("TCL: UserRepositoryImpl -> email", email)
    return await User.findOne({ email });
  }
  async findByUsername(username: string): Promise<UserInterface | null> {
		console.log("TCL: UserRepositoryImpl -> username", username)
    return await User.findOne({ username });
  }

  async save(user: UserInterface): Promise<UserInterface> {
     const newUser = new User(user);
     return await newUser.save();
  }

  async stockPurchase(user: UserInterface, currentSymbolPrice: StockType, staleQuantity: number): Promise<UserInterface> {
     const requestedUser = await this.findByEmail(user.email)
     if(requestedUser){
       const {holdings} = requestedUser

       const unitsOfSymbolAdquired = staleQuantity / Number(currentSymbolPrice.close)

       const holdingToAdd = [...holdings || []].find(holding=>{
         const newHolding = holding.symbol == currentSymbolPrice.symbol
         holding.symbolUnits += unitsOfSymbolAdquired
         return newHolding
        })
        console.log("TCL: UserRepositoryImpl -> holdingToAdd", holdingToAdd)

       return requestedUser
     }
     return user
  }


}

export default UserRepositoryImpl;
