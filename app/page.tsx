import Image from 'next/image'

export default function Home() {
    return (
        <main className="relative bg-bannerImg bg-no-repeat bg-cover bg-bottom w-full h-screen flex items-center justify-center">
            
            <div className="relative flex flex-col items-center backdrop-blur-sm border rounded-lg overflow-hidden border-[#524242]/40 shadow-md shadow-black sm:items-start mt-5 mb-5 px-5 sm:px-[20px] lg:px-[40px] xl:px-[100px] animate-fadeIn">
                <h1 className="text-[#202020] text-[25px] sm:text-[20px] md:text-[30px] lg:text-[35px] font-bold">
                    hey! my name is
                </h1>
                <h1 className="text-[#b92e2e] text-[40px] sm:text-[30px] md:text-[50px] lg:text-[60px]  font-bold">
                    Daniel Efres
                </h1>
                <h1 className="text-[#202020] text-[25px] sm:text-[20px] md:text-[30px] lg:text-[35px] font-bold">
                    welcome to my website!
                </h1>
            </div>

        </main>
    );
}
