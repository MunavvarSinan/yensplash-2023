import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import NavMenu from './NavMenu';
import Footer from './Footer';



const Container = (props: any) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [userPaid, setUserPaid] = React.useState(false)

    useEffect(() => {
        const handleStart = (url: any) => url !== router.asPath && setLoading(true);
        const handleComplete = (url: any) =>
            url === router.asPath &&
            setTimeout(() => {
                setLoading(false);
            }, 5000);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });
    const { children } = props;

    return (
        <div
            className="  overflow-hidden" // This conditional will hide the overflow on the main page with the circles. If overflow is active on blog pages, sticky sidebar doesn't work
        >
            <NavMenu />
            {/* <SeoHead props={props} /> */}
            <main
                className={``}
            >
                {props.showCircles && (
                    <div className='absolute top-0 left-0 right-0'>
                        <div className='absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-16'>
                            <div className='mix-blend-multiply absolute w-[700px] h-[900px] rounded-[40rem] circle-obj'></div>
                        </div>

                        <div className='absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52'>
                            <div className='mix-blend-multiply absolute w-[600px] h-[600px] rounded-[40rem] circle-obj2'></div>
                        </div>
                    </div>
                )}
                <div className='z-10'>
                    {loading ? <LoadingSpinner /> : children}
                </div>
            </main>
            <Footer />

        </div >
    );
};

export default Container;
