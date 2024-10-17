import Pixabay from "./Pixabayhome";
import Login from "../Pages/Login";

import Join from "../Pages/Join";
import Error from "../Pages/Error";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ImagePage from "../Pages/ImagePage";
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pixabay/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      
      <Route path="/signup" element={<Join/>}></Route>
      <Route path="/image" element={<ImagePage/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  // 
)
}