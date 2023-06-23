import {useState,useEffect} from "react";
import Link from "next/link";
import Seo from "@/components/Seo"

export default function Home(){
  const BASE_URL="https://books-api.nomadcoders.workers.dev";
  const [book,setBook]=useState([]);
  useEffect(()=>{
    (async()=>{
      const {results}=await (
        (await fetch(`${BASE_URL}/lists`)).json());
        setBook(results);
    })();
  },[]);
  return (
      <div className="main">
        <Seo title="Home"/>
        {book.map((book)=>(
          <div className="category" key={book.list_name_encoded}>
            <Link href={`/list/${book.list_name_encoded}`}>
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