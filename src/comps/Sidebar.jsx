import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = (props) => {
  const {isMobile} = props.isMobile;
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats isMobile={isMobile}/>
    </div>
  );
};

export default Sidebar;