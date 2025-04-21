import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import ModalDeletePost from "./modal-delete-post";
import ModalEditPost from "./modal-edit-post";
import { CardProps, GetCardProps } from "../@types/types";
import { getRelativeTime } from "../utils/getRelativeTime";

export default function CardPost({card, setCards}: {card: CardProps, setCards: React.Dispatch<React.SetStateAction<GetCardProps>>}) {
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
          {card.title}
        </h1>
        <div className="flex items-center gap-4 lg:gap-6">
          <TbTrashXFilled
            onClick={handleDeleteModal}
            className="text-white size-5 lg:size-7.5 cursor-pointer hover:scale-110 hover:-rotate-12 hover:text-red-300 transition ease-in-out duration-200"
          />
          <FiEdit
            onClick={handleEditModal}
            className="text-white size-5 lg:size-7.5 cursor-pointer hover:scale-110 hover:rotate-12 hover:text-green-400 transition ease-in-out duration-200"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-base lg:text-lg leading-100 text-grey-400">
            @{card.username}
          </span>
          <span className="text-grey-400 font-normal text-base lg:text-lg leading-100">
            {getRelativeTime(String(card.created_datetime))}
          </span>
        </div>
        <div className="max-w-[44rem]">
          <p className="text-base lg:text-lg font-normal leading-100">
            {card.content}
          </p>
        </div>
      </div>
      {isDeleteModalOpen && (
        <ModalDeletePost handleDeleteModal={handleDeleteModal} id={card.id} setCards={setCards} />
      )}
      {isEditModalOpen && <ModalEditPost handleEditModal={handleEditModal} card={card} />}
    </div>
  );
}
