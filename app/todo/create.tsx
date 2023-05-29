"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

interface createProps {
  
}

const Create:createProps=  ({}) => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const submitData = async (e:React.SyntheticEvent) => {
        e.preventDefault();
        let response = await fetch("http://localhost:3000/todo/api", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
        });

        let data = await response.text();
        return data;
        router.refresh();

    }
    console.log(submitData)

  return (
    <div>
      <form onSubmit={submitData}>
        <h1>New Draft</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
          className="text-4xl font-bold mb-8 w-full text-black"
        />
        <textarea
          cols={50}
          rows={8}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          value={content}
          className="text-4xl font-bold mb-8 w-full text-black"
        />
        <button type="submit" onClick={submitData} className="w-20 h-8 bg-red-600 rounded-xl">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create