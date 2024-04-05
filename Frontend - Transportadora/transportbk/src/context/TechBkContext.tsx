import React, { ReactNode, createContext, useState } from 'react';

interface TechContextProps {
  visible: boolean;
  changeVisible: (isVisible: boolean) => void;
}

export const TechContext = createContext<TechContextProps>({
  visible: false,
  changeVisible: () => {},
});

interface TechProviderProps {
  children: ReactNode;
}

function TechBkProvider({ children }: TechProviderProps) {
  const [visible, setVisible] = useState<boolean>(false);

  function changeVisible(isVisible: boolean) {
    setVisible(isVisible);
  }

  return (
    <TechContext.Provider value={{ visible, changeVisible }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechBkProvider;
