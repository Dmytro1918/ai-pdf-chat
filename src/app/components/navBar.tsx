import { buttonVariants } from "@/components/ui/button"
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
    return (
        <>
            <nav id='nav-bar'className={`fixed border-b-4 border-blue-800 top-0 w-full z-40 ${bgColor}`}>
                <div className="flex items-center justify-center h-20 mx-auto max-w-7xl px-6">

                    <ul className="flex flex-row justify-between gap-32 items-center text-blue-700 text-2xl font-bold">
                        {navBarItems.map((item, index)=> (
                            <li key={index} className="hover:text-blue-500 hover:underline-offset-4 transition-all duration-700 transform hover:scale-150 origin-left">
                                <Link href={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                        <Link href='/' className={
                            buttonVariants({
                            variant:"blue",
                            size:'lg'
                            })}>
                            Sign up 
                            <IoIosExpand/>
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;