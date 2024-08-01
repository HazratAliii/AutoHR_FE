import React from "react";
import { FaPeopleGroup, FaUsersLine } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PopOverContent from "../popoverContent/PopOverContent";

const Sidebar = ({ onMenuItemClick, activeComponent }: any) => {
  const menuItems = [
    { id: "teams", label: "Your teams", icon: FaPeopleGroup },
    { id: "createTeam", label: "Create team", icon: IoAddCircleSharp },
    { id: "employees", label: "Employees", icon: FaUsersLine },
  ];

  return (
    <div className="w-[200px] border md:h-[calc(100vh-50px)]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-start items-center mt-4 gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeComponent === item.id;

            return (
              <div
                key={item.id}
                className={`flex justify-start gap-2 items-center cursor-pointer p-2 rounded-md ${
                  isActive ? "bg-[#262E3F] text-white" : ""
                }`}
                onClick={() => onMenuItemClick(item.id)}
              >
                <span>
                  <Icon size={22} />
                </span>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mb-7">
          <Popover>
            <PopoverTrigger>
              <div className="flex justify-start gap-4 items-center cursor-pointer">
                <span>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </span>
                <span className="font-bold">Hazrat Ali</span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <PopOverContent />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
