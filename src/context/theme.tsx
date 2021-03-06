import React, {useState} from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; changeTheme: SetTheme };
type SetTheme = (newTheme: Theme) => void;

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const changeTheme:SetTheme = (newTheme: Theme ) => {setTheme(newTheme)};

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};