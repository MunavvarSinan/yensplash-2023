import React from 'react'
import { sponsor1, sponsor10, sponsor11, sponsor12, sponsor13, sponsor14, sponsor15, sponsor16, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8, sponsor9 } from '../images/sponsors'
import Image from 'next/image'
import NavMenu from '@/components/NavMenu'
import { useRouter } from 'next/router'
const eventSponsors = [
    {
        image: sponsor7
    },
    {
        image: sponsor8
    },
    {
        image: sponsor10
    },
    {
        image: sponsor1
    },

    {
        image: sponsor2
    },
    {
        image: sponsor3
    },
    {
        image: sponsor4
    },
    {
        image: sponsor5
    },
    {
        image: sponsor6
    },

    {
        image: sponsor9
    },

    {
        image: sponsor12
    },
    {
        image: sponsor13
    },
    {
        image: sponsor14
    },
    {
        image: sponsor15
    },
    {
        image: sponsor16
    },

]
const sponsors = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            {showNav && <NavMenu />}
            <div className='bg-[#151515] pb-10'>
                <div className="   md:px-12 xl:px-6 ">          <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white font-bold  text-4xl md:text-6xl xl:text-7xl">Sponsors<span className="text-primary text-green-700">.</span></h1>

                    </div>
                </div>
                </div>
                <div className="mx-auto  px-2 py-2 lg:px-10 lg:pt-12 ">
                    <div className="container justify-center lg:max-w-[1300px]">
                        <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                            {eventSponsors.map((sponsor) => (
                                <div className='bg-slate-100 p-3 justify-center flex rounded-3xl m-4'>
                                    <div>
                                        <Image className="h-auto max-w-full  rounded-xl" src={sponsor.image} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sponsors