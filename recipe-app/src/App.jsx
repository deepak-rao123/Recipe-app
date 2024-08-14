import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar"
import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"



function App() {
  

  return (
    <>
     <div className="flex">
      <SideBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/favorites" element={<FavoritesPage/>}></Route>
      </Routes>
    

     </div>
  
    </>
  )
}

export default App
