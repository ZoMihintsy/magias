import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function ({ achat }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'achat livre',
            href: '#'
        }
    ]
    const acheter = async (e) => {
        const reponse = await axios.get('/valide/achat/' + e);
        // alert(reponse.data.status);
        reponse.data.status == 200 ? toast.success('Votre achat est effectuer merci!', {
            duration: 4000,
        }) : toast.success('Votre achat a ete mise a jour merci! ', {
            duration: 4000,
        })
        // toast.success()

    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Toaster />
            <Head title="Achat du livre" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-50 stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    <h1 className="text-center text-2xl font-semibold underline capitalize ">
                        {achat.type}
                    </h1>
                    <div className="text-semibold mt-8 text-2xl">
                        Prix du livre : {achat.prix} &euro;
                    </div>
                    <div className="text-center top-0">
                        <button key={achat.id} onClick={() => acheter(achat.id)}>
                            valide
                        </button>
                        <button className="ml-4 bg-red-400 p-2 rounded">
                            Annuler
                        </button>
                    </div>

                </div>
            </div>

        </AppLayout>
    )
}