import { useNavigate } from "react-router";
import { useUser } from "../contexts/userContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
import CardPost from "./card-post";

export default function Home() {
  const { username, logout } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <div className="max-w-[50rem]">
      <header className="bg-codeleap-blue py-7 px-9 w-full flex items-center justify-between gap-6">
        <h1 className="text-white font-bold text-1xl leading-100">
          Codeleap Network
        </h1>
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-bold text-white leading-100 text-base lg:text-lg">
            Welcome, {username}!
          </h2>
          <button
            className="flex items-center gap-1 cursor-pointer group rounded-lg bg-blue-600 py-1.5 px-4 text-sm lg:text-base text-white font-medium"
            onClick={handleLogout}
          >
            Logout
            <RiLogoutCircleRLine className="group-hover:translate-x-1.5 transition ease-in-out duration-500" />
          </button>
        </div>
      </header>
      <main className="bg-white h-full min-h-screen p-6 space-y-6">
        {/* create post */}
        <div className="border border-grey-700 bg-white rounded-2xl p-6 space-y-6 flex flex-col">
          <h1 className="font-bold text-black text-xl lg:text-1xl leading-100">
            What's on your mind?
          </h1>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="font-normal text-sm lg:text-base leading-100"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Hello world"
              className="border border-grey-400 rounded-lg py-2 px-2.5 text-sm leading-100 font-normal placeholder:text-grey-200 focus:outline-codeleap-blue"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="font-normal text-sm lg:text-base leading-100"
            >
              Content
            </label>
            <textarea
              name=""
              id=""
              placeholder="Content here"
              className="border border-grey-400 rounded-lg py-2 px-2.5 text-sm leading-100 font-normal placeholder:text-grey-200 focus:outline-codeleap-blue min-h-18.5"
            ></textarea>
          </div>
          <button
            className={`text-sm lg:text-base rounded-lg bg-codeleap-blue py-1.5 font-bold leading-100 text-white w-24 lg:w-28 h-8 self-end cursor-pointer hover:scale-105 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:scale-100`}
          >
            Create
          </button>
        </div>

        {/* card posts */}
        <CardPost />
      </main>
    </div>
  );
}
