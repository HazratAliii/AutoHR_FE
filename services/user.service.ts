import axios from "axios";

class UserService {
  static fetchAllUsers = async (token: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  };

  static fetchUserInfo = async (token: string, id: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }
    return response.data;
  };
}

export default UserService;
