"use client";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface UpdateProps {
  todo: {
    id: string;
    title: string;
    content: string;
  };
}

const PostEdit: FC<UpdateProps> = ({ todo }) => {
  const router = useRouter();
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/todo/api/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await response.json();
      console.log(data);
      router.push("/todo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleUpdate}>Edit Post</button>
    </div>
  );
};

export default PostEdit;
