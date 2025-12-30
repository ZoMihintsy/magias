import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { useMemo } from "react";

export default function () {
    const { auth } = usePage().props as any;

    const { dashboard } = usePage().props as any;
    const historiqueTrie = useMemo(() => {
        if (!dashboard?.client) return [];

        return dashboard.client.flatMap((client) => {
            // On prépare les achats d'abord pour pouvoir piocher dedans
            const achatsDuClient = client.achat;

            // 1. Transformer les livres
            const livres = client.livre
                .filter(l => Number(l.prix) >= 0)
                .map(l => {
                    // ON CHERCHE LE THÈME ICI :
                    // On cherche l'achat qui a le même ID que le achat_id du livre
                    const achatCorrespondant = achatsDuClient.find(a => a.user_id === auth.user.id);

                    return {
                        ...l,
                        typeHistorique: 'Livre',
                        dateRef: l.created_at,
                        themeAffiche: achatCorrespondant ? achatCorrespondant.theme : 'Thème inconnu',
                        prixAffiche: l.prix > 0
                            ? `(Disponible)`
                            : "(consulter)"
                    };
                });

            // 2. Transformer les achats
            const achats = achatsDuClient.map(a => {
                // On convertit en nombre et on gère le cas où le prix est vide ou null
                const prixValeur = parseFloat(a.prix) || 0;

                return {
                    ...a,
                    typeHistorique: 'Achat',
                    dateRef: a.created_at,
                    themeAffiche: a.theme,
                    // On utilise la valeur convertie pour le test

                };
            });

            return [...livres, ...achats];
        }).sort((a, b) => new Date(b.dateRef).getTime() - new Date(a.dateRef).getTime());

    }, [dashboard.client]);
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Historiques',
            href: '#'
        }
    ]
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Historiques" />
            <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                <h1>
                    Historiques
                </h1>
                <table className='w-full ml-1 border '>
                    <tr className='border text-center capitalize font-semibold '>
                        <td className='border p-2'>
                            date
                        </td>
                        <td className='border p-2'>
                            type
                        </td>
                        <td className='border p-2'>
                            Evenement
                        </td>
                    </tr>

                    {historiqueTrie.map((item) => (
                        <tr key={`${item.typeHistorique}-${item.id}`}>

                            <td className='border p-2'>{new Date(item.dateRef).toLocaleString()}</td>
                            <td className='border p-2'>{item.typeHistorique === 'Livre' ? 'Achat d\'un livre' : 'Generer une histoire'}
                            </td>
                            <td className='border p-2'>
                                {item.themeAffiche}
                                {item.typeHistorique === 'Livre' ? (
                                    <span className="font-bold text-green-600">
                                        {item.prixAffiche == '(Disponible)' ? (<span className="font-bold text-green-600">{item.prixAffiche}</span>) : (<span className="font-bold text-red-600">{item.prixAffiche}</span>)}
                                    </span>
                                ) : ''}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </AppLayout>
    )
}