import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import MaxWidthWrapper from "./components/maxWidthWrapper";
import Image from "next/image";


export default function NotFound () {
    return (
        <MaxWidthWrapper className='mt-20 mb-20 sm:mt-36 flex flex-row justify-center items-center text-center'>
            <Image
                className="transform rotate-180"
                src={'/thinking.png'}
                alt={'man thinking'}
                width={300}
                height={300}
                quality={100}
                >
            </Image>
            <div className=" m-10 flex flex-col items-center">
                <h2 className='mb-6 sm:mt-10 font-mono text-4xl '>
                    Page Not Found
                </h2>
                <p className='mb-10 sm:mt-10 font-normal text-3xl'>
                    The requsted URL was not found.
                </p>
                <Link href='/'
                    className={buttonVariants({
                        variant: "default",
                        size: 'xlg'
                    })}>
                        Return to Home page
                </Link>
                <Image 
                className="mt-20"
                src={'/404.png'} 
                alt={'Error 404'}
                width={200}
                height={200}
                quality={100}>   
                </Image>
            </div>
            <Image
                src={'/thinking.png'}
                alt={'man thinking'}
                width={300}
                height={300}
                quality={100}>
            </Image>
        </MaxWidthWrapper>  
    )
}