import React from 'react'
import { image1, image2, image10, image11, image12, image13, image14, image15, image3, image4, image5, image6, image7, image8, image9 } from '../images/gallery'
import Image from 'next/image'
import Container from '@/components/Layout'
const images = [
    {
        id: 1,
        image: image1,
        className: ''
    },
    {
        id: 2,
        image: image2,
        className: ''
    },
    {
        id: 3,
        image: image4,
        className: 'tall'
    },
    {
        id: 4,
        image: image3,
        className: 'wide'
    },
    {
        id: 2,
        image: image5,
        className: ''
    },
    {
        id: 2,
        image: image6,
        className: 'tall'
    },
    {
        id: 2,
        image: image8,
        className: 'big'
    },
    {
        id: 2,
        image: image9,
        className: ''
    },
    {
        id: 2,
        image: image12,
        className: 'wide',
    },
    {
        id: 2,
        image: image15,
        className: 'big'
    },
    {
        id: 2,
        image: image14,
        className: 'tall'
    },
    {
        id: 2,
        image: image7,
        className: ''
    },
    {
        id: 2,
        image: image2,
        className: ''
    },
    {
        id: 2,
        image: image2,
        className: ''
    },
    {
        id: 2,
        image: image2,
        className: ''
    },
    {
        id: 2,
        image: image2,
        className: 'wide'
    },
    {
        id: 2,
        image: image2,
        className: ''
    },
    {
        id: 2,
        image: image2,
        className: ''
    },
]

const Gallery = () => {
    return (
        <>
            <section className=' p-20'>
                <div className="   md:px-12 xl:px-6">          <div className="relative pt-36 ">
                    <div className="lg:w-2/3 md:text-center  mx-auto">
                        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">GLIMPSES OF <span className="text-primary text-[#EACD69]">YENSPLASH 2022.</span></h1>

                    </div>
                </div>
                </div>
                <div className="grid-wrapper  mt-10" >
                    {images.map((item) => (
                        <div className={item.className}>
                            <Image src={item.image} alt="" />
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Gallery