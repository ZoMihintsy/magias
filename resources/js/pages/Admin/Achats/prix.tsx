import AppLayout from "@/layouts/app-layout";
import { reset } from "@/routes/password";
import { BreadcrumbItem } from "@/types";
import { Input } from "@headlessui/react";
import { Head, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { Info } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../../../../css/app.css";

export default function () {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Panel Achat',
            href: '/admin/achat',
        },
        {
            title: 'Ajouter un prix pour un livre',
            href: '#'
        }
    ];

    const [prix, setPrix] = useState('');
    const [erreur, setErreur] = useState('');
    const [type, setType] = useState('');

    const validate = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/ajoute/data', { prix, type });
            toast.success('Prix enregistré avec succès !', {
                duration: 4000,
                position: 'top-right',
            });
            reset();

        } catch (e) {

            setErreur(e.response?.data?.errors);
        }

    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="ajout d'un prix" />
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
                    <div className="flex justify-center mb-3">
                        <button className=" w-40 mt-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-500 active:bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 justify-center">
                             Valider
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    )
}