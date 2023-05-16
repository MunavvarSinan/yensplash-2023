import NavMenu from '@/components/NavMenu';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const Error = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            {showNav && <NavMenu />}
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-md p-6 md:mx-auto bg-white rounded-lg shadow-lg">
                    <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.926,15.788L15.789,18.927,12,15.152,8.211,18.927,5.074,15.788,8.848,12,5.074,8.212,8.211,5.073,12,8.848,15.789,5.073,18.926,8.212Z"></path>
                    </svg>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-center text-gray-800">Error Occurred</h3>
                        <p className="text-gray-600 my-2">Sorry, an error occurred during the payment process.</p>
                        <p className="text-gray-600">Please try again later.</p>
                        <div className="py-10 text-center">
                            <Link href="/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                GO BACK
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error