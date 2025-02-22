import DottedBackground from "../components/dottedBackground";
import NavBar, { defaultNavBarItems } from "../components/navBar";
import PricingSection from "../components/pricingSection";

  
  
export default function Pricing () {
    return (
        <>
            <NavBar bgColor="bg-slate-50" navBarItems={defaultNavBarItems} ></NavBar>
            <DottedBackground children={<PricingSection></PricingSection>}/>
            
        </>
    )
}