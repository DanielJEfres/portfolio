import Typewriters from './components/typewriter';
import SocialLinks from './components/socialsbuttons';

export default function Home() {
    return (
        <main className="relative bg-bannerImg bg-no-repeat bg-cover bg-bottom w-full h-screen flex items-center justify-center animate-fadeIn duration-100">
            <div className="relative backdrop-blur-md border rounded-lg overflow-hidden border-[#524242]/40 shadow-md shadow-black sm:items-start mt-5 mb-5 px-5 sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px] animate-fade-up duration-1000">
                <h1 className="text-[#23282e] flex justify-center items-center text-[25px] md:text-[30px] lg:text-[35px] font-mono mt-3">
                    hey! my name is
                </h1>
                <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text flex justify-center items-center text-[30px] md:text-[45px] lg:text-[55px] font-mono">
                    <Typewriters />
                </h1>
                <h1 className="text-[#23282e] flex justify-center items-center text-[25px] md:text-[30px] lg:text-[35px] font-mono">
                    welcome to my website!
                </h1>
                
                <div className="flex justify-center items-center mt-3 mb-6">
                    <SocialLinks />
                </div>
            </div>
        </main>
    );
}
