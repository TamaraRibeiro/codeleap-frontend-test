import { useState } from "react";

export default function ModalLogin() {
  const [userInput, setUserInput] = useState("");


  return (
    <div className="bg-white border border-grey-200 rounded-2xl lg:max-w-[500px] lg:max-h-[205px] p-6 flex flex-col">
      <h1 className="text-1xl leading-100 font-bold">
        Welcome to CodeLeap network!
      </h1>
      <div className="flex flex-col gap-2 mt-6 mb-4">
        <label htmlFor="">Please enter your username</label>
        <input
        onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="John Doe"
          className="border border-grey-400 rounded-lg py-2 px-2.5 text-sm leading-100 font-normal placeholder:text-grey-200 focus:outline-codeleap-blue"
        />
      </div>
      <button disabled={!userInput} className={`uppercase rounded-lg bg-codeleap-blue py-1.5 font-bold leading-100 text-white w-28 h-8 self-end cursor-pointer hover:scale-105 transition ease-in-out duration-200 ${userInput === "" && "bg-gray-200"} disabled:cursor-not-allowed disabled:scale-100`}>
        Enter
      </button>
    </div>
  );
}
