import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Navbar from '../pages/Acceuil/Nav';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <Navbar />
            <div className="flex flex-col min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]">
                <main className="flex-grow p-6 lg:p-8">
                    <section id="hero" className="hero">
                        <div className="container hero-grid">
                            <div>
                                <div className="badge">✨ Nouveau : générez un livre en 2 minutes</div>
                                <h1>Créez <span className="txt-brand">un livre magique</span> pour votre enfant</h1>
                                <p className="muted">Un simple formulaire, une <strong>histoire illustrée</strong> unique. Ambiance cosy et lecture en famille.</p>
                                <div className="actions">
                                    <Link className="btn" href={"creer"}>Créer mon livre gratuit</Link>
                                    <Link className="btn btn-outline" href={"tarif"}>Voir les tarifs</Link>
                                </div>
                            </div>


                            <div className="hero-art" aria-hidden="true">
                                <svg className="float star" viewBox="0 0 24 24"><path fill="#F6C453" d="M12 17l-5.5 3l1.5-6L3 9l6-.5L12 3l3 5.5l6 .5l-5 5l1.5 6z" /></svg>
                                <svg className="float planet" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="8" fill="#6B5AED" />
                                    <ellipse cx="12" cy="12" rx="11" ry="3.8" fill="#B9AEFF" opacity=".35" />
                                </svg>
                                <svg viewBox="0 0 800 600" width="100%" height="100%">
                                    <rect width="800" height="600" fill="#fff3e7" />
                                    <rect x="120" y="330" rx="30" ry="30" width="560" height="170" fill="#ffcf9f" />
                                    <circle cx="460" cy="280" r="55" fill="#ffa46c" />
                                    <rect x="410" y="320" width="150" height="120" rx="26" fill="#5ec0a3" />
                                    <circle cx="330" cy="310" r="42" fill="#ffb58a" />
                                    <rect x="290" y="340" width="110" height="95" rx="22" fill="#f1893c" />
                                    <rect x="340" y="360" width="160" height="60" rx="8" fill="#2bb3d8" />
                                    <line x1="420" y1="360" x2="420" y2="420" stroke="#e6f8ff" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                    </section>


                    <section id="features" className="section">
                        <div className="container">
                            <h2 className="section-title">Fonctionnalités clés</h2>
                            <div className="grid-3">
                                <div className="card">
                                    <h3>Personnalisation rapide</h3>
                                    <p className="muted">Un formulaire tout simple (prénom, âge, thème…).</p>
                                </div>
                                <div className="card">
                                    <h3>Illustrations uniques</h3>
                                    <p className="muted">Visuels doux et colorés adaptés aux enfants.</p>
                                </div>
                                <div className="card">
                                    <h3>Téléchargement en 1 clic</h3>
                                    <p className="muted">Récupérez votre PDF immédiatement.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section aria-labelledby="temoignages" className="section">
                        <div className="container">
                            <h2 id="temoignages" className="section-title">Ils en parlent</h2>
                            <div className="grid-3">
                                <figure className="card">
                                    <figcaption><strong>Marie</strong> — maman de Zoé (5&nbsp;ans)</figcaption>
                                    <p className="muted">“Voir le prénom de notre fille dans l’histoire, c’était magique !”</p>
                                    <div className="stars">★★★★★</div>
                                </figure>
                                <figure className="card">
                                    <figcaption><strong>Julien</strong> — papa de Noé (7&nbsp;ans)</figcaption>
                                    <p className="muted">“Génération rapide, illustrations très mignonnes.”</p>
                                    <div className="stars">★★★★☆</div>
                                </figure>
                                <figure className="card">
                                    <figcaption><strong>Clara</strong> — tata de Léo (6&nbsp;ans)</figcaption>
                                    <p className="muted">“Une super idée cadeau, simple à utiliser.”</p>
                                    <div className="stars">★★★★★</div>
                                </figure>
                            </div>
                        </div>
                    </section>
                </main>
                    <footer role="contentinfo">
                        <div className="container footer-wrap">
                            <p>© <span id="year"></span> Magia Tales — Tous droits réservés</p>
                            <p className="footer-links">
                                <a href="mentions.html">Mentions légales</a> ·
                                <a href="cgu.html">CGU</a> ·
                                <a href="contact.html">Contact</a>
                            </p>
                        </div>
                    </footer>
                
            </div>
        </>
    );
}
