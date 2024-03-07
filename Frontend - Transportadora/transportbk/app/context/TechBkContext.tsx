import { View, Text } from 'react-native'
import React, { ReactNode, createContext, useState } from 'react'

export const TechContext = createContext<undefined>(undefined)

interface TechProviderProps{
  children: ReactNode;
}

function TechBkProvider ({children}:TechProviderProps) {
  const[visible, setVisible] = useState<boolean>(false);
  function changeVisible(isVisible:boolean){
    setVisible(isVisible)
  }
  return (
      <TechContext.Provider value={{visible, changeVisible}}>
        {children}
      </TechContext.Provider>
  )
}

export default TechBkProvider;