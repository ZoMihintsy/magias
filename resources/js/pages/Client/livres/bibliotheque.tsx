import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import { BookDownIcon, BookMarked, BookOpenTextIcon, DownloadCloudIcon, EuroIcon, LucideGalleryVerticalEnd } from "lucide-react";

export default function ({ livre }) {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Panel achat',
            href: '/admin/achat'
        },
        {
            title: 'Acheter un livre',
            href: '#'
        }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs} >
            <Head title="manager-achat" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {livre.map((e) => (
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border  hover:transition hover:cursor-pointer" key={e.id}>


                            <h1 className='text-center underline font-semibold text-xl flex'>
                                <BookMarked />

                            </h1>
                            <h2 className="text-3xl text-center mt-4 sm:text-6xl capitalize">
                                {e.theme}
                            </h2>
                            <span className="flex text-2xl">
                                {e.ton}
                            </span>

                            <div className="flex text-center">

                                <a href={'/achat/livre/categorie=' + e.id} title='veuillez me cliquer pour voir le contenue' className={'flex bg-green-300 p-2 rounded disabled' + e.generate && e.generate == 1 ? '' : 'hidden'}>
                                    T&eacute;l&eacute;charger <DownloadCloudIcon />
                                </a>
                                <a href={'/achat/livre/categorie=' + e.id} title='veuillez me cliquer pour voir le contenue' className={e.generate && e.generate == 0 ? "flex bg-orange-300 p-2 rounded disabled" : 'hidden'} >
                                    Generer <BookDownIcon />
                                </a >
                                &nbsp;

                                <a href="" className={'flex bg-blue-300 p-2 rounded disabled' + e.generate && e.generate == 1 ? '' : 'hidden'}>
                                    Lire &nbsp;<BookOpenTextIcon />
                                </a>


                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}