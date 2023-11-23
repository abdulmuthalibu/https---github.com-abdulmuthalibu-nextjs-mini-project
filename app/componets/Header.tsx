import { link } from "fs";
import Link from "next/link";

const links =["3DModel","Desing","About"]
export default function Header(){
    return( 
    <nav className="bg-gray-800 flex justify-between items-center h-20 p-4">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>

<p className="text-yellow-50 ml-4 font- font-semibold text-2xl mr-auto"> 3D Modeling </p> 
  <ul className="flex gap-6 list-none text-gray-200 font-semibold">
    {links.map((link) => (<li key={link}>
        <Link
        href={link.toLocaleLowerCase()}
         className="p-2 hover:bg-slate-600 hover:rounded-md active:bg-purple-600 focus:ring focus:outline-none focus:ring-green-400"
         >
        {link}
        </Link>
        </li>
    ))}
  </ul>
    </nav>
    );
}