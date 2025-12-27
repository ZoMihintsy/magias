import AppLayout from "@/layouts/app-layout"
import { BreadcrumbItem } from "@/types"
import { Head, Link } from "@inertiajs/react"
import { User } from "lucide-react"
import { title } from "process"

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
            href: '#'
        }

    ]
    return (
        <AppLayout breadcrumbs={breadcrumbs} >
            <Head title="Utilisateurs" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {user.map((e) => (
                    <Link href={"/utilisateur/q=" + e.id} >
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border hover:bg-orange-300 hover:transition hover:cursor-pointer">
                                <h1 className="capitalize text-center ">
                                    {e.name}
                                    <br />
                                    <center>
                                        <User />
                                    </center>

                                </h1>
                                Type de compte : {e.role} <br />
                                Compte cr&eacute;er le     {new Date(e.created_at).toLocaleDateString('fr-FR', options)}
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </AppLayout>
    )
}