import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { History, Library, LibraryBigIcon, ReceiptEuro, Users2Icon } from 'lucide-react';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Panel administrateur',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const { auth } = usePage().props as any;
    const { users } = usePage().props as any;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border hover:bg-orange-300 hover:transition hover:cursor-pointer">
                        <Link href={'/utilisateurs'} title='veuillez me cliquer pour voir le contenue'>
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            <h1 className='text-center underline font-semibold text-xl flex'>
                                <Users2Icon /> Utilisateurs
                            </h1>
                            <div className='text-center'>
                                Il y a <b>{users.count}</b> {users.count > 1 ? 'utilisateurs' : 'utilisateur'} dans le site
                            </div>
                        </Link>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <h1 className="text-center underline font-semibold text-xl flex">
                            <ReceiptEuro /> Achats
                        </h1>
                        <div className="text-center">
                            Vous verrez sur cette section le nombre d'achat effectuer par les utilisateurs
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <h1 className="text-center underline font-semibold text-xl flex">
                            <LibraryBigIcon /> Livres
                        </h1>
                        <div className="text-center">
                            Vous verrez sur cette section le nombre de livre g&eacute;n&eacute;rer par les utilisateurs
                        </div>
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    <h1 className="text-semibold border-b font-semibold mt-2 ml-2">
                        Historiques
                    </h1>
                    <div className='text-center'>
                        <center className='text-3xl mt-5'>
                            <History className='text-3xl font-semibold text-center text-align-center ' />
                            <b>
                                Il n'y a pas d'historiques pour l'instant
                            </b>
                        </center>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
