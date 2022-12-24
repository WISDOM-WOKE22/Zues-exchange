import { projectAuth } from "../Firebase/FirebaseConfig";
import { useState, useEffect } from 'react'
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsLoading(true)
        try{
            const response = await projectAuth.signInWithEmailAndPassword(email,password)
            console.log(response.user)
            if(!response){
                throw new Error('Could not complete Login')
            }
            //dispatch login 
            dispatch({type:'LOGIN',payload:response.user})
            setError(null)
            setIsLoading(false)
        } catch(error){
            setError(error.message)
            setIsLoading(false)
        }
    }
  
  return { error, isLoading, login }
}
