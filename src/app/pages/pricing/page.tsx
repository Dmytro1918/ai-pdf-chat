import DottedBackground from "../../components/dottedBackground";
import NavBar, { defaultNavBarItems } from "../../components/navBar";
import PricingSection from "../../components/pricingSection";
import { Metadata } from "next";

export const metadata :Metadata = {
    title:"Pricing for Guilty PDF chat",
    description:"Full information about subscription"
}
  
export default function Pricing () {
    return (
        <>
            <NavBar bgColor="bg-slate-50" navBarItems={defaultNavBarItems} ></NavBar>
            <DottedBackground children={<PricingSection></PricingSection>}/>
            
        </>
    )
}
