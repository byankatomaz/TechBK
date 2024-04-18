import axios from "axios";

export const apiProducts = axios.create({
    baseURL:"https://api.mercadolibre.com/sites/MLB/search?q="
}) 