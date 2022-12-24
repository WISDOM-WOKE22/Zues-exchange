import { projectFirestore, timestamp } from "../Firebase/FirebaseConfig";
import { useState, useEffect, useReducer } from 'react'

let initiaState = { 
    document:null,
    isPending:false,
    error:null,
    success:null
}

const fireStoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return { ...state, document:null, error:null, isPending:true, success:false}
        case 'ADD_DOCUMENT':
            return { ...state, document:action.payload, error:null, success:true, isPending:false}
        case 'ERROR':
            return { ...state, document:null, error:action.payload, success:false, isPending:false}
        default:
            return { ...state }
    }
}

export const useFireStore = (collection) => {
    const [ response, dispatch ] = useReducer(fireStoreReducer,initiaState)
    const [ isCancelled, setIsCancelled ] = useState(false)

    const ref = projectFirestore.collection(collection)

    const addDocument = async (doc) => {
           dispatch({ type:'IS_PENDING'})
        try{
            const createdAt = timestamp.fromDate( new Date())
             const addedDocument = await ref.add({ ...doc, createdAt })
             if(!isCancelled){
                 dispatch({type:'ADD_DOCUMENT', payload:addedDocument})
             }
        }catch(error){
             dispatch({type:'ERROR', payload:error.message})
        }
    }
    useEffect(() => {
       return () => setIsCancelled(true) 
    }, [])

    return { addDocument, response }

}