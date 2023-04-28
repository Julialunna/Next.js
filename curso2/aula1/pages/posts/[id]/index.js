import Link from "next/link";
import { useRouter } from "next/router";

function HomePage(){
  const router = useRouter();
  return (
  <div>
    <h1>O post atual é: {router.query.id}</h1>
    <ul>
        <li>
      <Link href="/">Ir para home</Link>
        </li>
        <li>
      <Link href={`${router.query.id}/comentarios`}>Ir para comentarios</Link>
        </li>
      </ul>
  </div>)
}
export default HomePage;
