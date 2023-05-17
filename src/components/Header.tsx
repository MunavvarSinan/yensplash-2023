import Image from 'next/image';
import logo from '../images/logo.png'
import logo_compressed from '../images/logo_compressed.png'
import logoText from '../images/logo_text.png';

const Header = () => {
    return (
        <>
            <header>
                <div className="relative inset-x-0 overflow-hidden">

                    <video autoPlay muted loop
                        className='absolute inset-0 w-full h-full object-cover'
                        style={{ position: 'fixed', width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1, opacity: .3 }}>
                        <source src="/backround_video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-screen-md md:mt-0 sm:mt-10">
                        <div className="relative h-0 pb-[100%] mt-[100px] md:-mt-10 ">
                            <Image src={logo_compressed} alt="logo" className="absolute inset-0 w-full h-full object-contain" />
                        </div>
                        <div className="relative h-0">
                            <Image src={logoText} alt="logo text" className="mx-auto w-full h-auto object-contain -mt-[100px] sm:-mt-[10px] md:-mt-[250px] lg:-mt-[300px]" />
                        </div>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Header;
