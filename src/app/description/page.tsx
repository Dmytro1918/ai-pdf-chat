import MaxWidthWrapper from "../components/maxWidthWrapper";
import { Metadata,  } from "next";
import Image from "next/image";


export const metadata :Metadata = {
    title:"Idea behind",
    description:"Full information about how it started"
}
export default function Description () {
    return (
        <div className=" min-h-screen bg-slate-950">
            <MaxWidthWrapper className='mb-28 pt-10 flex flex-col justify-center items-center text-center text-pink-50 h-full' >
                <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-5xl">
                    The idea which lie behind the app. 
                </h1>
                <div className="flex flex-row justify-start h-fit items-center w-full">
                    <div className='mt-20  flex flex-col justify-start text-left w-1/2'>
                        <p>
                        One day, while working on a project that involved reading through numerous lengthy PDF documents, I found myself overwhelmed. The documents were dense with information, and I struggled to keep track of all the details. I wished there was a way to quickly find the information I needed without having to read through every single page.
                        As I sat at his desk, sipping my coffee and staring at the stack of PDFs, an idea began to take shape in my mind. What if I could create a chatbot that could read and understand PDF documents just like a human? A chatbot that could answer questions about the content and even provide clues about where to find specific information.
                        Inspired, I started researching natural language processing and machine learning. I faced many challenges along the way, but his passion and determination kept me going.
                        </p>
                    </div>
                    <div className='mt-20 flex flex-col justify-center items-center   w-1/2'>
                        <Image
                            width={500}
                            height={500}
                            src={'/male-programmer.webp'}
                            alt="Programmer icon">
                        </Image>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
        )
}
