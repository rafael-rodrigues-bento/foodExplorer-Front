import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Edit } from '../pages/Edit';

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
  )
}