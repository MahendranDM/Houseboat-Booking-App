import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddHouseBoat from './components/AddHouseBoat'
import DeleteHouseBoat from './components/DeleteHouseBoat'
import SearchHouseBoat from './components/SearchHouseBoat'
import ViewHouseBoat from './components/ViewHouseBoat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<BrowserRouter>

<Routes>


<Route path='/' element={<ViewHouseBoat/>}/>
<Route path='/delete' element={<DeleteHouseBoat/>}/>
<Route path='/add' element={<AddHouseBoat/>}/>
<Route path='/search' element={<SearchHouseBoat/>}/>


</Routes>

</BrowserRouter>



    </>
  )
}

export default App
