import { useEffect, useState } from "react";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  const [usersData, setUsersData] =  useState(localStorage.getItem("usersData")? JSON.parse(localStorage.getItem("usersData")) : []);

  useEffect(()=>{
    localStorage.setItem("usersData", JSON.stringify(usersData));
  },[usersData])

  const addUserHandler = (user) => {
    setUsersData([...usersData, user]);
  };

  const deleteUserHandler = (id) => {
    const filteredUserData = usersData.filter((user) => user.id !== id);
    setUsersData(filteredUserData);
  };

  const editUserHandler = (id, userr) => {
    const filteredUserData = usersData.filter((user) => user.id !== id);

    filteredUserData.push(userr);
    setUsersData(filteredUserData);
  };

  console.log(usersData);
  return (
    <div className="App bg-slate-200 min-h-screen">
      <Form onAddUser={addUserHandler} />
      <Users
        userData={usersData}
        onDelete={deleteUserHandler}
        onEdit={editUserHandler}
      />
    </div>
  );
}

export default App;
