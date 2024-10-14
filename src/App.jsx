import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />}/>
<Route path='/shop' element={<Shop />}/>
<Route path='/about' element={<About />}/>
<Route path='/contact' element={<Contact />}/>
<Route path='/product' element={<Product />}/>
<Route path='/cart' element={<Cart />}/>
<Route path='/productid' element={<PruductCard />}/>

</Routes>
</BrowserRouter>
  )
}

export default App
