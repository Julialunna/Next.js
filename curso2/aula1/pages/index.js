import Link from "next/link";

function HomePage(){
  return (<div>Welcome to Next.js
    <img src="images/avatar.png" alt="" />
    <ul>
        <li>
      <Link href="/sobre">Ir para /sobre</Link>
        </li>
      </ul>
  </div>)
}
export default HomePage;
