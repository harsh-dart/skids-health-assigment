import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ email, phone, name, id, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onCloseModalHandler = () => {
    setIsEdit(false);
  };
  return (
    <>
      {isEdit && (
        <Modal
          closeModal={onCloseModalHandler}
          name={name}
          email={email}
          phone={phone}
          onEdit={onEdit}
          id={id}
        />
      )}
      <div className="p-3 drop-shadow-md m-1 bg-white w-fit space-y-2">
        <p>
          <span className="font-medium">Name: </span>
          {name}
        </p>
        <p>
          <span className="font-medium">Email: </span>
          {email}
        </p>
        <p>
          <span className="font-medium">Phone: </span>
          {phone}
        </p>
        <div className="space-x-2">
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Edit
          </button>
          <button
            className="bg-slate-300 px-4 py-1"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
