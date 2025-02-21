import Link from "next/link"
import MaxWidthWrapper from "../components/maxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"


export default function Pricing () {
    return (
    <MaxWidthWrapper className='mt-12 mb-28 sm:mt-14 flex flex-col justify-center items-center text-center'>
        <h1 className=" mb-16 max-w-4xl  text-5xl font-bold md:text-6xl lg:text-7xl ">
            Choose your subscription and enjoy 30 days for FREE!
        </h1>
        <div className=" pt-10 w-full flex flex-row items-center text-center justify-around ">
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
            </div>
            <div className="pt-10 pb-10 w-full flex-column justify-center items-center text-center max-h-screen border-4 rounded-xl border-gray-500 ml-5">
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
            </div>
            <div className="pt-10 pb-10 w-full flex-column justify-center items-center text-center max-h-screen border-4 rounded-xl border-gray-500 ml-5">
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
            </div>
        </div>
    </MaxWidthWrapper>
    )
}