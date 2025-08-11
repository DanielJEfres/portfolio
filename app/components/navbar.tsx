'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BriefcaseBusiness, UsersRound, MountainSnow, MonitorCog } from 'lucide-react';

const Navigationbar = () => {
  const path = usePathname();

  const nav = [
    { name: 'Home', path: '/', icon: MountainSnow },
    { name: 'About', path: '/about', icon: UsersRound },
    { name: 'Experience', path: '/experience', icon: BriefcaseBusiness },
    { name: 'Projects', path: '/projects', icon: MonitorCog },
  ];

  const isHomePage = path === '/';
  const textColor = isHomePage ? 'text-[#23282e]' : 'text-white';
  const baseButtonBg = isHomePage ? 'bg-white/70' : 'bg-black/50';

  return (
    <div
      className={`fixed flex justify-center md:justify-between items-center gap-5 md:gap-6 font-roboto rounded-full shadow-md z-50
        left-1/2 transform -translate-x-1/2 px-3 md:w-3/4 py-2 md:px-6 bottom-4 md:top-3 md:bottom-auto
        transition-colors duration-500
        ${
          isHomePage
            ? 'bg-white/70 backdrop-blur-lg border border-gray-300'
            : 'bg-black/50 backdrop-blur-lg border border-black/30'
        }`}
    >
      <div className="flex items-center justify-center md:justify-start gap-8">
        {nav
          .filter((item) => item.name === 'Home')
          .map((item, index) => (
            <Link href={item.path} key={item.name} className="group">
              <div
                className={`frost-ice cracked px-3 md:px-4 py-1 flex items-center gap-1 md:gap-2
                  ${path === item.path ? 'nav-active' : ''}
                  ${path !== item.path ? baseButtonBg : ''}
                `}
                style={{ '--shimmer-delay': '0.5s' } as React.CSSProperties}
              >
                <item.icon
                  className="w-8 h-8 transition-colors duration-200 relative z-10"
                  stroke={isHomePage ? '#23282e' : 'white'}
                />
                <span
                  className={`hidden md:block text-[10px] transition-colors duration-200 font-mono md:text-[20px] ${textColor} relative z-10`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
      </div>
      <div className="flex items-center justify-center md:justify-end gap-8 md:gap-3">
        {nav
          .filter((item) => item.name !== 'Home')
          .map((item, index) => (
            <Link href={item.path} key={item.name} className="group">
              <div
                className={`frost-ice cracked px-4 py-1 flex items-center gap-1 md:gap-2
                  ${path === item.path ? 'nav-active' : ''}
                  ${path !== item.path ? baseButtonBg : ''}
                `}
                style={{ '--shimmer-delay': '0s' } as React.CSSProperties} 
              >
                <item.icon
                  className="w-8 h-8 transition-colors duration-200 relative z-10"
                  stroke={isHomePage ? '#23282e' : 'white'}
                />
                <span
                  className={`hidden md:block text-[10px] transition-colors duration-200 font-mono md:text-[20px] ${textColor} relative z-10`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Navigationbar;
