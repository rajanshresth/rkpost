import Link from "next/link";

export default function Home() {
  return (
    <main className="font-bold text-3xl text-center">
      <h1 className="text-5xl">Welcome to the Blog App</h1>
      <Link href="/blog">Go to Blog-Post</Link>
    </main>
  );
}
