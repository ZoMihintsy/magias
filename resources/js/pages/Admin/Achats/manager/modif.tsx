import AppLayout from "@/layouts/app-layout";
import { reset } from "@/routes/password";
import { BreadcrumbItem } from "@/types";
import { Input } from "@headlessui/react";
import { Head, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { Info } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ({ categorie }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Panel Achat',
            href: '/admin/achat',
        },
        {
            title: 'Manager categories',
            href: '/livre/categorie'
        },
        {
            title: 'Modifier la categorie d\' un livre',
            href: '#'
        }
    ];

    const [prix, setPrix] = useState(categorie.prix);
    const [erreur, setErreur] = useState('');
    const [type, setType] = useState(categorie.type);
    const validate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/modif/data/${categorie.id}`, { prix, type });
            toast.success('Modification enregistré avec succès !', {
                duration: 4000,
                position: 'top-right',
            });
            setTimeout(() => {
                router.visit('/livre/categorie');
            }, 2000)
        } catch (e) {

            setErreur(e.response?.data?.errors);
            toast.error('Erreur lors de la modification', {
                duration: 4000,
                position: 'top-right',
            });
        }


    }
    const supprimer = async () => {

        try {
            if (categorie.deleted_at == 'null') {
                await axios.get('/delete/categorie/' + categorie.id);
                toast.success('Suppression du livre fait avec succès !', {
                    duration: 4000,
                    position: 'top-right',
                });

            } else {
                toast.error('Erreur lors du suppression du livre, le livre est deja supprimer!', {
                    duration: 4000,
                    position: 'top-right',
                });
            }

        } catch (i) {
            toast.error('Erreur lors du suppression du categorie du livre!', {
                duration: 4000,
                position: 'top-right',
            });
        }
        setTimeout(() => {
            router.visit('/livre/categorie');
        }, 2000);
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="ajout d'un prix" />
            <div className="text-center">
                <Toaster />
                <form action="" onSubmit={validate} className="card grid-2 p-2 ">
                    <h1 className="border-solid p-2 border ">
                        Formulaire de modification des categories de livre
                    </h1>
                    <div className="flex">
                        {erreur && (<span className="text-red-500 text-center">{erreur.prix} <br />{erreur.type}</span>)}
                    </div>
                    <Input type="text" onChange={(e) => setType(e.target.value)} placeholder="Entrer le type" value={type} className={'mr-4'} />
                    <Input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} placeholder="Entrer le prix" />
                    <br />
                    <div className="flex justify-center mb-3">
                        <button className=" w-40 mt-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-500 active:bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 justify-center">
                            Valider
                        </button>
                        <b onClick={() => {
                            if (confirm('Voulez vous vraiment supprmer cette categorie ?')) {
                                supprimer()
                            } else return false
                        }} className=" w-40 mt-2 px-4 py-2.5 bg-red-600 hover:bg-red-500 active:bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 justify-center">Supprimer</b>
                    </div>
                </form>
            </div>
        </AppLayout>
    )
}