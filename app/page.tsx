"use client";
import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Teams from "./components/teams/Teams";
import CreateTeam from "./components/createTeam/CreateTeam";
import Employees from "./components/employees/Employees";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { useTokenStore } from "./stores/auth.store";

export default function Home() {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState("teams");
  // const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const token = useTokenStore((state) => state.token);

  useEffect(() => {
    // setToken(tokenFromStorage);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (!token) {
        router.push("/login");
      }
    }
  }, [loading, token, router]);

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

  if (loading)
    return (
      <div className="h-full flex justify-center items-center min-h-screen bg-slate-300">
        <BeatLoader />
      </div>
    );

  return (
    <div className="flex">
      <Sidebar
        onMenuItemClick={setActiveComponent}
        activeComponent={activeComponent}
      />
      <div>{renderComponent()}</div>
    </div>
  );
}
