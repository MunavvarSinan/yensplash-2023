import React from 'react';

import Header from '@/components/Header';
import Image from 'next/image';

import Container from '@/components/Layout';
import Gallery from './gallery';
import Pronities from './pronities';
import airbnb from '../images/airbnb.svg';
import Events from './events';


export default function PreviewPage() {

  return (

    <>
      <Container>
        <Header />

        <section className='mt-20 -pt-[100px]'>
          <div className="shadow"></div>
          <div className="relative" id="home">

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="relative pt-36 ml-auto">
                <div className="lg:w-2/3 text-center mx-auto">
                  <h1 className="text-white dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">YENSPLASH<span className="text-primary text-[#EACD69]"> 2023.</span></h1>
                  <h4 className="mt-8 text-white dark:text-gray-300">
                    Yensplash 2023 is a vibrant, three-day inter-college techno-cultural extravaganza that celebrates the spirit of accomplishment and involvement. With a footfall of over 3000 students from across the state, YenSplash is the ultimate platform to showcase your skills and talents. At YenSplash 2023, we aim to cultivate a sense of community among the youth by providing a wide range of activities that cater to all interests. From showcasing your technological expertise to indulging in literary and cultural events, or even testing your gaming skills, YenSplash 2023 has something for everyone. Come join us at YIT and let the magic of YenSplash inspire you to invent, create and amalgamate your cultural and traditional knowledge with us. So, mark your calendars and be a part of this spectacular celebration where you can unleash your true potential and bring out the best version of yourself!
                  </h4>
                  <div className='flex justify-between mt-10'>
                    <div className="flex  space-x-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span className="text-white">19-21 May</span>
                    </div>
                    <div className="flex  space-x-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                        <circle cx="12" cy="11" r="4"></circle>
                      </svg>
                      <span className="text-white">Yenepoya Institute Of Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Gallery />
          <Pronities />
          <Events />
        </div>
      </Container >
    </>

  );
}