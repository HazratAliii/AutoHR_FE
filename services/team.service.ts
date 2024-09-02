import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { teamType } from "@/types";

class TeamService {
  static fetchYourTeams = async (token: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/team`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("res teams ", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  };

  static useCreateTeam = async (token: string) => {
    try {
      return useMutation({
        mutationFn: async (team: teamType) => {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_URL}/api/team`,
            { team },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return response.data;
        },
      });
    } catch (error) {
      throw new Error("Failed creating teams ");
    }
  };

  static fetchSingleTeam = async (token: string, id: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/team/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed fetching team");
    }
  };

  static deleteTeam = async (token: string, id: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/team/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed deleteing team");
    }
  };
}

export default TeamService;
