import React from 'react'
import {  mehfooz, munavvar, thanay, profile,mash } from '../images/team'
import Image from 'next/image'
import { twitter, linkedin, github } from '../images/icons';
import NavMenu from '@/components/NavMenu';
import { useRouter } from 'next/router';


const teamDetails = [
    {
        name: 'Munavvar Sinan k p',
        image: munavvar,
        year: "3'rd year CSE",
        linkedin: 'https://www.linkedin.com/in/munavvarsinan/',
        github: 'https://github.com/MunavvarSinan',
        twitter: 'https://twitter.com/SinanMunavvar',
        instagram: 'https://www.instagram.com/__.munavvar.__/',

    },
    {
        name: 'Thanay',
        image: thanay,
        year: "4'th year CSE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Vithesh',
        image: mash,
        year: "4'th year CSE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Mehfooz',
        image: mehfooz,
        year: "4'th year CSE",

        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Vikas',
        image: profile,
        year: "4'th year CSE",

        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Vishal',
        image: profile,
        year: "4'th year CSE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://www.instagram.com/',

    },

]
const Ourteam = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            {showNav && (
                <NavMenu />
            )}
            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">OUR <span className="text-primary text-[#EACD69]">TEAM.</span></h1>

                    </div>
                </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {teamDetails.map((item) => (
                            <div className="w-[300px] px-6 py-6  text-center bg-slate-200 rounded-lg lg:mt-0 xl:px-10">
                                <div className="space-y-4 xl:space-y-6 ">
                                    <Image className="mx-auto rounded-full h-36 w-36" src={item.image} alt="author avatar" />
                                    <div className="space-y-2">
                                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                                            <h1 className="text-black font-bold">{item.name}</h1>
                                            <p className='text-black'>{item.year}</p>
                                            <div className="flex justify-center mt-5 space-x-5">
                                                <a href={item.twitter} target="_blank" rel="noopener noreferrer" className="inline-block text-white">
                                                    <span className="sr-only">Twitter</span>
                                                    <Image src={twitter} alt="twitter" />
                                                </a>
                                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400">
                                                    <span className="sr-only">GitHub</span>
                                                    <Image src={github} alt="github" />
                                                </a>
                                                <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <Image src={linkedin} alt="linkedin" width="20" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}

export default Ourteam