import React from 'react'
import CharacterGallery from '../components/CharacterGallery'
import CharacterDetail from '../components/CharacterDetail'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<CharacterGallery/>}></Route>
    <Route path="character/:id" element={<CharacterDetail/>}></Route>
    </Routes>
  )
}

export default AllRoutes