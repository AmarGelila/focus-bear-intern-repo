import { Navigate, useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <h1>Profile Page</h1>
      <button
        onClick={() => navigate("/")}
        className="px-3 py-1 border-2 border-blue-500 text-1xl active:text-blue-300 transition-colors font-black rounded-2xl text-blue-500 hover:bg-blue-500 hover:text-white bg-white hover:cursor-pointer"
      >
        Go To Home
      </button>
    </div>
  );
}

export default Profile;
