import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Toaster } from "react-hot-toast";

export default function ({ livre }) {
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
            <div>
                <div className="text-center">
                    <Toaster />
                    <form action="" onSubmit={validate} className="card grid-2 p-2 ">
                        <h1 className="border-solid p-2 border ">
                            Formulaire d'ajoute des categories de livre
                        </h1>
                        <div className="flex">
                            {erreur && (<span className="text-red-500 text-center">{erreur.prix} <br />{erreur.type}</span>)}

                        </div>
                        <Input type="text" onChange={(e) => setType(e.target.value)} placeholder="Entrer le type" className={'mr-4'} />
                        <Input type="number" onChange={(e) => setPrix(e.target.value)} placeholder="Entrer le prix" />
                        <br />
                        <button>
                            Valider
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}