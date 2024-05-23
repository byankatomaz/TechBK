import { api } from "../../api/ApiProducts";
import { LoginInterface } from "../interfaces/Login";

const login = (data: LoginInterface) => api.post('/auth/token/login', data);
export const UserService = {
    login,

}