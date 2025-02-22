import Link from "next/link";
import { FcNext } from "react-icons/fc";
import { buttonVariants } from "@/components/ui/button"
import MaxWidthWrapper from "./maxWidthWrapper";

interface SubscriptionCardProps {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
}
interface SubscriptionData {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, monthlyPrice, yearlyPrice, features }) => {
  return (
    <div className="pt-10 pb-10 w-full flex-column justify-center items-center text-center max-h-screen border-4 rounded-xl border-gray-500 ml-5 gap-3 text-white">
      <h2 className="text-center font-semibold text-4xl mb-8">{title}</h2>
      <p className="text-center font-semibold text-2xl">{monthlyPrice}</p>
      <p className="text-center text-sm mt-2 mb-6">{yearlyPrice}</p>
      <Link href="/pricing" className={buttonVariants({ variant: "blue", size: "xlg" })}>
        Get 30 days for free
      </Link>
      <div className="m-10 flex flex-col items-start indent-3 gap-3 text-white">
        {features.map((feature, index) => (
          <p key={index} className="flex items-center justify-start underline underline-offset-8 fade-in">
            <FcNext /> {feature}
          </p>
        ))}
      </div>
    </div>
  );
};


const PricingSection: React.FC = () => {
  const subscriptionData: SubscriptionData[] = [
    {
      title: "Easy",
      monthlyPrice: "$10/month",
      yearlyPrice: "$120/year",
      features: [
        "Up to 30 requests per month",
        "Up to 10 PDF uploads per month",
        "Service may include ads",
        "Email support 24 hours",
      ],
    },
    {
      title: "Rookie",
      monthlyPrice: "$19.99/month",
      yearlyPrice: "$240/year",
      features: [
        "Up to 50 requests per month",
        "Up to 20 PDF uploads per month",
        "No ads",
        "Email and chat support 24 hours",
      ],
    },
    {
      title: "Veteran",
      monthlyPrice: "$29.99/month",
      yearlyPrice: "$360/year",
      features: [
        "Up to 100 requests per month",
        "Unlimited PDF upload",
        "No ads",
        "Share PDFs and insights with team members",
        "Email and chat support with a 1-hour response time",
      ],
    },
  ];

  return (
    <MaxWidthWrapper className="mt-12 mb-28 sm:mt-14 flex flex-col justify-center items-center text-center">
      <h1 className="mb-16 max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-white">
        Choose your subscription and enjoy 30 days for <span className="text-blue-600">FREE!</span>
      </h1>
      <div className="pt-10 w-full flex flex-row text-center justify-around items-stretch">
        {subscriptionData.map((data, index) => (
          <SubscriptionCard
            key={index}
            title={data.title}
            monthlyPrice={data.monthlyPrice}
            yearlyPrice={data.yearlyPrice}
            features={data.features}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default PricingSection;