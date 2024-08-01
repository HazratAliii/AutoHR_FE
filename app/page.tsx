"use client";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { useGetUsers } from "@/services/user.service";
import Teams from "./components/teams/Teams";
import CreateTeam from "./components/createTeam/CreateTeam";
import Employees from "./components/employees/Employees";

export default function Home() {
  // const { data, isError, isPending } = useGetUsers();
  const [activeComponent, setActiveComponent] = useState("teams");
  const renderComponent = () => {
    switch (activeComponent) {
      case "teams":
        return <Teams />;
      case "createTeam":
        return <CreateTeam />;
      case "employees":
        return <Employees />;
      default:
        return <Teams />;
    }
  };
  return (
    <>
      <div className="flex">
        <Sidebar
          onMenuItemClick={setActiveComponent}
          activeComponent={activeComponent}
        />
        <div>{renderComponent()}</div>
      </div>
    </>
  );
}
