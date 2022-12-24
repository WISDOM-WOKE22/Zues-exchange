import {  useState, useEffect, useRef } from 'react'
import { projectFirestore } from '../Firebase/FirebaseConfig'
import { useAuthContext } from './useAuthContext'

export const useCollection = (collection,query, _orderBY) => {
    const [ documents , setDocuments ] = useState(null)
    const [ error, setError ] = useState(null)
        const Query = useRef(query).current
        const orderBy= useRef(_orderBY).current
    useEffect(() => {
        let ref = projectFirestore.collection(collection)
        if(Query){
            ref = ref.where(...Query)
        }
        if(orderBy){
            ref = ref.orderBy(...orderBy)
        }
        const unsubcribe = ref.onSnapshot((snapshot) =>{
             let result = []
             snapshot.docs.forEach((doc) => {
                result.push({...doc.data(), id: doc.id})
             })
             setDocuments(result)
             setError(null)
        }, (error) => {
            console.log(error.message)
            setError('Could not fetch data')
        })
        return () => unsubcribe()
    }, [collection, Query, orderBy])
    return { documents, error }
}