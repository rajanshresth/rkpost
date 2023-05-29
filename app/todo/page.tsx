import prisma from "@/prisma/prisma";
import { Post } from "@prisma/client";
import Create from "./create";

interface pageProps {}
type Item = {
  id: number;
  title: string;
  content: string;
};

const getData = async () => {
  const allPosts: Post[] = await prisma.post.findMany();
  return allPosts;
};

const page: ({}: pageProps) => Promise<JSX.Element> = async ({}) => {
  const data = await getData();
  return (
    <div>
      {/* @ts-ignore */}
      <Create />
      <h1>
        {data.map((item: Item) => (
          <div key={item.id} className="flex flex-rows gap-3">
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default page;
