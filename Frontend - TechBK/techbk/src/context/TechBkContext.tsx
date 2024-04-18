import React, { ReactNode, createContext, useState } from 'react';

interface TechContextProps {
  visible: boolean;
  filter: string;
  changeVisible: (isVisible: boolean) => void;
  findProducts: (product:any)=>void;
}

export const TechContext = createContext<TechContextProps>({
  visible: false,
  filter: "",
  changeVisible: () => {},
  findProducts: ()=>{}
});

interface TechProviderProps {
  children: ReactNode;
}

function TechBkProvider({ children }: TechProviderProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("celulares");

  function changeVisible(isVisible: boolean) {
    setVisible(isVisible);
  }
  function findProducts(product: string){
    setFilter(product)
  }

  return (
    <TechContext.Provider value={{ visible, changeVisible, findProducts, filter }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechBkProvider;
