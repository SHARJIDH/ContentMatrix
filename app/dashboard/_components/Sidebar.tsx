"use client";
import { History, Home, Receipt, Settings } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Sidebar() {
  const menuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: History,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: Receipt,
      path: '/dashboard/billing',
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/setting',
    },
  ];

  const path = usePathname();
  
  useEffect(() => {}, []);
  
  return (
    <div className="h-screen relative p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src={'/logo.svg'} alt="logo" width={120} height={100}/>
      </div>
      <hr className="my-6 h-3" />
      <div className="mt-3">
        {menuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3
            hover:bg-[#6495ED] hover:text-white rounded-lg cursor-pointer transition ease-in-out ${
              path == menu.path && 'bg-[#6495ED] text-white'
            }`}
          >
            <menu.icon className="text-lg" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
