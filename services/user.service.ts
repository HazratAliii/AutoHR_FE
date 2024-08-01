import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/api/user", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZDJhY2U1LWI2YTEtNGNkMi1iZWNmLWJkZWY1YjhlZWQ3YiIsImlhdCI6MTcyMjQ5ODE4MiwiZXhwIjoxNzIyNTAxNzgyfQ.pDE8594dZVTozOvku9JSXBTKApHFtrQ8QQT4W-bNid4`,
        },
      });
      console.log(data);
      return data;
    },
  });
};
