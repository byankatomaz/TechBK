import axios from "axios";

export const apiProducts = axios.create({
    baseURL:"https://api.mercadolibre.com/sites/MLB/search?q="
}) 
export const api = axios.create({
    baseURL:"http://10.109.71.11:8000/api/v1/"
})