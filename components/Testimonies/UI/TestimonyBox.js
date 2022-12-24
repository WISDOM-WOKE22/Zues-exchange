export default function TestimonyBox({ image, name, id }) {
  return (
    <div>
         <div className='testimony-box'>
          <div className='testimony-image'>
            <img src={image}/>
          </div>
          <div className='testimony-text'>
            <div className='client-name'>{name}</div>
            <p className='client-id'>{id}</p>
            <div className='client-rating'></div>
            <div className='client-comment'>
              <p>"
                 This is one of the best plateform that i've seen so far that is indeed reliable and fraud free.   
              "</p>
            </div>
          </div>
        </div>
    </div>
  )
}
