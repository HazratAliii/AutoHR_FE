"use client";
import { useTokenStore } from "@/app/stores/auth.store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TeamService from "@/services/team.service";
import UserService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type formFields = {
  groupName: string;
};
const Contents = () => {
  const token = useTokenStore((state) => state.token);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formFields>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => UserService.fetchAllUsers(token as string),
  });

  // @ts-ignore
  const { mutateAsync } = TeamService.useCreateTeam(token as string);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error: {error.message}</>;
  if (!data) return <>No data available</>;

  const toggleSelection = (id: string) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const onSubmit: SubmitHandler<formFields> = async (data: formFields) => {
    console.log("first data ", data);
    const team = {
      user_id: "sfdsd",
      name: "sdfsd",
      mambers: [],
    };
    await mutateAsync(team, {
      onSuccess: (res: any) => {
        console.log("resp ", res);
      },
      onerror: () => {},
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <input type="text" placeholder="Enter team name" required />
          <Button type="submit">Create</Button>
          <br />
        </div>
      </form>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>
            <div className="flex justify-between items-center">
              <span className="my-2">
                {item.first_name} {item.last_name}
              </span>
              <span className="my-2">
                <p
                  className={`${
                    selectedIds.includes(item.id) ? "bg-white text-black" : ""
                  } mr-2 cursor-pointer`}
                  onClick={() => toggleSelection(item.id)}
                >
                  {selectedIds.includes(item.id) ? "Added" : "Add"}
                </p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export const Dialogg = () => {
  return (
    <div>
      <Dialog>
        <div className="font-bold">
          <DialogTrigger>Create Team</DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create team</DialogTitle>
            <DialogDescription>
              <div className="max-h-40 overflow-scroll">
                <Contents />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
