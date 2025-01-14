import Image from 'next/image'
import Typewriters from './components/typewriter' 
import SocialLinks from './components/socialsbuttons'

export default function Home() {
    return (
        <main className="relative bg-bannerImg bg-no-repeat bg-cover bg-bottom w-full h-screen flex items-center justify-center">
            
            <div className="relative flex flex-col items-center backdrop-blur-md border rounded-lg overflow-hidden border-[#524242]/40 shadow-md shadow-black sm:items-start mt-5 mb-5 px-5 sm:px-[20px] lg:px-[40px] xl:px-[100px] animate-fadeIn">
                <h1 className="text-[#202020] text-[25px] sm:text-[20px] md:text-[30px] lg:text-[35px] font-mono">
                    hey! my name is
                </h1>
                <h1 className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent text-[35px] sm:text-[25px] md:text-[45px] lg:text-[55px] font-mono">
                    <Typewriters />
                </h1>
                <h1 className="text-[#202020] text-[25px] sm:text-[20px] md:text-[30px] lg:text-[35px] font-mono">
                    welcome to my website!
                </h1>
                <SocialLinks />
            </div>

        </main>
    );
}
