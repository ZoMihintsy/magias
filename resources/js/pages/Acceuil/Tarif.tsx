import Navbar from "./Nav";

export default function Tarification() {
    return (
        <>
            <Navbar />
            <section className="section-tarif" >
                <div className="container">
                    <span className="badge">💰 Simple & transparent</span>
                    <h1 className="section-title" >Nos tarifs</h1>
                    <p className="muted">Choisissez l’offre qui vous convient : gratuite pour essayer, abonnement pour profiter chaque mois, ou pack cadeau à offrir.</p>
                </div>
            </section>

            {/* <!-- ===== Tarifs ===== --> */}
            <section className="section">
                <div className="container pricing-grid">
                    {/* <!-- Freemium --> */}
                    <div className="card pricing-card">
                        <h2>Freemium</h2>
                        <p className="muted">1 livre gratuit</p>
                        <p className="price">0€</p>
                        <ul className="list">
                            <li>✔ Accès à 1 thème</li>
                            <li>✔ Téléchargement PDF</li>
                        </ul>
                        <a className="btn" href="generation.html">Essayer</a>
                    </div>

                    {/* <!-- Abonnement --> */}
                    <div className="card pricing-card popular">
                        <div className="ribbon">Populaire</div>
                        <h2>Abonnement</h2>
                        <p className="muted">3 livres / mois</p>
                        <p className="price">9,99€<span className="unit">/mois</span></p>
                        <ul className="list">
                            <li>✔ Tous les thèmes</li>
                            <li>✔ Couverture personnalisée</li>
                            <li>✔ Support prioritaire</li>
                        </ul>
                        <a className="btn" href="checkout.html">Choisir</a>
                    </div>

                    {/* <!-- Pack cadeau --> */}
                    <div className="card pricing-card">
                        <h2>Pack cadeau</h2>
                        <p className="muted">10 livres à offrir</p>
                        <p className="price">29,99€</p>
                        <ul className="list">
                            <li>✔ Partage par lien</li>
                            <li>✔ Sans abonnement</li>
                        </ul>
                        <a className="btn" href="checkout.html">Offrir</a>
                    </div>
                </div>
            </section>

            {/* <!-- ===== CTA ===== --> */}
            <section className="section">
                <div className="container card" >
                    <h3 className="section-title" >Commencez gratuitement ✨</h3>
                    <p className="muted">Essayez sans frais puis passez à l’offre qui vous correspond.</p>
                    <div className="actions" >
                        <a className="btn" href="inscription.html">Inscription</a>
                        <a className="btn btn-outline" href="generation.html">Créer un livre</a>
                    </div>
                </div>
            </section>

            {/* <!-- ===== Footer ===== --> */}
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
        </>
    )
}