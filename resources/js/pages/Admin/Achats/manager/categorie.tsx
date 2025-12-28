import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { EuroIcon, LucideGalleryVerticalEnd } from "lucide-react";

export default function ({ categorie }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Panel achat',
            href: '/admin/achat'
        },
        {
            title: 'Manager categories',
            href: '#'
        }
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs} >
            <Head title="manager-achat" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {categorie.map((e) => (
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border hover:bg-orange-300 hover:transition hover:cursor-pointer">
                            <Link href={'/utilisateurs'} title='veuillez me cliquer pour voir le contenue'>
                                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                <h1 className='text-center underline font-semibold text-xl flex'>
                                    <LucideGalleryVerticalEnd />

                                </h1>
                                <h2 className="text-3xl text-center mt-4 sm:text-6xl capitalize">
                                    {e.type}
                                </h2>
                                <span className="flex text-2xl">
                                    {e.prix} <EuroIcon />
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}