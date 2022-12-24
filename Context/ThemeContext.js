import { createContext, useReducer } from 'react'

export const  ThemeContext = createContext()

   const themeReducer = (state, action) => {
       switch(action.type){
         case 'DARK_MODE':
            return { ...state, background:action.paylaod };
         case "CUSTOMIZE_THEME":
            return { ...state, background:action.payload};
         case "CUSTOMIZE_COLOR":
            return { ...state, color:action.payload};
         default :
          return state
       }
   }

   export  const ThemeConTextProvider = ({ children }) => {
      const [ state, dispatch ] = useReducer(themeReducer,{
         background:'#fff',
         color:'#0052FF'
      })
      // const darkMode = (changeTheme)  => {
      //       dispatch({ type:"DARK_MODE", payload:changeTheme})
      // }

      const customizeBackground = (background) => {
         dispatch({ type:"CUSTOMIZE_THEME", payload:background})
      } 

      const customizeColor = ( color ) => {
         dispatch({ type:"CUSTOMIZE_COLOR", payload:color })
      }
         console.log('Theme_Context',state)
       return(
          <ThemeContext.Provider value={{ ...state, customizeColor, customizeBackground  }}>
             { children }
          </ThemeContext.Provider>
       )
}
  