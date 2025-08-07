import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const res = await axios.get("https://api.github.com/users");
  return res.data;
};

export default function Blog() {
  const { data, isLoading, isError,  } = useQuery({
    queryKey: ["users"], 
    queryFn: fetchUsers, 
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub Users</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((user: any) => (
          <div
            key={user.id}
            className="shadow-lg p-4 rounded-xl w-56 flex flex-col items-center border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-28 h-28 rounded-full object-cover mb-3"
            />
            <p className="font-bold text-lg">{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
