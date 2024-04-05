import { UserData } from "../interfaces/UserData";
import Api from "../Api/ConectionApi";

export const UserRegister = async (user:UserData)=> {
    const response = await Api.post("auth/register", user);
    return response.data
}
