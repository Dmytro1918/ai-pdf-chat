'use client'
import { buttonVariants } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { IoIosExpand } from "react-icons/io";


interface NavBarProps {
    navBarItems:{title:string, url:string} [],
    bgColor:string,
}

export const defaultNavBarItems = [
    {
        title:'Home',
        url:'/'
    },
    {
        title:'About us',
        url:'description'
    },
    {
        title:'Subscribe',
        url:'/pricing'
    },
    {
        title:'Contact us',
        url:'/'
    },
]

const NavBar:React.FC<NavBarProps> = ({navBarItems=defaultNavBarItems, bgColor}) => {
    const session = useSession()
    return (
        <>
            <nav id='nav-bar'className={`fixed border-b-4 border-blue-800 top-0 w-full z-40 ${bgColor}`}>
                <div className="flex items-center justify-center h-20 mx-auto max-w-7xl px-6">

                    <ul className="flex flex-row justify-between gap-32 items-center text-blue-700 text-2xl font-bold">
                        {navBarItems.map((item, index)=> (
                            <li key={index} className="hover:text-blue-50 transition-colors duration-300 ease-in ">
                                <Link href={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                        {session?.data ?  <Link href='/' className={
                            buttonVariants({
                            variant:"blue",
                            size:'lg'
                            })}
                            onClick={()=> signOut({
                                callbackUrl:'/'
                            })}>
                            Sign out 
                            <IoIosExpand/>
                        </Link>:
                        
                        <Link href='/api/auth/signin' className={
                            buttonVariants({
                            variant:"blue",
                            size:'lg'
                            })}>
                            Sign in 
                            <IoIosExpand/>
                        </Link>}
                       
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
