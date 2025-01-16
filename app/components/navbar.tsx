'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BriefcaseBusiness, UsersRound, House, MonitorCog } from 'lucide-react';

const Navigationbar = () => {
    const path = usePathname();

    const nav = [
        { name: 'Home', path: '/', icon: <House className="w-6 h-6 md:w-10 md:h-10" /> },
        { name: 'About', path: '/about', icon: <UsersRound className="w-6 h-6 md:w-10 md:h-10" /> },
        { name: 'Experiences', path: '/experiences', icon: <BriefcaseBusiness className="w-6 h-6 md:w-10 md:h-10" /> },
        { name: 'Projects', path: '/projects', icon: <MonitorCog className="w-6 h-6 md:w-10 md:h-10" /> },
    ];
    // think of this like a struct: i.e. item.name would be 'Home', item.path would be '/', and etc

    return (
        <div
            className="fixed flex justify-between items-center gap-3 md:gap-8 font-roboto rounded-full bg-[#F3F4F6] shadow-md z-50 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl py-2 px-4 
                       bottom-4 md:top-4 md:bottom-auto">
            {nav.map((item) => (
                <Link href={item.path} key={item.name} className="group">
                    <div
                        className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-lg transition duration-300 ${
                            path === item.path ? 'bg-gray-300 text-black': 'text-gray-800 hover:bg-gray-200 hover:text-gray-800'}`}> 
                        {item.icon}
                        <span className="hidden md:block text-[10px] font-mono md:text-sm ">{item.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

//if the current path is the same as the item.path, then the background color will be gray-300 and the text color will be black as we are on that page 


export default Navigationbar;
