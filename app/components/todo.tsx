"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PostEdit from "./postEdit";

type Todo = {
  id: number;
  title: string;
  content: string;
};

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const router = useRouter();
  const deleteTodoHandler = async () => {
    try {
      const response = await fetch(`/blog/api/${todo.id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 border rounded-md border-neutral-100">
      <div>
        {/* fetching Title && content*/}
        <h2>
          <p className="text-sm text-neutral-500">{todo.title}</p>
          <p className="text-sm text-neutral-500">{todo.content}</p>
        </h2>
      </div>
      {/* Buttons */}
      <button
        className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
        onClick={() => {
          deleteTodoHandler();
        }}
      >
        Delete
      </button>
      {/* @ts-ignore */}
      <PostEdit todo={todo} />
    </div>
  );
};

export default TodoItem;
