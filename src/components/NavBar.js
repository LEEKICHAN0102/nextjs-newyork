import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
  const router=useRouter();
  return (
    <nav>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/about">
        <h1>About</h1>
      </Link>
      <style jsx global>{`
        nav{
          border:solid 1px black;
          border-radius:10px;
          background-color:ivory;
          display:flex;
          justify-content:space-between;
          padding:15px;
          margin-bottom:1px;
          position: sticky;
          top: -1;
          z-index:1;
          text-decoration:underline;
        }
      `}</style>
    </nav>
  )
}