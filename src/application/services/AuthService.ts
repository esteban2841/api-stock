import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwtutils";
import User from "../../domain/models/User";
import UserRepositoryImpl from "../../adapters/repositories/UserRepositoryImpl";

class AuthService {
  static async register(
    name: string,
    email: string,
    username: string,
    password: string,
  ) {
    const userRepository = new UserRepositoryImpl();
    let user = await userRepository.findByEmail(email);
    if (user) {
      throw new Error("User already exists");
    }
    user = new User({ name, username, password, balance: 10000, email });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await userRepository.save(user);
    const payload = { user: { id: user._id } };
    const token = generateToken(payload, 360000);

    return `Bearer ${token}`;
  }

  static async login(email: string, password: string) {
    const userRepository = new UserRepositoryImpl();
    let user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    const payload = { user: { id: user._id } };
    const token = generateToken(payload, 360000);

    return {
      token: `Bearer ${token}`,
      user
    };
  }
}

export default AuthService;
