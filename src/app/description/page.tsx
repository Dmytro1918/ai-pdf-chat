import MaxWidthWrapper from "../components/maxWidthWrapper";

export default function Description () {
    return (
        <MaxWidthWrapper className='mt-12 mb-28 sm:mt-40 flex flex-col justify-center items-center text-center' >
            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-5xl">
                The idea which lie behind the app. 
            </h1>
            <div>
                <p className='mt-3 sm:mt-40 flex flex-col justify-start items-left text-left'>
                One day, while working on a project that involved reading through numerous lengthy PDF documents, I found myself overwhelmed. The documents were dense with information, and I struggled to keep track of all the details. I wished there was a way to quickly find the information I needed without having to read through every single page.
                As I sat at his desk, sipping my coffee and staring at the stack of PDFs, an idea began to take shape in my mind. What if I could create a chatbot that could read and understand PDF documents just like a human? A chatbot that could answer questions about the content and even provide clues about where to find specific information.
                Inspired, I started researching natural language processing and machine learning. I faced many challenges along the way, but his passion and determination kept me going.
                </p>
            </div>
        </MaxWidthWrapper>
        )
}