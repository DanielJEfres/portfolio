'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BriefcaseBusiness, UsersRound, MountainSnow, MonitorCog } from 'lucide-react';

const Navigationbar = () => {
    const path = usePathname();

    const nav = [
        { name: 'Home', path: '/', icon: MountainSnow },
        { name: 'About', path: '/about', icon: UsersRound },
        { name: 'Experiences', path: '/experiences', icon: BriefcaseBusiness },
        { name: 'Projects', path: '/projects', icon: MonitorCog },
    ];

    const isHomePage = path === '/'; // use this to check if we're on the home page
    const navBackground = isHomePage ? 'bg-[#F3F4F6]' : 'bg-[#23282e]'; // the color of the nav bar will be gray when not on the home page, and white on the home page
    const textColor = isHomePage ? 'text-[#23282e]' : 'text-[#F3F4F6]';  // when we arent on the home page the color of the text is white, on home page its gray

    return (
        <div
            className={`fixed flex justify-between items-center gap-3 md:gap-6 font-roboto rounded-full shadow-md z-50 left-1/2 transform -translate-x-1/2 w-full md:w-3/4 py-2  px-7 md:px-10 
            bottom-4 md:top-4 md:bottom-auto transition-colors duration-200 ${navBackground}`}>
        
            <div className="flex items-center justify-start gap-3">
                {nav
                    .filter((item) => item.name === 'Home')
                    .map((item) => (
                        <Link href={item.path} key={item.name} className="group">
                            <div
                                className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 rounded-lg transition duration-300 
                                ${path === item.path ? 'bg-gray-400 text-black' : 'hover:bg-gray-400 hover:text-gray-600'}`}>
                                <item.icon className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-200`} stroke={path === '/' ? 'black' : 'white'} />
                                <span className={`hidden md:block text-[10px] transition-colors duration-200 font-mono md:text-[20px] ${textColor}`}>
                                {item.name}
                                </span>
                            </div>
                        </Link>
                    ))}
            </div>
    
            <div className="flex items-center justify-end gap-3">
                {nav
                    .filter((item) => item.name !== 'Home')
                    .map((item) => (
                        <Link href={item.path} key={item.name} className="group">
                            <div
                                className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 rounded-lg transition duration-300 ${path === item.path ? 'bg-gray-400 text-black' : 'hover:bg-gray-400 hover:text-gray-600'}`}>
                                <item.icon className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-200`} stroke={path === '/' ? 'black' : 'white'} />
                                <span className={`hidden md:block text-[10px] transition-colors duration-200 font-mono md:text-[20px] ${textColor}`}>
                                {item.name}
                                </span>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

// when 
// stroke (color of the svgs) is black when on the home page, and white when not on the home page


export default Navigationbar;
