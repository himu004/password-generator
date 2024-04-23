import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password Genarator Main Method
  const passwordGenerator = useCallback(() => {

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) str += '0123456789';
    if(charAllowed) str += '~`!@#$%^&*-_+={}[]|';

    for(let i = 1; i <= length; i++) {
     let char = Math.floor(Math.random() * str.length + 1);

     pass += str.charAt(char);

    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-2xl font-bold pb-4'>Password Generator</h1>
        <div className='flex justify-center'>
          <input 
          type="text" 
          value={password} 
          className='w-9/12 p-2 rounded-l-md' 
          placeholder='Password'
          readOnly
          />
          <button 
          className='w-24 outline-none bg-blue-700 text-white px-3 py-2 rounded-r-lg'>Copy
          </button> 
        </div>
          <div className='flex text-sm gap-x-2 my-5 justify-evenly'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                 min={6}
                 max={100}
                 value={length}
                 className='cursor-pointer'
                 onChange={(e) => setLength(e.target.value)}
              />
              <label>Length: {length}</label>
            </div>
            {/* Numbers */}
            <div>
              <input 
              type="checkbox" 
              checked={numberAllowed}
              onChange={() => 
                setNumberAllowed((prev) => !prev)
              }
              />
              <label>Numbers</label>
            </div>
            {/* Chars */}
            <div>
              <input 
              type="checkbox" 
              checked={charAllowed}
              onChange={() => 
                setCharAllowed((prev) => !prev)
              }
              />
              <label>Chars</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
