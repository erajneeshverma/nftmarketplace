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
<<<<<<< HEAD
        <div className={Style.subscription}>
            <div className={Style.subscription_box}>
                <div className={Style.subscription_box_info}>
                    <h1>Subscription</h1>
                    <p>Pricing to fit the need of any company size.</p>
                </div> 
                <div className={Style.subscription_box_box}>
                    {subscriptionArr.map((el,i)=>(
                        <Subscription key={i+1} i={i} el = {el} />
                    ))}
                </div>    
            </div>
=======
        <div>
            subscription
>>>>>>> 5915e8746c87ac40f281ab5fbba3d4e9e8b95066
        </div>
    )
}

export default subscription;