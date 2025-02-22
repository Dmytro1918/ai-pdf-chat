import Link from "next/link"
import MaxWidthWrapper from "../components/maxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { FcNext } from "react-icons/fc";


export default function Pricing () {
    return (
    <MaxWidthWrapper className='mt-12 mb-28 sm:mt-14 flex flex-col justify-center items-center text-center'>
        <h1 className=" mb-16 max-w-4xl  text-5xl font-bold md:text-6xl lg:text-7xl ">
            Choose your subscription and enjoy 30 days for <span className="text-blue-600">FREE!</span>
        </h1>
        <div className=" pt-10 w-full flex flex-row text-center justify-around items-stretch">
            <div className=" pt-10 pb-10 w-full flex-column justify-center items-center text-center max-h-screen border-4 rounded-xl border-gray-500 ">
                <h2 className="text-center font-semibold text-4xl mb-8">
                    Easy
                </h2>
                <p className="text-center font-semibold text-2xl">
                    10$/month
                </p>
                <p className="text-center font- text-sm mt-2 mb-6">
                    120$/year
                </p>
                <Link href='/pricing' className={
                    buttonVariants({
                    variant:"default",
                    size:'xlg'
                    })}>
                    Get 30 days for free
                </Link>
                <div className=" m-10 flex flex-col indent-3 gap-3">
                    <p className="flex items-center justify-start  underline underline-offset-8 fade-in"> 
                        <FcNext/> Up to 30 requests per month
                    </p>
                    <p className="flex items-center justify-start  underline underline-offset-8 fade-in"> 
                        <FcNext/> Up to 10 PDF uploads per month
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> Service may include adds
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> Email support 24 hours
                    </p>
                </div>
            </div>
            <div className="pt-10 pb-10 w-full flex-column justify-center items-center text-center max-h-screen border-4 rounded-xl border-gray-500 ml-5 gap-3">
                <h2 className="text-center font-semibold text-4xl mb-8">
                    Rookie
                </h2>
                <p className="text-center font-semibold text-2xl">
                    19.99$/month
                </p>
                <p className="text-center font- text-sm mt-2 mb-6">
                    240$/year
                </p>
                <Link href='/pricing' className={
                    buttonVariants({
                    variant:"default",
                    size:'xlg'
                    })}>
                    Get 30 days for free
                </Link>
                <div className=" m-10 flex flex-col items-start indent-3 gap-3 ">
                    <p className=" flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> Up to 50 requests per month
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> Up to 20 PDF uploads per month
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> No ads
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> Email and chat support 24 hours
                    </p>
                </div>
            </div>
            <div className="pt-10 pb-10 w-full flex-column justify-center items-center text-center max-h-screen border-4 rounded-xl border-gray-500 ml-5 gap-3">
                <h2 className="text-center font-semibold text-4xl mb-8">
                   Veteran
                </h2>
                <p className="text-center font-semibold text-2xl">
                    29.99$/month
                </p>
                <p className="text-center font- text-sm mt-2 mb-6">
                    360$/year
                </p>
                <Link href='/pricing' className={
                    buttonVariants({
                    variant:"default",
                    size:'xlg'
                    })}>
                    Get 30 days for free
                </Link>
                <div className="my-10 mx-4 flex flex-col items-start indent-3 gap-3">
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> Up to 100 requests per month
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> Unlimited PDF upload
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> No ads
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in" > 
                        <FcNext/> Share PDFs and insights with team members
                    </p>
                    <p className="flex items-center justify-start underline underline-offset-8 fade-in"> 
                        <FcNext/> Email and chat support with a 1-hour response time
                    </p>
                    
                </div>
            </div>
        </div>
    </MaxWidthWrapper>
    )
}