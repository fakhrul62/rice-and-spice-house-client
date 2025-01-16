import useAuth from "../../hooks/useAuth";

const UsersHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block ">
          Welcome{" "}
          <span className="border-b-4 border-amber-400 pb-1">
            {user?.displayName}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default UsersHome;
