'use client';

import { useState } from 'react';
import Link from 'next/link';
import { menuItems } from '@/constant/sidebar.constant'
import { MenuItem } from "@/interface/component/general.interface";
import { useTranslation } from '@/helper/translate';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export default function Sidebar({ isOpen, onClose, onOpen }: SidebarProps) {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
    const { t } = useTranslation();

    const toggleMenu = (title: string) => {
        setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    const renderMenu = (item: MenuItem) => {
        const title = typeof item.title === 'string' ? item.title : t(item.title);
        
        if (item.children) {
            const isOpen = openMenus[title] || false;
            return (
                <div key={title}>
                    <button
                        onClick={() => toggleMenu(title)}
                        className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-500 rounded"
                    >
                        {title}
                        <span className="rtl:rotate-180">{isOpen ? '▾' : '▸'}</span>
                    </button>
                    {isOpen && (
                        <div className="pr-6 rtl:pl-6 rtl:pr-0 mt-1">
                            {item.children.map(renderMenu)}
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <Link
                    key={title}
                    href={item.path || '#'}
                    className="block px-4 py-2 hover:bg-gray-500 rounded"
                    onClick={onClose}
                >
                    {title}
                </Link>
            );
        }
    };

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 backdrop-blur-xs z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
            
            {/* Sidebar Toggle Button */}
            {!isOpen && (
                <button
                    onClick={onOpen}
                    className="fixed top-23 left-0 rtl:left-auto rtl:right-0 z-50 lg:hidden text-white p-2 rounded-md rounded-s-none rtl:rounded-l-md rtl:rounded-e-none shadow-lg bg-stone-900 hover:text-gray-400 transition-colors cursor-pointer"
                >
                   <FaAngleDoubleRight className="w-5 h-5 rtl:hidden"/>
                   <FaAngleDoubleLeft className="w-5 h-5 hidden rtl:block"/>
                </button>
            )}
            
            {/* Sidebar */}
            <aside className={`
                fixed lg:static h-screen top-0 left-0 rtl:left-auto rtl:right-0 h-full z-50
                w-64 border-e border-gray-500 rtl:border-s-0 rtl:border-e border-gray-500 p-4 overflow-y-auto
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0 dark-mode' : '-translate-x-full rtl:translate-x-full lg:translate-x-0 lg:rtl:translate-x-0'}
            `}>
                {/* Close button for mobile */}
                <div className="flex justify-between items-center mb-4 lg:hidden">
                    <h4 className="text-lg font-semibold">Menu</h4>
                    <button
                        onClick={onClose}
                        className="p-2 cursor-pointer text-gray-300"
                    >
                        ✕
                    </button>
                </div>
                
                {menuItems.map(renderMenu)}
            </aside>
        </>
    );
}
