import './CardList.css'
import { useCollection } from '../../../Hooks/UseCollection'
// import { useFireStore } from '../../../Hooks/useFirestore'
import { projectFirestore } from '../../../Firebase/FirebaseConfig'
import { FaTrash } from 'react-icons/fa'

export default function CardList({ uid, documents }) {
    // const { documents } = useCollection(
    //     'Add-Card',
    //     ["user.uid","==",uid],
    //     ["createdAt","desc"]
    // )
    const deleteCard = (id) => {
      projectFirestore.collection(id).delete()
    }
    console.log(documents)
  return (
    <div>
        <ul>
           {documents && documents.map((card) => (
            <li key={card.id}>
                <p>{card.cardNumber}</p>
                <p>{card.name}</p>
                <FaTrash onClick={() => deleteCard(card.id)}/>
            </li>
            ))  }
        </ul>
      
    </div>
  )
}
