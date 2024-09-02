import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

const Profile = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-[calc(100vh-50px)] overflow-auto">
        This is profile page
      </div>
    </div>
  );
};

export default Profile;
