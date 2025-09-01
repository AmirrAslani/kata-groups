import { MenuItem } from "@/interface/component/general.interface";
import { SidebarInfo } from '@/i18n/layouts/sidebar.i18n';

export const menuItems: MenuItem[] = [
    { title: SidebarInfo.dashboard, path: '/dashboard' },
    {
        title: SidebarInfo.basketball,
        children: [
            { title: SidebarInfo.example, path: '/example' },
            { title: SidebarInfo.example, path: '/example' },
        ],
    },
    {
        title: SidebarInfo.tennis,
        children: [
            { title: SidebarInfo.example, path: '/example' },
            { title: SidebarInfo.example, path: '/example' },
        ],
    },
    {
        title: SidebarInfo.football,
        children: [
            { title: SidebarInfo.example, path: '/example' },
            { title: SidebarInfo.example, path: '/example' },
        ],
    },
];