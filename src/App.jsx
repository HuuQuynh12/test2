import { useState } from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from './Component/Home';
import Page from './Component/Page'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/news'>News</a>
            </li>
            <li>
              <a href='/page'>Page</a>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/page' element={<Page/>}></Route>
    </Routes>
    </>
  )
}

export default App
