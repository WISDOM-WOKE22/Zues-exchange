import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../Firebase/FirebaseConfig";
import { useState } from "react";
export const useLogout = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const { dispatch } = useAuthContext()
  const logout = async () => {
     setError(null)
     setIsLoading(true)
     try{
        await projectAuth.signOut()
        dispatch({type:'LOGOUT'})
        setError(null)
        setIsLoading(false)
     }catch(error){
        console.log(error.message)
        setError('could not logout')
        setIsLoading(false)
     }
  }
  return { logout, error, isLoading }
}
