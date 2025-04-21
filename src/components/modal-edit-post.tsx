export default function ModalEditPost({
  handleEditModal,
}: {
  handleEditModal: () => void;
}) {
  return (
    <div className="w-full h-full bg-grey-400/80 fixed flex justify-center items-center top-0 left-0 px-6">
      <div className="bg-white border border-grey-700 space-y-6 p-6 rounded-2xl w-full max-w-[40rem]">
        <h1 className="text-black font-bold text-lg lg:text-1xl leading-100">
          Edit Item
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
        <div className="flex gap-4 items-center justify-end">
          <button
            onClick={handleEditModal}
            className={`rounded-lg bg-white py-1.5 border border-grey-700 font-bold leading-100 text-black w-28 h-8 self-end cursor-pointer hover:scale-105 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:scale-100`}
          >
            Cancel
          </button>
          <button
            className={`rounded-lg bg-codeleap-green py-1.5 font-bold leading-100 text-white w-28 h-8 self-end cursor-pointer hover:scale-105 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:scale-100`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
