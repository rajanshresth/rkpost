"use client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface UpdateProps {
  todo: {
    id: string;
    title: string;
    content: string;
  };
}

const PostEdit: FC<UpdateProps> = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  const router = useRouter();

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/blog/api/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await response.json();
      router.refresh();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-sm font-bold mb-8 w-full text-black"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="text-sm font-bold mb-8 w-full text-black"
      ></textarea>
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
};

export default PostEdit;
