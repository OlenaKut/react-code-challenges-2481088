import { useEffect, useState } from "react"


const getDogPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json()
  return dog.message
}



export default function DogPics() {
  const [dogPic, setDogPic] = useState('')

  useEffect(() => {
getDogPic().then(pic => setDogPic(pic))
  }, [])
  

  // API: https://dog.ceo/dog-api/
  return (
    <div className='dog-pics'>
      <img src={dogPic} alt='Dog'/>
      <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}
