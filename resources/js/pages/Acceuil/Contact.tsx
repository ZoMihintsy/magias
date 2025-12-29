import { Input } from "@/components/ui/input";
import Navbar from "./Nav";
export default function () {
    return (
        <>
            <Navbar />
            {/* <!-- ===== Hero contact ===== --> */}
            <section className="section-contact" >
                <div className="container">
                    <span className="badge ">📮 Besoin d’aide ?</span>
                    <h1 className="section-title">Contactez l’équipe <span className="txt-brand">Magia Tales</span></h1>
                    <p className="muted">Une question sur la génération d’histoires, la facturation ou votre compte ? On vous répond très vite.</p>
                </div>
            </section>

            {/* <!-- ===== Formulaire + Infos ===== --> */}
            <section className="section">
                <div className="container grid-2">
                    {/* <!-- Form --> */}
                    <form className="card form" action="#" method="post">
                        <h2 className="section-title" >Nous écrire</h2>
                        <div className="row" >
                            <div>
                                <label >Nom</label>
                                <Input id="nom" name="nom" required placeholder="Votre nom" />
                            </div>
                            <div>
                                <label >E-mail</label>
                                <Input id="email" name="email" type="email" required placeholder="vous@exemple.com" />
                            </div>
                        </div>

                        <div className="row">
                            <div>
                                <label >Sujet</label>
                                <Input id="sujet" name="sujet" required placeholder="Sujet de votre message" />
                            </div>
                            <div>
                                <label >Type de demande</label>
                                <select id="type" name="type" required>
                                    <option value="">-- Choisir --</option>
                                    <option>Support technique</option>
                                    <option>Facturation</option>
                                    <option>Fonctionnalité / Idée</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label >Message</label>
                            <textarea id="message" name="message" required placeholder="Expliquez-nous comment on peut vous aider…"></textarea>
                        </div>

                        <label>
                            <Input type="checkbox" required name="consent" className=" checked:border-transparent " />J’accepte la politique de confidentialité
                        </label>

                        <div className="actions">
                            <button className="btn" type="submit">Envoyer le message</button>
                            <a className="btn btn-outline" href="aide.html">Centre d’aide</a>
                        </div>

                        <p className="muted" >Temps de réponse moyen : &lt; 24h (jours ouvrés).</p>
                    </form>
                    <br />

                    {/* <!-- Infos / FAQ rapide --> */}
                    <aside className="card">
                        <h2 className="section-title">Informations</h2>
                        <div className="notice" >💡 <span className="text-orange-500 font-semi-bold">Conseil :</span> consultez la <a href="aide.html" >FAQ</a> pour les réponses immédiates.</div>
<p></p>
                        <div>
                            <p><strong>Support :</strong> support@magia-tales.test</p>
                            <p><strong>Facturation :</strong> billing@magia-tales.test</p>
                            <p><strong>Horaires :</strong> Lundi → Vendredi, 9h–17h (UTC+4 Réunion)</p>
                            <p><strong>Adresse :</strong> 123 Rue des Contes, 97400</p>
                        </div>

                        <h3 >FAQ express</h3>
                        <details open>
                            <summary><strong>Comment créer un livre ?</strong></summary>
                            <p className="muted">Allez sur <a href="creer">Créer un livre</a>, remplissez le formulaire, puis générez.</p>
                        </details>
                        <details>
                            <summary><strong>Puis-je télécharger en PDF ?</strong></summary>
                            <p className="muted">Oui, depuis <a href="mes-livres.html">Mes livres</a> ou le <a href="lecteur.html" >Lecteur</a>.</p>
                        </details>
                        <details>
                            <summary><strong>Comment changer d’offre ?</strong></summary>
                            <p className="muted">Rendez-vous sur <a href="/Tarif">Tarifs</a>, puis suivez le checkout.</p>
                        </details>
                    </aside>
                </div>
            </section>

            {/* <!-- ===== Carte / Placeholder visuel (optionnel) ===== --> */}
            <section className="section">
                <div className="container">
                    <div className="card" >
                        <div >
                            {/* <!-- Placeholder type “carte” cohérent visuel --> */}
                            <div >
                                <div>
                                    <div >Magia Tales — Réunion</div>
                                    <div>Carte/illustration à intégrer ici</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="muted " >💡<span className="text-orange-500 font-semi-bold">Astuce : </span> remplace ce bloc par une iframe Google Maps ou une illustration personnalisée.</p>
                </div>
            </section>

            {/* <!-- ===== CTA ===== --> */}
            <section className="section">
                <div className="container card" >
                    <div>
                        <h3 className="section-title" >Envie d’essayer Magia Tales ?</h3>
                        <p className="muted">Créez une première histoire gratuitement et partagez le moment en famille.</p>
                    </div>
                    <div className="actions">
                        <a className="btn" href="inscription.html">Inscription</a>
                        <a className="btn btn-outline" href="generation.html">Créer un livre</a>
                    </div>
                </div>
            </section>
            {/* 
            <!-- ===== Footer ===== --> */}
            <footer role="contentinfo">
                <div className="container footer-wrap">
                    <p>© <span id="year"></span> Magia Tales — Tous droits réservés</p>
                    <p className="footer-links">
                        <a href="mentions.html">Mentions légales</a> ·
                        <a href="cgu.html">CGU</a> ·
                        <a href="contact.html" aria-current="page">Contact</a>
                    </p>
                </div>
            </footer>
        </>
    )
}