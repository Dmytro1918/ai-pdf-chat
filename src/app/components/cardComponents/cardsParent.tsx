import { Card } from "./cardChildren"
import { CardsData } from "./interfaces"



export const Cards = ({ cardsList }:{ cardsList:CardsData[] }) => {

    return (
        <>
            <div className=" grid grid-cols-3 gap-12 max-w-max mt-20 mb-20 g-6/12">
                {cardsList.map((item,index) => (
                    <Card 
                        key={index} 
                        {...item}
                    />
                ))}
            </div>
        </>
    )
}
