import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";

export default function () {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Panel achat',
            href: '/admin/achat'
        },
        {
            title: 'Manager categories',
            href: '/livre/categorie'
        },
        {
            title: 'Modification categorie',
            href: '#'
        }
    ]
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="modification" />

        </AppLayout>
    )
}