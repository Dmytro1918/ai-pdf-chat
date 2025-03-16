import Image from "next/image"
import { CardsData } from "./interfaces"



export const Card = (props:CardsData) => {

    return (
        <>
            <div className="border-2 border-solid border-blue-300 rounded-xl p-6 flex flex-col items-start h-full transition-transform duration-300 ease-in-out hover:scale-110">
                                <h3 className="text-2xl font-thin p-2 self-center">
                                    {props.title}
                                </h3>
                                <p className="text-xl font-thin p-2">
                                    {props.description}
                                </p>
                                <div className="w-full flex justify-center mt-8 "> 
                                    <Image 
                                        src={props.imageSrc} 
                                        alt={props.imageAlt} 
                                        width={props.width} 
                                        height={props.height}
                                        quality={100}
                                        className="object-cover rounded-xl shadow-cards"
                                        style={{ height: `${props.height}px`, width: `${props.width}px`}}>
                                    </Image>
                                </div>
                            </div>
        </>
    )
}