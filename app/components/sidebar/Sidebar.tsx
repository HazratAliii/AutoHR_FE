import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-[200px] border  md:h-[calc(100vh-50px)]">
        <div className="flex justify-center flex-col text-center mt-4">
          <div>Your teams</div>
          <div>Create team</div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Sidebar;
