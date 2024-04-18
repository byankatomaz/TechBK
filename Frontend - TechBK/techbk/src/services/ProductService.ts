import { apiProducts } from "../../api/ApiProducts";

const getProducts =async (product:string)=> {
    
    try
    {
     const response = await apiProducts.get(product) 
    return response.data.results
    }catch(error){
        console.error(error)
    }
}

export const ProductService = {
    getProducts
}