import { ReactElement, createContext, useContext, useState } from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
 
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('cntext error');
    return context;
}

interface ThemeProviderProps{
    children: ReactElement;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
      const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
  setIsDark((prev)=>!prev)
}
    return <ThemeContext.Provider value={{ isDark, toggleTheme }}>
       {children}
   </ThemeContext.Provider>
}