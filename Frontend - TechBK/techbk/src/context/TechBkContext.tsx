import React, { ReactNode, createContext,  useState } from 'react';
import Product from '../interfaces/Product';

interface TechContextProps {
  visible: boolean;
  filter: string;
  bag: Product[],
  total:number,
  visiblePay:boolean;
  changeVisible: (isVisible: boolean) => void;
  addProduct: (product: Product)=>void;
  findProducts: (product:any)=>void;
  amountProduct:(value:number)=>void;
  changeVisiblePayment: (isVisible:boolean)=>void;
  changeTotal:()=>void
 
  
}

export const TechContext = createContext<TechContextProps>({
  visible: false,
  visiblePay: false,
  filter: "",
  bag: [],
  total:0,
  amountProduct:()=>{},
  changeVisible: () => {},
  findProducts: ()=>{},
  addProduct: ()=>{},
  changeVisiblePayment:()=>{},
  changeTotal:()=>{},

});

interface TechProviderProps {
  children: ReactNode;
}

function TechBkProvider({ children }: TechProviderProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [visiblePay, setVisiblePay] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("celulares");
  const [bag, setBag] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  
  function changeVisible(isVisible: boolean) {
    setVisible(isVisible);
  }
  function findProducts(product: string){
    setFilter(product)
  }
  function addProduct(product: Product){
    setBag([...bag, product])
    
  }
  function changeVisiblePayment(isVisible:boolean){
    setVisiblePay(isVisible)
  }

  function amountProduct(product:any, amount:number){
   
    bag.findIndex(element => {
      if(element.title === product.title){
        product.amount = amount
        console.log("worked it")
        console.log(product.amount)
      }
    })
   
   
  }
  function changeTotal(totalP?:number){
    let total = 0;
    if(totalP){
      setTotal(totalP)
    }
    bag.forEach(element =>{
          total = total+=(element.price* element.amount);
          setTotal(total)
      })

  
    }
  return (
    <TechContext.Provider value={{visiblePay, total,changeTotal, amountProduct, changeVisiblePayment, addProduct, bag, visible, changeVisible, findProducts, filter }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechBkProvider;
