import Seo from "@/components/Seo";
import { useRouter } from "next/router";


export default function Detail({ detail }) {
  const router=useRouter();
  const handleClick=(bookName)=>{
    router.push(`/list/${bookName}`);
  }
  return (
    <div className="detail-list">
      <Seo title="Detail" />

      {detail.length > 0 ? (
        <div className="books-container">
          {detail.map((book) => (
            <div onClick={() => handleClick(book.list_name_encoded)} key={book.primary_isbn13} className="book-item">
              <img src={book.book_image}/>
              <h3>{book.author}</h3>
              <p>Rank: {book.rank}</p>
              <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">
                Buy on Amazon
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div>No books found.</div>
      )}

      <style jsx>{`
        .books-container {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(4, 1fr);
        }
        .book-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .book-item img {
          width: 100%;
          max-width: 200px;
          height: auto;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const BASE_URL="https://books-api.nomadcoders.workers.dev";
  const {id}=context.params;
    const response = await fetch(`${BASE_URL}/list?name=${id}`);
    const data = await response.json();
    const books = data.results.books || []; 

    return {
      props: {
        detail: books,
      },
    };
}
