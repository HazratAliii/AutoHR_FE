import React from "react";
import { FaGear, FaPeopleGroup } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  return (
    <>
      <div className="w-[200px] border  md:h-[calc(100vh-50px)]">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-center flex-col mt-4 gap-2">
            <div className="flex justify-center gap-1 items-center cursor-pointer">
              <span>
                <FaPeopleGroup size={22} />
              </span>{" "}
              <span>Your teams</span>
            </div>
            <div className="flex justify-center items-center gap-1 cursor-pointer">
              <span>
                <IoAddCircleSharp size={22} />
              </span>
              <span>Create team</span>
            </div>
          </div>
          <div className="flex justify-center items-center mb-7">
            <div className="flex justify-center items-center gap-4 cursor-pointer">
              <span>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
              <span className="">Hazrat Ali</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
