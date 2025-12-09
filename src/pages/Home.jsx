import React from "react";
import Listing from "./Listing";
import ListingDetails from "./ListingDetails";
import ManageListings from "./ManageListings";
import MarketPlace from "./MarketPlace";
import MyListings from "./MyListings";
import Messages from "./Messages";
import MyOrders from "./MyOrders";
import HeroSection from "../components/HeroSection";

import TopSection from "../components/TopSection";

const Home = () => {
 
  return (
    <div>

      

    
      <HeroSection />

      <ListingDetails />

      <Listing />
      <ManageListings />
      <MarketPlace />
      <MyListings />
      <Messages />
      <MyOrders />
    </div>
  );
};

export default Home;
