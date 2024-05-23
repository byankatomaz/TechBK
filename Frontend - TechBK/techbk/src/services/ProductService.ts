import { api, apiProducts } from "../../api/ApiProducts";
import Product from "../interfaces/Product";

const getProducts =async (search:string)=> {
    
    try
    {
     const response = await apiProducts.get(search) 
    return response.data.results
    }catch(error){
        console.error(error)
    }
}
const addProducts = (product:any)=> api.post("produto/", product)

export const ProductService = {
    getProducts,
    addProducts
}