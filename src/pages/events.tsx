import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { events } from '../eventDetails';
import NavMenu from '@/components/NavMenu';

const Events = ({ headerShown }: { headerShown: any }) => {
    // const [showAllEvents, setShowAllEvents] = React.useState(false)
    const router = useRouter();
    const showAllEvents = router.query.allEvents === "true";
    let showNav = router.query.showNav;
    const [isShowNav, setIsShowNav] = useState(showNav === 'true');

    useEffect(() => {
        const handlePopstate = () => {
            setIsShowNav(false);
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);

    // Determine the value of showNav

    // Determine whether to show the NavMenu component
    const shouldShowNavMenu = headerShown && isShowNav;


    const eventToShow = showAllEvents ? events : events.slice(0, 6);
    return (
        <>
            {isShowNav && <NavMenu />}
            <div className='bg-[#151515] pb-10'>
                <div className="   md:px-12 xl:px-6 ">          <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">Events<span className="text-primary text-green-700">.</span></h1>

                    </div>
                </div>
                    <div className="mx-auto  px-2 py-2 lg:px-10 lg:pt-12 ">
                        <div className="container justify-center lg:max-w-[1300px]">
                            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                {eventToShow.map((event) => (
                                    <Link href={{ pathname: `/event/${event.alias}` }}>

                                        <div className='bg-slate-100 p-3 rounded-3xl m-4'>
                                            <div>
                                                <Image className="h-auto max-w-full  rounded-xl" src={event.image} alt="" />
                                            </div>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 pt-3 text-center  ">{event.name}</h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {!showAllEvents && (
                        <Link href={{ pathname: "/events", query: { allEvents: true, showNav: true } }} className="lg:w-2/3 md:text-center  mx-auto flex justify-center">
                            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More Events</button>
                        </Link>
                    )}
                </div>
            </div>
        </>

    )
}

export default Events

