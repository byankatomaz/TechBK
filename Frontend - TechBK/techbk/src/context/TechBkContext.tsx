import React, { ReactNode, createContext, useState } from 'react';
import Product from '../interfaces/Product';

interface TechContextProps {
  visible: boolean;
  filter: string;
  bag: Product[],
  changeVisible: (isVisible: boolean) => void;
  addProduct: (product: Product)=>void;
  findProducts: (product:any)=>void;
}

export const TechContext = createContext<TechContextProps>({
  visible: false,
  filter: "",
  bag: [],
  changeVisible: () => {},
  findProducts: ()=>{},
  addProduct: ()=>{}
});

interface TechProviderProps {
  children: ReactNode;
}

function TechBkProvider({ children }: TechProviderProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("celulares");
  const [bag, setBag] = useState<Product[]>([]);
  function changeVisible(isVisible: boolean) {
    setVisible(isVisible);
  }
  function findProducts(product: string){
    setFilter(product)
  }
  function addProduct(product: Product){
    setBag([...bag, product])
  }

  return (
    <TechContext.Provider value={{ addProduct, bag, visible, changeVisible, findProducts, filter }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechBkProvider;
