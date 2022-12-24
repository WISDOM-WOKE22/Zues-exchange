import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export const  useThemeContext = () => {
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error('ThemeContext must be used inside a themeContextProvider')
    }
  return context
}
