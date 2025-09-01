'use client';

import { useState } from 'react';
import Link from 'next/link';
import { menuItems } from '@/constant/sidebar.constant'
import { MenuItem } from "@/interface/component/general.interface";
import { useTranslation } from '@/helper/translate';

export default function Sidebar() {
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
                        <span>{isOpen ? '▾' : '▸'}</span>
                    </button>
                    {isOpen && (
                        <div className="pl-6 mt-1">
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
                >
                    {title}
                </Link>
            );
        }
    };

    return (
        <aside className="w-64 h-screen border-e border-gray-500 p-4 overflow-y-auto">
            {menuItems.map(renderMenu)}
        </aside>
    );
}
