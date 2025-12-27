import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";

export default function ({ user }) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: '2-digit',
        // minute: '2-digit'
    };
    const breadcrumbs: BreadcrumbItem[] = [

        {
            title: 'Utilisateurs',
            href: '/utilisateurs'
        },
        {
            title: user.name,
            href: '#'
        }

    ]
    return (
        <AppLayout breadcrumbs={breadcrumbs} >
            <Head title={user.name} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className="text-center capitalize font-semibold text-3xl">
                    {user.name}
                </h1>
                <div className="text-xl">
                    Email : <a href={"mailto:" + user.email}>{user.email}</a>
                    <br />
                    <br />
                    R&ocirc;le : {user.role}
                </div>
            </div>
        </AppLayout>
    )
}
