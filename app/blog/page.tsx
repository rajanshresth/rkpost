import TodoItem from "../components/todo";
import { prisma } from "@/prisma";
import Create from "../components/create";

type Item = {
  id: number;
  title: string;
  content: string;
  task: string;
};

const page: () => Promise<JSX.Element> = async () => {
  const todo = await prisma.post.findMany();

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
