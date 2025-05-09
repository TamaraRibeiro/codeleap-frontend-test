import { useNavigate } from "react-router";
import { useUser } from "../contexts/userContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
import CardPost from "./card-post";
import axios from "axios";
import { useEffect, useState } from "react";
import { GetCardProps } from "../@types/types";
import { toast } from "react-toastify";

export default function Home() {
  const { username, logout } = useUser();
  const navigate = useNavigate();
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const [cards, setCards] = useState({} as GetCardProps);

  const [page, setPage] = useState(1);

  function handleLogout() {
    logout();
    navigate("/");
  }

  useEffect(() => {
    const getCards = async () => {
      const resultCards = await axios
        .get("https://dev.codeleap.co.uk/careers/?limit=10")
        .then((result) => result.data);
      setCards(resultCards);
    };
    getCards();
  }, []);

  async function goToNextPage() {
    if (cards.next !== null) {
      const resultCards = await axios
        .get(`${cards.next}`)
        .then((result) => result.data);
      setCards(resultCards);
    }

    setPage(page + 1);
  }

  async function goToPreviousPage() {
    if (cards.previous !== null) {
      const resultCards = await axios
        .get(`${cards.previous}`)
        .then((result) => result.data);
      setCards(resultCards);
    }

    setPage(page - 1);
  }

  async function createPost() {
    try {
      const result = await axios.post("https://dev.codeleap.co.uk/careers/", {
        username: username,
        title: titleInput,
        content: contentInput,
      }).then((result) => result.data);
      setCards({ ...cards, results: [ result,...cards.results] });
      setTitleInput("");
      setContentInput("");
      toast.success("Post created successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Oops, something went wrong!");
    }
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
              onChange={(e) => setTitleInput(e.target.value)}
              value={titleInput}
              type="text"
              name="title"
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
              onChange={(e) => setContentInput(e.target.value)}
              name="content"
              value={contentInput}
              placeholder="Content here"
              className="border border-grey-400 rounded-lg py-2 px-2.5 text-sm leading-100 font-normal placeholder:text-grey-200 focus:outline-codeleap-blue min-h-18.5"
            ></textarea>
          </div>
          <button
            disabled={!titleInput || !contentInput}
            onClick={createPost}
            className={`text-sm lg:text-base rounded-lg py-1.5 font-bold leading-100 text-white w-24 lg:w-28 h-8 self-end cursor-pointer hover:scale-105 transition ease-in-out duration-200 ${
              titleInput === "" || contentInput === ""
                ? "bg-grey-200"
                : "bg-codeleap-blue"
            } disabled:cursor-not-allowed disabled:scale-100`}
          >
            Create
          </button>
        </div>

        {/* card posts */}
        {cards.results &&
          cards.results.map((card) => <CardPost setCards={setCards} key={card.id} card={card} />)}

        {/* pagination */}
        <div className="flex items-center justify-center gap-4 self-end">
          <button
            disabled={page === 1}
            onClick={goToPreviousPage}
            className="gap-1 bg-codeleap-blue text-sm lg:text-base rounded-lg py-1.5 font-medium leading-100 text-black w-20  h-8 cursor-pointer hover:scale-105 transition ease-in-out duration-200 disabled:bg-grey-200 disabled:cursor-not-allowed disabled:scale-100"
          >
            Previous
          </button>
          <p className="text-sm lg:text-base font-bold leading-100">
            Page {page} of {Math.ceil(cards.count / 10)}
          </p>
          <button
            disabled={page === Math.ceil(cards.count / 10)}
            onClick={goToNextPage}
            className="bg-codeleap-blue text-sm lg:text-base rounded-lg py-1.5 font-medium leading-100bg-codeleap-blue text-black w-20 lg:w-28 h-8 cursor-pointer hover:scale-105 transition ease-in-out duration-200 disabled:bg-grey-200 disabled:cursor-not-allowed disabled:scale-100"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
