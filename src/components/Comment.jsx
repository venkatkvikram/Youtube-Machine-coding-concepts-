import React from "react";

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rouded-lg my-2">
      <img className="h-8 w-8" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
