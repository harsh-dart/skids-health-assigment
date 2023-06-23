import React, { useState } from "react";

export default function Modal({ closeModal, name, email, phone, id, onEdit }) {
  const [error, setError] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone, setEditPhone] = useState(phone);

  function validateEmail(email) {
    var emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  }

  function validatePhone(phone) {
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
    return phoneRegex.test(phone);
  }

  const onNameInputChange = (e) => {
    setEditName(e.target.value);
  };

  const onEmailInputChange = (e) => {
    setEditEmail(e.target.value);
  };

  const onPhoneInputChange = (e) => {
    setEditPhone(e.target.value);
  };

  const onSaveChanges = (id) => {
    if (editName === "" || editEmail === "" || editPhone === "") {
      setError("Please fill every fields");
      return;
    }

    if (!validateEmail(editEmail)) {
      setError("Invalid Email!");
      return;
    }

    if (!validatePhone(editPhone)) {
      setError("Invalid Phone Number!");
      return;
    }
    const user = {
      id,
      name: editName,
      email: editEmail,
      phone: editPhone,
    };
    onEdit(id, user);
    closeModal();
  };
  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-2xl font-semibold">Edit {name}'s Data</h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="flex flex-col mx-auto p-2" onSubmit={null}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    value={editName}
                    className="p-2 mb-2.5 outline-slate-300"
                    onChange={onNameInputChange}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    value={editEmail}
                    className="p-2 mb-2.5 outline-slate-300"
                    onChange={onEmailInputChange}
                  />
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="number"
                    value={editPhone}
                    className="p-2 outline-slate-300"
                    onChange={onPhoneInputChange}
                  />
                  {error && (
                    <p className="text-sm mt-2 text-red-700">{error}</p>
                  )}
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    onSaveChanges(id);
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
}
