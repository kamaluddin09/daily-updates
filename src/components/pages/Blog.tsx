import { useEffect, useState } from "react";
import axios from "axios";

type Users = {
  login: string;
  id: number;
  avatar_url: string;
};

export default function Blog() {
  const [data, setData] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // const API = "https://api.github.com/users";
  const API = "https://api.github.com/users?per_page=10&since=0";


  const getUsers = async () => {
    try {
      const res = await axios.get(API);
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub Users</h2>
      
      {loading ? (
        <p className="text-gray-500">Loading users...</p>
      ) : (
        <div className=" flex flex-wrap gap-2 p-5">
          {data.map((user) => (
            <div
              key={user.id}
              className="mb-2  shadow-md rounded-full p-6 m-4 w-52 h-52 flex flex-col items-center justify-center "
            >
              <img src={user.avatar_url} alt="image" className="w-18  h-18 " />
              <h3 className="text-lg">{user.login}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
