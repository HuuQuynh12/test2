import { useState } from 'react';

import {Routes, Route, Link} from 'react-router-dom';

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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
            <li>
              <Link to='/page'>Page</Link>
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
