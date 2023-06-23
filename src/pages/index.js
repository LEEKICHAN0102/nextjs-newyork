import {useState,useEffect} from "react";
import Link from "next/link";
import Seo from "@/components/Seo"

export default function Home(){
  const [book,setBook]=useState([]);
  useEffect(()=>{
    (async()=>{
      const {results}=await (
        (await fetch(`/api/all-books`)).json());
        setBook(results);
    })();
  },[]);
  return (
      <div className="main">
        <Seo title="Home"/>
        {book.map((book)=>(
          <div className="category" key={book.list_name_encoded}>
            <Link href="/list">
              <h4>{book.list_name}</h4>
            </Link>
          </div>
        ))}
        <style jsx>{`
          .main{
            background-color:ivory;
          }
          .category{
            border:1px solid gray;

          }
        `}</style>
      </div>
    )
}