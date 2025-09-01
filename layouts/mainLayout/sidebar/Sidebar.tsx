'use client';

export type MenuItem = {
    title: string;
    path?: string;
    children?: MenuItem[];
};

const menuItems: MenuItem[] = [
    { title: 'Dashboard', path: '/dashboard' },
    {
        title: 'Products',
        children: [
            { title: 'Retail', path: '/products/retail' },
            { title: 'Restaurant', path: '/products/restaurant' },
        ],
    },
    { title: 'Orders', path: '/orders' },
    {
        title: 'Settings',
        children: [
            { title: 'Profile', path: '/settings/profile' },
            { title: 'Security', path: '/settings/security' },
        ],
    },
];

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const toggleMenu = (title: string) => {
        setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    const renderMenu = (item: MenuItem) => {
        if (item.children) {
            const isOpen = openMenus[item.title] || false;
            return (
                <div key={item.title}>
                    <button
                        onClick={() => toggleMenu(item.title)}
                        className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-500 rounded"
                    >
                        {item.title}
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
                    key={item.title}
                    href={item.path || '#'}
                    className="block px-4 py-2 hover:bg-gray-500 rounded"
                >
                    {item.title}
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
