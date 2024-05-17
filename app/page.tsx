import Link from "next/link";

export default function Home() {
  return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-blue-800xl text-blue-800">Łukasz Chęciński</h1>
          <p className="text-5xl">Nr albumu: 119234</p>

          <Link href="/new">PAGE 2</Link>
        </div>
      </div>
  );
}
