import { createContext, useEffect, useReducer } from 'react'
import { projectAuth, projectFirestore } from '../Firebase/FirebaseConfig'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return { ...state, user:action.payload }
        case 'LOGOUT':
            return {...state, user:null}
        case 'AUTH_IS_READY':
            return { ...state, user:action.payload }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer,{
        user:null
    })

    useEffect(() => {
        const unsub = projectAuth.onAuthStateChanged( async (user) => {
            if(user) {
                dispatch({ type: 'AUTH_IS_READY', payload: user })
            } else{
                dispatch({ type: 'LOGOUT'})
            }
        })
        return () => unsub()
    },[])

    console.log('AuthContext_state:',state)

  return (
     <AuthContext.Provider value={{ ...state, dispatch}}>
        { children }
     </AuthContext.Provider>
  )
}
