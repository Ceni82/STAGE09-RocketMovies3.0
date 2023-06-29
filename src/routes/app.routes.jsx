import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { MovieNote } from '../pages/MovieNote'
import { Profile } from '../pages/Profile'

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/note/:id" element={<MovieNote/>}/> 
    </Routes>
  )
}
