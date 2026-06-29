import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
   const [que, setque] = useState('')
   const [ans, setans] = useState('')

   const jokes = async() =>{
          let joke =await axios.get(' https://official-joke-api.appspot.com/random_joke')
          console.log(joke.data);
          
          setque(joke.data.setup)
          setans(joke.data.punchline)
          

   }

  return (
  <div className="bg-[url('https://img.magnific.com/free-vector/emoji-summer-background_79603-1589.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center h-screen flex justify-center items-center">
       <div className='h-3/4 w-1/2 bg-amber-200 rounded-3xl flex flex-col justify-evenly p-5'>
                   <h1>Funny Question and Answer</h1>
                   <h2>Que : <p>{setque}</p></h2>
                   <h2>Ans : <p>{setans}</p></h2>

        <button onClick={jokes}>get joke</button>
       </div>

    </div>
  )
}

export default App
