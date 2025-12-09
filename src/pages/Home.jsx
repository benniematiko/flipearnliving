import React from "react";
import Listing from "./Listing";
import ListingDetails from "./ListingDetails";
import ManageListings from "./ManageListings";
import MarketPlace from "./MarketPlace";
import MyListings from "./MyListings";
import Messages from "./Messages";
import MyOrders from "./MyOrders";

const Home = () => {
  return (
    <div>

      <div>
        Karuiru Advocates
      </div>




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
