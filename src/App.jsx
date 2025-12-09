import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Listing from './pages/Listing'
import ListingDetails from './pages/ListingDetails'
import MarketPlace from './pages/MarketPlace'
import ManageListings from './pages/ManageListings'
import Messages from './pages/Messages'
import MyListings from './pages/MyListings'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'

const App = () => {
  return (
    <div>
      <Routes>       

        <Route path="/" element={<Home />}/>
        <Route path="/listing" element={<Listing />}/>
        <Route path="/listing/:listingId" element={<ListingDetails />}/>
        <Route path="/marketplace" element={<MarketPlace />}/>
        <Route path="/create-listing" element={<ManageListings />}/>
        <Route path="/edit-listing" element={<ManageListings />}/>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/my-listings" element={<MyListings />}/>
        <Route path="/myorders" element={<MyOrders />}/>
        <Route path="/loading" element={<Loading />}/>
        

      </Routes>
    </div>
  )
}

export default App
