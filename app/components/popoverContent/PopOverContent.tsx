import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const PopOverContent = () => {
  const Items = [
    { label: "View profile", icon: CgProfile },
    { label: "Edit profile", icon: CiEdit },
    { label: "Logout", icon: RiLogoutBoxLine },
  ];
  return (
    <>
      <div className="flex flex-col justify-center gap-1">
        {Items.map((item) => {
          const Icon = item.icon;
          return (
            <>
              <div className="flex items-center cursor-pointer gap-2">
                <span>
                  <Icon />
                </span>{" "}
                <span>{item.label}</span>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export default PopOverContent;
