import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const GoogleLogin = ({ text }) => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      axiosPublic.post("/users", {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      })
      .then(res=>{
        console.log(res.data);
      })
    })
    .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-4 text-center">
      <button onClick={handleGoogleSignIn} className="px-20 btn bg-wgite hover:bg-zinc-300 border border-zinc-300 hover:border-zinc-400 text-black hover:text-black duration-300 font-body">
        {text}
        <span className="text-xl">
          <FcGoogle />
        </span>
      </button>
    </div>
  );
};

export default GoogleLogin;
