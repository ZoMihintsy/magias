
import React from "react";
import Navbar from "./Nav";
import { SpeechIcon, SproutIcon, TreePalm, UserCircle, UsersIcon } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function Apropos() {
    return (
        <>
            <div>
                <Navbar />
                <section className="section-apropos">
                    <div className="container">
                        <h2 className="section-title">Notre mission & nos valeurs</h2>
                        <div className="grid-3">
                            <article className="card">
                                <h3>Mission</h3>
                                <p className="muted">Encourager la <strong>lecture partagée</strong> en famille avec des histoires adaptées à chaque enfant.</p>
                            </article>
                            <article className="card">
                                <h3>Créativité</h3>
                                <p className="muted">Des illustrations <strong>ludiques et colorées</strong> qui stimulent l’imagination.</p>
                            </article>
                            <article className="card">
                                <h3>Bienveillance</h3>
                                <p className="muted">Des récits positifs autour du <strong>partage</strong>, de la <strong>confiance</strong> et de la <strong>persévérance</strong>.</p>
                            </article>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <h2 className="section-title">L’équipe</h2>
                        <div className="team-grid block p-4 px-8 sm:flex bg-blue-200 rounded-md text-center ml-4 grid-0 me-8 sm:w-[950px]">
                            <div className="team-card text-center sm:p-20">

                                <div className="avatar avatar-rose"></div>
                                <UserCircle className="text-2xl text-blue-400 w-[50px]" />
                                <h4>Élodie</h4>
                                <p className="muted">Produit</p>
                            </div>
                            <div className="team-card text-center sm:p-20">
                                <div className="avatar avatar-sun"></div>
                                <UserCircle className="text-2xl text-green-400 w-[50px]" />

                                <h4>Max</h4>
                                <p className="muted">Tech</p>
                            </div>
                            <div className="team-card text-center">
                                <div className="avatar avatar-mint"></div>
                                <UserCircle className="text-2xl text-yellow-400 w-[50px]" />
                                <h4>Sam</h4>
                                <p className="muted">Illustration</p>
                            </div>
                            <div className="team-card text-center sm:p-20">
                                <UserCircle className="text-2xl text-red-400 w-[50px]" />

                                <div className="avatar avatar-accent"></div>
                                <h4>Inès</h4>
                                <p className="muted">Support</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Comment nous travaillons</h2>
                        <ol className="timeline">
                            <li className="step">

                                <UsersIcon />
                                <div>
                                    <h4>Écouter les familles</h4>
                                    <p className="muted">Nous recueillons vos besoins pour adapter les thèmes et les tons.</p>
                                </div>
                            </li>
                            <li className="step">
                                <SproutIcon className="flex" />
                                <div>
                                    <h4>Créer des univers</h4>
                                    <p className="muted">Nous concevons des illustrations douces, accessibles et inclusives.</p>
                                </div>
                            </li>
                            <li className="step">


                                <span className="step-dot"><SpeechIcon /></span>
                                <div>
                                    <h4>Itérer simplement</h4>
                                    <p className="muted">Chaque retour nous aide à améliorer la magie ✨.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Chiffres clés</h2>
                        <div className="stats">
                            <div className="stat card">
                                <div className="stat-number">12k+</div>
                                <div className="stat-label">histoires générées</div>
                            </div>
                            <div className="stat card">
                                <div className="stat-number">4,8/5</div>
                                <div className="stat-label">note moyenne</div>
                            </div>
                            <div className="stat card">
                                <div className="stat-number">30s</div>
                                <div className="stat-label">pour prévisualiser</div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container cta-wrap card">
                        <div>
                            <h3 className="section-title" >Prêt à créer votre premier livre ?</h3>
                            <p className="muted">Choisissez un thème, personnalisez, et partagez en quelques minutes.</p>
                        </div>
                        <div className="actions">
                            <Link className="btn" href="creer">Créer un livre</Link>
                            <a className="btn" href="themes.html">Voir les thèmes</a>
                        </div>
                    </div>
                </section>


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
    )
}