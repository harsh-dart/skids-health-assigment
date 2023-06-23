import React, { useState } from "react";

const Form = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function validateEmail(email) {
    var emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  }

  function validatePhone(phone) {
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
    return phoneRegex.test(phone);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      setError("Please fill every fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid Email!");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Invalid Phone Number!");
      return;
    }

    const user = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    onAddUser(user);
    setName("");
    setPhone("");
    setEmail("");
  };

  const onNameInputChange = (e) => {
    setName(e.target.value);
    setError("");
  };
  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onPhoneInputChange = (e) => {
    setPhone(e.target.value);
    setError("");
  };

  return (
    <form className="flex flex-col w-96 mx-auto p-2" onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        className="p-2 mb-2.5 outline-slate-300"
        onChange={onNameInputChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        className="p-2 mb-2.5 outline-slate-300"
        onChange={onEmailInputChange}
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="number"
        value={phone}
        className="p-2 outline-slate-300"
        onChange={onPhoneInputChange}
      />
      {error && <p className="text-sm mt-2 text-red-700">{error}</p>}
      <input
        type="submit"
        className="bg-slate-300 duration-300 shadow mt-2.5 p-2 cursor-pointer hover:shadow-lg"
      />
    </form>
  );
};

export default Form;
