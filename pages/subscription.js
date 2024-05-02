import react from "react";

//internal import
import Style from '../styles/subscription.module.css';
import Subscription from "@/Subscription/Subscription";


const subscription = () =>{
    const subscriptionArr=[
        {
            plan:"Starter",
            price: "$5/mo",
            popular: "",
            service: ["Automated reporting", "Faster processing", "Customization"],
            info: "Literally, you probabaly havenot heard of them jean shorts",
        },
        {
            plan:"Baisc",
            price: "$15/mo",
            popular: "POPULAR",
            service: ["Everything in starter", "100 Builds", "Progress Report", "Premium Support"],
            info: "Literally, you probabaly havenot heard of them jean shorts",
        },
        {
            plan:"Plus",
            price: "$25/mo",
            popular: "",
            service: ["Everything in Basic", "Unlimited Builds", "Advance Analytics", "Company Evaluation"],
            info: "Literally, you probabaly havenot heard of them jean shorts",
        },
    ]
    return (
        <div>
            subscription
        </div>
    )
}

export default subscription;