'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigationbar = () => {

    const path = usePathname();

    const nav = [

        { name:'Home', path:'/', image:'/images/home.svg'}, 
        { name:'About Me', path:'/aboutme', image:'/images/person.svg'}, 
        { name:'Experiences', path:'/experiences', image:'/images/work.svg'}, 
        { name:'Projects', path:'/projects', image:'/images/projects.svg'}, 

        // think of this like a struct: i.e. item.name would be 'Home', item.path would be '/', and etc
    ];

    return (
        <div className="fixed top-1/2 right-4 sm:right-6 lg:right-10 transform -translate-y-1/2 bg-transparent flex flex-col items-center py-5 z-50">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
                {nav.map((item) => (
                    <Link href={item.path} key={item.name}>
                        <div
                            className={`flex flex-col items-center gap-2 sm:gap-3 ${
                                path === item.path ? 'text-white' : 'text-gray-400'
                            } hover:bg-blue-600 rounded-md p-2 transition duration-300`}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={30} 
                                height={30}
                                className="sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};



export default Navigationbar;