import Image from "next/image"

interface CardsData {
    title: string,
    description: string,
    imageSrc: string,
    imageAlt: string,
    width?: number,
    height?: number,
}


export const Cards = ({ cardsList }:{ cardsList:CardsData[] }) => {

    return (
        <>
                <div className=" grid grid-cols-2 gap-6 w-11/12 mt-20 mb-20 ">
                    {cardsList.map((item,index) => (
                        <div className="border-2 border-solid border-blue-300 rounded-xl p-6 flex flex-col items-start h-full" key={index}>
                            <h3>
                                {item.title}
                            </h3>
                            <p>
                                {item.description}
                            </p>
                            <div className="w-full flex justify-center mt-8"> 
                                <Image 
                                    src={item.imageSrc} 
                                    alt={item.imageAlt} 
                                    width={item.width} 
                                    height={item.height}
                                    quality={100}
                                    className="object-cover rounded-xl shadow-cards"
                                    style={{ height: `${item.height}px`, width: `${item.width}px`}}>
                                </Image>
                            </div>
                        </div>
                    ))}
                </div>
      
        </>
    )
}