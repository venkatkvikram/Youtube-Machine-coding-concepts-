import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Venkata Sai",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus.",
    replies: [
      {
        name: "Venkata Sai",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus.",
        replies: [],
      },
      {
        name: "Venkata Sai",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus.",
        replies: [
          {
            name: "Venkata Sai",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus.",
            replies: [],
          },
          {
            name: "Venkata Sai",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus.",
            replies: [
              {
                name: "Venkata Sai",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Venkata Sai",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus.",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
