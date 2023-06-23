import React from "react";
import Card from "./Card";

const Users = ({ userData, onDelete, onEdit }) => {
  return (
    <div className="flex justify-center flex-wrap mx-auto p-4">
      {userData.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};

export default Users;
