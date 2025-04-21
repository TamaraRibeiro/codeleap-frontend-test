export default function ModalDeletePost({handleDeleteModal}: {handleDeleteModal: () => void}) {
  return (
    <div className="w-full h-full bg-grey-400/80 fixed flex justify-center items-center top-0 left-0 px-6">
      <div className="bg-white border border-grey-700 space-y-10 p-6 rounded-2xl w-full max-w-[40rem]">
        <h1 className="text-black font-bold text-lg lg:text-1xl leading-100">
          Are you sure you want to delete this item?
        </h1>
        <div className="flex gap-4 items-center justify-end">
          <button
          onClick={handleDeleteModal}
            className={`rounded-lg bg-white py-1.5 border border-grey-700 font-bold leading-100 text-black w-28 h-8 self-end cursor-pointer hover:scale-105 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:scale-100`}
          >
            Cancel
          </button>
          <button
            className={`rounded-lg bg-codeleap-red py-1.5 font-bold leading-100 text-white w-28 h-8 self-end cursor-pointer hover:scale-105 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:scale-100`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
