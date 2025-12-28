import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";

export default function () {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Panel achat',
            href: '#'
        }
    ];
    const { panelAchat } = usePage().props as any;
    return (
        <AppLayout breadcrumbs={breadcrumbs} >
            <Head title="Panel achat" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border hover:bg-orange-300 hover:transition hover:cursor-pointer">
                        <Link href={'/ajouter/prix/livre'} title='veuillez me cliquer pour voir le contenue'>
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            <h1 className="text-center font-semibold ">
                                Ajouter un prix de livre
                            </h1>
                            <div>
                                Vous pouvez ajouter un prix selon la categorie du livre
                            </div>
                        </Link>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border hover:bg-orange-300 hover:transition hover:cursor-pointer">
                        <Link href={'/livre/categorie'} title='veuillez me cliquer pour voir le contenue'>
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            <h1 className="text-center font-semibold">
                                Manager les prix du livre
                            </h1>
                            <div>
                                Il y a {panelAchat.count} {panelAchat.count > 1 ? 'nombres' : 'nombre'}  de categories de livre cr&eacute;&eacute;
                            </div>
                        </Link>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border hover:bg-orange-300 hover:transition hover:cursor-pointer">
                        <Link href={'/utilisateurs'} title='veuillez me cliquer pour voir le contenue'>
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            <h1>
                                Manager les livres acheter
                            </h1>
                        </Link>
                    </div>
                </div>

            </div>
        </AppLayout>

    )
}