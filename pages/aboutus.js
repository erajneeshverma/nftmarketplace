import React from 'react'
import Image from 'next/legacy/image';


//internal import
import Style from '../styles/aboutus.module.css';
import { Brand } from '@/components/componentindex';
import images from '../img';


const aboutus = () => {
    const founderArr=[
        {
            name: "Rajnish Verma",
            position: "Co-founder and cheif Excecutive",
            image: images.user1
        },
        {
            name: "Sweta Verma",
            position: "Co-founder and Chairman",
            image: images.user2
        },
        {
            name: "Shivam Singh",
            position: "Co-founder and cheif Technical Officer",
            image: images.user3
        },
        {
            name: "Dr. S. Nickolas",
            position: "Co-founder and cheif Strategy officer",
            image: images.user4
        },
    ]

    const factsArr=[
        {
            title: "10 Millions",
            info: "Articles have been public around the worlds.",
        },
        {
            title: "100000",
            info: "Registered user accounts",
        },
        {
            title: "220+",
            info: "Country and presence",
        }
    ]
  return (
    <div className={Style.aboutus}>
        <div className={Style.aboutus_box}>
            
            <div className={Style.aboutus_box_hero}>
                <div className={Style.aboutus_box_hero_left}>
                    <h1>🤷‍♂️ About Us</h1>
                    <p>
                        We're impartial and independent, and every day we create distinctive, world class programmes and contest which inform, educate and entertain milloins of people around the world. 
                    </p>
                </div>
                <div className={Style.aboutus_box_hero_right}>
                    <Image 
                        src={images.hero2}
                    />
                </div>
            </div>
            
            <div className={Style.aboutus_box_title}>
                <h2>🌟 Founder</h2>
                <p>
                    we're impartial and independent, and every day we create distinctive and worlds class programme and content.
                </p>
            </div>

            <div className={Style.aboutus_box_founder}>
                <div className={Style.aboutus_box_founder_box}>
                    {
                        founderArr.map((el,i)=>(
                            <div className={Style.aboutus_box_founder_box_img}>
                                <Image 
                                    src={el.image}
                                    alt={el.name}
                                    width={500}
                                    height={500}
                                    className={Style.aboutus_box_founder_box_img_img}
                                />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))
                    }
                </div>    
            </div>

            <div className={Style.aboutus_box_title}>
                <h2>📜 Fast Facts</h2>
                <p>
                    we're impartial and independent, and every day we create distinctive and worlds class programme and content.
                </p>
            </div>


            <div className={Style.aboutus_box_facts}>
                <div className={Style.aboutus_box_facts_box}>
                    {
                        factsArr.map((el,i)=>(
                            <div key={i+1} className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))
                    }
                </div>              
            </div>

        </div>
        <Brand />
    </div>
  )
}

export default aboutus;