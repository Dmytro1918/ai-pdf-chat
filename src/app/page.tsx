import Link from "next/link";
import MaxWidthWrapper from "./components/maxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NavBar, { defaultNavBarItems } from "./components/navBar";
import AnimatedSlide from "./components/welcomeAnimation";


export default function Home () {


  return (
    <>
      <AnimatedSlide></AnimatedSlide>
      <MaxWidthWrapper className='mt-12 mb-28 sm:mt-40 flex flex-col justify-center items-center text-center'>
      <NavBar bgColor="bg-slate-900" navBarItems={defaultNavBarItems}></NavBar>
        <Link href='/description'>
          <div className='mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-600 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/65 cursor-pointer'> 
            <p className='text-md font-semibold text-blue-700'>
              Let's see what the Guilty is about!
            </p>
          </div>
        </Link>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Get in touch with your <span className="text-blue-600">documents</span> in seconds.
        </h1>
        <span className="text-2xl font-thin p-8">
          Guilty is a new way of conversation with PDF. Simply upload the file and ask anything You need, and even more. 
        </span>
        <Link href='/pricing' className={
          buttonVariants({
          variant:"outline",
          size:'xlg'
          })}>
          Start now! <ArrowRight className="ml-2"></ArrowRight>
        </Link>
      </MaxWidthWrapper>
    </>
    
  )
}
