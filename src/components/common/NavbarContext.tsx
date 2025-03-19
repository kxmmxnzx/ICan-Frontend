'use client';

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

interface Props {
  isFolded: boolean;
  toggleNavbar: () => void;
}

const NavbarContext = createContext<Props | undefined>(undefined);
export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isFolded, setIsFolded] = useState(false);

  const toggleNavbar = useCallback(() => {
    setIsFolded((prev) => !prev);
  }, []);

  const contextValue = useMemo(
    () => ({ isFolded, toggleNavbar }),
    [isFolded, toggleNavbar],
  );

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
}
