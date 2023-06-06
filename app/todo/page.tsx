import { Post } from "@prisma/client";
import Create from "../components/create";
import { prisma } from "@/prisma";
import TodoItem from "../components/todo";

interface pageProps {
  data: Post[];
}
type Item = {
  id: number;
  title: string;
  content: string;
  task: string;
};

const page: ({}: pageProps) => Promise<JSX.Element> = async () => {
  const getData = async () => {
    const allPosts: Post[] = await prisma.post.findMany();
    return allPosts;
  };
  const todo = await getData();
  return (
    <div>
      {/* @ts-ignore */}
      <Create />
      {/* @ts-ignore */}
      {todo.map((todo: Item) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default page;
