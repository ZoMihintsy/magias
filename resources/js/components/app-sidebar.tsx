import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { BadgeDollarSignIcon, BadgeEuroIcon, BellDot, Book, BookOpen, Folder, HistoryIcon, LayoutGrid, LibraryBigIcon, LucideLibraryBig, LucideLibrarySquare, Users } from 'lucide-react';
import AppLogo from './app-logo';





export function AppSidebar() {
    const { auth } = usePage().props as any;
    const { router } = usePage().props as any;
    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: dashboard(),
            icon: LayoutGrid,
        },
        {
            title: auth.user.credit == 0 ? 'Acheter un livre' : 'Generateur de livre',
            href: auth.user.credit == 0 ? '/achat/livre' : '/generateur/livre',
            icon: auth.user.credit == 0 ? (Book) : LayoutGrid,
        },
        {
            title: 'Bibliotheques',
            href: '/bibliotheques',
            icon: LucideLibrarySquare
        },
        {
            title: 'Historiques',
            href: '/historiques',
            icon: HistoryIcon
        }
    ];
    const mainNavAdmin: NavItem[] = [
        {
            title: 'Panels utilisateurs',
            href: '/admin/dashboard',
            icon: Users
        },
        {
            title: 'Panels achats',
            href: '/admin/achat',
            icon: BadgeDollarSignIcon
        },
        {
            title: 'Historiques',
            href: dashboard(),
            icon: HistoryIcon
        },
    ]

    return (
        <Sidebar collapsible="icon" variant="inset" className={auth.user.role !== "admin" ? "bg-blue-300" : "bg-orange-300"}>
            <SidebarHeader className={auth.user.role === "admin" ? "bg-blue-300" : "bg-orange-300"}>
                <SidebarMenu >
                    <SidebarMenuItem >
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            {auth.user.role == 'admin' ?
                (
                    <SidebarContent className={auth.user.role === "admin" ? "bg-blue-300" : ""}>
                        <NavMain items={mainNavAdmin} />
                    </SidebarContent>
                )

                : ("")
            }
            <SidebarContent className={auth.user.role === "admin" ? "bg-blue-300" : "bg-orange-300"}>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter className={auth.user.role === "admin" ? "bg-blue-300" : "bg-orange-300"}>

                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
