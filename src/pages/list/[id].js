import useRouter from "next/router";
import Seo from "@/components/Seo"

export default function Detail(){ 
  const router=useRouter();
  return (
    <div>
      <Seo title="Detail"/>
      <h1>hi</h1> 
    </div>
  )
}