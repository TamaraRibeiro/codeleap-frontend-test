import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import ModalDeletePost from "./modal-delete-post";
import ModalEditPost from "./modal-edit-post";

export default function CardPost() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }
  function handleEditModal() {
    setIsEditModalOpen(!isEditModalOpen);
  }
  return (
    <div className="rounded-2xl border border-grey-700 bg-white">
      <div className="bg-codeleap-blue rounded-t-2xl p-6 flex items-center justify-between -translate-y-0.5">
        <h1 className="text-white font-bold text-xl lg:text-1xl leading-100">
          My First Post at Codeleap Network!
        </h1>
        <div className="flex items-center gap-4 lg:gap-6">
          <TbTrashXFilled
            onClick={handleDeleteModal}
            className="text-white size-5 lg:size-7.5"
          />
          <FiEdit
            onClick={handleEditModal}
            className="text-white size-5 lg:size-7.5"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-base lg:text-lg leading-100 text-grey-400">
            @Victor
          </span>
          <span className="text-grey-400 font-normal text-base lg:text-lg leading-100">
            25 minutes ago
          </span>
        </div>
        <div className="max-w-[44rem]">
          <p className="text-base lg:text-lg font-normal leading-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      {isDeleteModalOpen && (
        <ModalDeletePost handleDeleteModal={handleDeleteModal} />
      )}
      {isEditModalOpen && <ModalEditPost handleEditModal={handleEditModal} />}
    </div>
  );
}
