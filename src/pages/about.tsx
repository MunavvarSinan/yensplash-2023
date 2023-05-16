import React from 'react'
import { image4, image15, image10 } from '../images/gallery'
import Image from 'next/image'
import yit from '../images/yit.jpg';
import { useRouter } from 'next/router';
import NavMenu from '@/components/NavMenu';


const About = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <div>
            {showNav && <NavMenu />}
            <div className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] text-white">
                <div className="container mx-auto">
                    <div className="   md:px-12 xl:px-6">
                        <div className="relative  ">
                            <div className="lg:w-2/3 md:text-center  mx-auto">
                                <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">About<span className="text-primary text-[#EACD69]"> Us.</span></h1>

                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 mt-10 flex flex-wrap items-center justify-between">

                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                {/* <div className="w-full px-3 sm:px-4 xl:w-1/2"> */}
                                <div className="relative  z-10 my-4 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter ">
                                    <Image
                                        src={yit}
                                        alt=""

                                        className=" h-[350px] rounded-2xl "
                                    />
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">

                                <p className="text-body-color mb-8 text-base">
                                    Yenepoya Institute of Technology was established in 2008 with the monumental objective of promoting academic excellence and competence in students, especially in the fast-growing global domain of Engineering Technology and Management. The Institute made remarkable progress since it's inception in every aspect and gained name among the Institutes of Technology in the state of Karnataka due to the quality of education and training provided by its dedicated faculty and the infrastructure available. This renowned Institute is now owned by the Islamic Academy of Education of Yenepoya Group of Institutions and Yenepoya University An organization well known for Quality Education.                            </p>

                            </div>
                        </div>
                    </div>
                    <div className="   md:px-12 xl:px-6">
                        <div className="relative pt-36 ">
                            <div className="lg:w-2/3 md:text-center  mx-auto">
                                <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">About<span className="text-primary text-[#EACD69]"> Yensplash.</span></h1>

                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 mt-10 flex flex-wrap items-center justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">


                                <p className="text-body-color mb-8 text-base">
                                    Yensplash 2023 is a vibrant, three-day inter-college techno-cultural extravaganza that celebrates the spirit of accomplishment and involvement. With a footfall of over 3000 students from across the state, YenSplash is the ultimate platform to showcase your skills and talents. At YenSplash 2023, we aim to cultivate a sense of community among the youth by providing a wide range of activities that cater to all interests. From showcasing your technological expertise to indulging in literary and cultural events, or even testing your gaming skills, YenSplash 2023 has something for everyone. Come join us at YIT and let the magic of YenSplash inspire you to invent, create and amalgamate your cultural and traditional knowledge with us. So, mark your calendars and be a part of this spectacular celebration where you can unleash your true potential and bring out the best version of yourself!
                                </p>

                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={image15}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={image4}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <Image
                                            src={image10}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About