import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, ProjectsPage, AboutPage, NeedHelpPage, ReadyHelpPage } from './pages'

const RoutesApp = () => {
   return (
      <React.Fragment>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/projects' element={<ProjectsPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='./needhelp' element={<NeedHelpPage/>}/>
            <Route path='./readyneed' element={<ReadyHelpPage/>}/>
         </Routes>
      </React.Fragment>
   );
};
export default RoutesApp