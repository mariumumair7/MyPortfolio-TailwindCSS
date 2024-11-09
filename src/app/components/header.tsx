
import Link from "next/link"


export default function header(){
return(
<header className="bg-gray-900 text-white py-4">
<nav className="container mx-auto flex justify-between items-center">
  <h1 className="text-2xl font-bold">Marium Umair</h1>
  <ul className="flex space-x-6">
    <li>
      <Link href="#about">About</Link>
    </li>
    <li>
      <Link href="#skills">Skills</Link>
    </li>
    <li>
      <Link href="#contact">Contact</Link>
    </li>
  </ul>
</nav>
</header>
)
}
