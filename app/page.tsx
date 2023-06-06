import Link from "next/link";

export default function Home() {
  return (
    <main className="font-bold text-3xl text-center">
      <Link href={"./todo"} className="font-bold text-3xl text-center">
        Todo
      </Link>
    </main>
  );
}
