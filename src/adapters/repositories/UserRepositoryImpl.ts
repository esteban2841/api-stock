import User from "../../domain/models/User";
import { StockType, UserInterface } from "../../infrastructure/types/index";
import UserRepository from "../../domain/repositories/UserRepository";

class UserRepositoryImpl extends UserRepository {
  async findByEmail(email: string): Promise<UserInterface | null> {
    return await User.findOne({ email });
  }
  async findByUsername(username: string): Promise<UserInterface | null> {
    return await User.findOne({ username });
  }

  async save(user: UserInterface): Promise<UserInterface> {
    const newUser = new User(user);
    return await newUser.save();
  }

  async stockPurchase(user: UserInterface, currentSymbolPrice: StockType, staleQuantity: number): Promise<UserInterface> {
    if(user){
      const {holdings} = user
      user.balance -= staleQuantity

      const unitsOfSymbolAdquired = staleQuantity / Number(currentSymbolPrice.close)
      const holdingToAdd = [...holdings || []].find(holding=>{
        const newHolding = holding.symbol == currentSymbolPrice.symbol
        holding.symbolUnits += unitsOfSymbolAdquired
        return newHolding
      })
      
      if(!holdingToAdd){
        holdings?.length ? holdings?.push({
          symbolUnits: unitsOfSymbolAdquired,
          date: currentSymbolPrice.date,
          time: currentSymbolPrice.time,
          close: currentSymbolPrice.close,
          symbol: currentSymbolPrice.symbol,
          }) :
          user.holdings = [{
            symbolUnits: unitsOfSymbolAdquired,
            date: currentSymbolPrice.date,
            time: currentSymbolPrice.time,
            close: currentSymbolPrice.close,
            symbol: currentSymbolPrice.symbol,
          }]
        }
        
        const modifiedUser = User.findOneAndUpdate({_id:user._id}, {...user})

      return user
    }
    return user
  }


}

export default UserRepositoryImpl;
