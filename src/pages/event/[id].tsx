import { useRouter } from 'next/router';
import React from 'react'
import { events } from '../../eventDetails';
import Image from 'next/image';
import NavMenu from '@/components/NavMenu';


const EventDetails = () => {
    const router = useRouter();

    const { id } = router.query;

    const event = events.find((event) => event.alias === id);

    if (!event) {
        return <div>Event not found</div>
    }

    return (
        <>
            <NavMenu />
            <div className=' text-white p-10'>
                <article className='col-span-9 mt-12 justify-center flex'>
                    <div className=''>
                        <div>
                            <h1 className="text-white font-bold text-4xl md:text-5xl xl:text-6xl">{event.name}<span className="text-primary text-[#EACD69]">.</span></h1>

                            <div className='text-center'>
                                <div className='flex items-center justify-center mb-2 space-x-2 text-lg'>
                                    <p className='m-0 text-lg md:text-xl'>{event.alias}</p>
                                    <p className='m-0'>•</p>
                                    {/* <PageViews slug={slug} /> */}
                                </div>
                                {/* {publishedOn !== modifiedDate && (
                  <p className='mt-0 text-sm text-slate-500 md:text-base dark:text-slate-500'>
                    (Updated on {modifiedDate})
                  </p>
                )} */}
                            </div>
                        </div>
                        <div className='my-12'>
                            <Image
                                className='rounded-xl object-fit'
                                src={event.image}
                                width={500}
                                height={584}
                                alt={'article cover'}
                                priority
                            />
                            <div className="mt-6 flex justify-between ">
                                <p className="flex items-center  text-gray-500">
                                    <svg style={{ color: 'white', marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-calendar-day" viewBox="0 0 16 16"> <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" fill="white"></path> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" fill="white"></path> </svg>
                                    {event.schedule.day}
                                </p>
                                <p className="flex items-center text-gray-500">
                                    <svg style={{ color: 'white', marginRight: 10 }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" fill="white"></path> </svg>
                                    {event.schedule.time}
                                </p>
                                <p className="flex items-center text-gray-500">
                                    <svg style={{ color: 'white', marginRight: 10 }} width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"></path></svg>
                                    {event.schedule.venue}
                                </p>
                            </div>
                        </div>



                    </div>

                </article >
                <div className="mt-6 lg:p-10 ">
                    <div className="space-y-4">
                        <div className="md:p-10 ">
                            <h4 className='text-3xl  font-bold font-headings md:text-5xl'>
                                About Event.
                            </h4>                        <p className='md:p-5 text-justify mt-4'>{event.aboutEvent}</p>
                        </div>
                        <div className="md:p-10">
                            <h4 className='text-3xl font-bold  font-headings md:text-5xl'>
                                Event Details.
                            </h4>                          <ul className="list-disc pl-4 mt-4">
                                {event.eventDetail.map((item, index) => (
                                    <li className='lg:p-2 text-justify lg:ml-10 ' key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:p-10">
                            <h4 className='text-3xl font-bold  font-headings md:text-5xl'>
                                Rules and Regulations</h4>
                            <ul className="list-disc lg:pl-4 mt-5 ">
                                {event.rules.map((item, index) => (
                                    <li className='lg:p-2 text-justify lg:ml-10' key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:p-10">
                            <h4 className='text-3xl font-bold  font-headings md:text-5xl'>
                                Judging Criteria</h4>
                            <ul className="list-disc pl-4 mt-5">
                                {event.judgingCriteria.map((item, index) => (
                                    <li className='lg:p-2 text-justify lg:ml-10' key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:p-10">
                            <h4 className='text-3xl font-bold  font-headings md:text-5xl'>
                                Student Coordinators</h4>
                            <div className="space-y-2 mt-5">
                                {event.coordinators.students.map((item, index) => (
                                    <p className='lg:p-2 lg:ml-10 text-justify ' key={index}>
                                        {item.name} (<a href={`tel:${item.phone}`}>{item.phone}</a>)
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="md:p-10">
                            <h4 className='text-3xl font-bold  font-headings md:text-5xl'>
                                Faculty Coordinators</h4>
                            <div className="space-y-2 mt-5 ">
                                {event.coordinators.faculty.map((item, index) => (
                                    <p className='lg:p-2 text-justify lg:ml-10 ' key={index}>Prof. {item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default EventDetails