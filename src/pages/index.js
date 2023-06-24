import { useState, useEffect } from "react";
import Link from "next/link";
import Seo from "@/components/Seo";

export default function Home() {
  const BASE_URL = "https://books-api.nomadcoders.workers.dev";
  const [book, setBook] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`${BASE_URL}/lists`)).json();
      setBook(results);
    })();
  }, []);

  return (
    <div className="main">
      <Seo title="Home" />
      <div className="categories">
        {book.map((book) => (
          <div className="category" key={book.list_name_encoded}>
              <Link href={`/list/${book.list_name_encoded}`}>
                <h5>{book.list_name}&rarr;</h5>
              </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .categories {
          display: flex;
          flex-wrap: wrap;
          max-width: 70%;
          justify-content: center;
          background-color: ivory;
          border: 3px solid gray;
          border-radius: 10px;
          box-shadow: 20px 0 20px -20px rgba(0, 0, 0, 0.5),
            -20px 0 20px -20px rgba(0, 0, 0, 0.5);
          z-index: 1;
          padding: 0 100px;
        }
        .category {
          border: 3px solid gray;
          border-radius: 10px;
          margin:10px;
          padding: 10px;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}
