import { useGetUsers } from "@/services/user.service";
import React from "react";

const Teams = () => {
  const { data, isError } = useGetUsers();
  return <div>Teams</div>;
};

export default Teams;
