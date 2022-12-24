import { projectAuth, projectFirestore } from '../Firebase/FirebaseConfig'
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {

    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const { dispatch } = useAuthContext()
    let response 

  const signup = async ( email, password, displayName) => {
       setError(null)
       setIsLoading(true)
       try{
          response = await projectAuth.createUserWithEmailAndPassword( email, password )
            console.log(response.user)
            if(!response){
                throw new Error('could not complete signup')
            }
            // update user name
            await response.user.updateProfile({ displayName })
            //create user documents
            await projectFirestore.collection('Users').doc(response.user.uid).set({
               displayName,
               id: response.user.uid,
               password: password,
               email: response.user.email
            })
            // dispatch login action
            dispatch({ type:'LOGIN', payload:response.user })
            setError(null)
            setIsLoading(false)
       } catch (error){
        console.log(error.message)
        setError(error.message)
        setIsLoading(false)
       }
  }

  return { error, isLoading, signup, response }
}
