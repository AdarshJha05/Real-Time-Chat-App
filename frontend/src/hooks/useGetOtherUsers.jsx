import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8000/api/v1/user/", {
          withCredentials: true, // Include cookies (for token)
        });
        console.log(res.data);
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.error(
          "Error fetching users:",
          error.response?.data || error.message,
        );
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
