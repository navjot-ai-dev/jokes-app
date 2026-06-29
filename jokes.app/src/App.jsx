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
       <div className='h-3/4 w-1/2 bg-amber-300 rounded-3xl flex flex-col justify-evenly p-5'>
                   <h1 className='bg-amber-600 px-6 py-3 text-3xl text-amber-50 rounded-2xl'>Funny Question and Answer</h1>
                   
                   <h2 className='bg-amber-50 w-full p-4 rounded-2xl text-xl'>Que : <p>{que}</p></h2>
                   <h2 className='bg-amber-50 w-full p-4 rounded-2xl text-xl'>Ans : <p>{ans}</p></h2>

              <div className='flex justify-center items-center'>
                 <button
        className='bg-amber-700 h-15 w-fit py-3 px-6 rounded-3xl text-amber-50 font-bold'
        onClick={jokes}>get joke</button>
              </div>

       </div>

    </div>
  )
}

export default App
