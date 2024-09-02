import React, { useRef } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PopOverContent = () => {
  const Items = [
    { key: "profile", label: "View profile", icon: CgProfile },
    { key: "", label: "Edit profile", icon: CiEdit },
    { key: "", label: "Logout", icon: RiLogoutBoxLine },
  ];

  return (
    <div className="flex flex-col justify-center gap-1">
      {Items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex items-center cursor-pointer gap-2">
            <span>
              <Icon />
            </span>
            <Link href={`/${item.key}`}>
              <span>{item.label}</span>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PopOverContent;
