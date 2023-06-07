import { FC } from "react";
import BlogPage from "./blog/page";
import { Todo } from "./components/todo";

interface pageProps {
  todo: Todo;
}

const Home: FC<pageProps> = ({ todo }) => {
  return (
    <div>
      <h1>Home</h1>
      {/* @ts-ignore */}
      <BlogPage todo={todo} />
    </div>
  );
};

export default Home;
