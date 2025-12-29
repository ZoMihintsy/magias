import { Input } from "@headlessui/react";
import Navbar from "./Nav";
import { Label } from "@radix-ui/react-label";

export default function Creer() {
    return (<>

        <Navbar />
        <section className="section-creer">
            <div className="container gen-hero">
                <div className="gen-hero-text">
                    <span className="badge">🎈 Doux et rapide</span>
                    <h1 className="section-title" >
                        Créez <span className="txt-brand">un livre magique</span> pour votre enfant
                    </h1>
                    <p className="muted">Renseignez quelques informations ; nous générons une <strong>histoire illustrée</strong> unique, adaptée à son âge et à ses goûts.</p>
                    <div className="gen-reassure">
                        <span>🔒 Données privées</span>
                        <span>✨ Illustrations douces</span>
                        <span>⬇️ PDF en 1 clic</span>
                    </div>
                </div>
                <div className="gen-illustration card" aria-hidden="true">
                    <svg className="float star" viewBox="0 0 24 24"><path fill="#F6C453" d="M12 17l-5.5 3l1.5-6L3 9l6-.5L12 3l3 5.5l6 .5l-5 5l1.5 6z" /></svg>
                    <svg className="float planet" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="8" fill="#6B5AED" />
                        <ellipse cx="12" cy="12" rx="11" ry="3.8" fill="#B9AEFF" opacity=".35" />
                    </svg>
                    <svg viewBox="0 0 800 520" width="100%" height="100%">
                        <defs>
                            <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stop-color="#fff3e7" />
                                <stop offset="100%" stop-color="#eaf7ff" />
                            </linearGradient>
                        </defs>
                        <rect width="800" height="520" fill="url(#gg)" />
                        <ellipse cx="400" cy="420" rx="260" ry="60" fill="#f7e7d1" />

                        <circle cx="470" cy="220" r="50" fill="#ffa46c" />
                        <rect x="420" y="258" width="140" height="120" rx="28" fill="#5ec0a3" />

                        <circle cx="355" cy="250" r="40" fill="#ffb58a" />
                        <rect x="320" y="282" width="100" height="90" rx="22" fill="#f1893c" />
                        {/* <!-- livre --> */}
                        <rect x="380" y="320" width="160" height="56" rx="8" fill="#2bb3d8" />
                        <line x1="460" y1="320" x2="460" y2="376" stroke="#e6f8ff" stroke-width="2" />
                        {/* <!-- étoiles --> */}
                        <g opacity=".65">
                            <circle cx="170" cy="140" r="6" fill="#F6C453" />
                            <circle cx="640" cy="120" r="5" fill="#F6C453" />
                            <circle cx="680" cy="170" r="4" fill="#F6C453" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>


        <section className="section" >
            <div className="container">
                <ol className="gen-steps">
                    <li className="done"><span className="dot">1</span><span>Personnaliser</span></li>
                    <li><span className="dot">2</span><span>Prévisualiser</span></li>
                    <li><span className="dot">3</span><span>Télécharger</span></li>
                </ol>
            </div>
        </section>


        <section className="section">
            <div className="container grid-2">

                <form className="card form" action="#" method="post" >
                    <h2 className="section-title" >Informations de l’enfant</h2>
                    <div className="row">
                        <div>
                            <label >Prénom de l’enfant</label>
                            <Input id="prenom" name="prenom" placeholder="Ex. Léna" required />
                        </div>
                        <div>
                            <label>Âge</label>
                            <select id="age" name="age" required>
                                <option value="">-- Sélectionner --</option>
                                <option>3</option><option>4</option><option>5</option>
                                <option>6</option><option>7</option><option>8</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div>

                            <select id="pronoms" name="pronoms" required>
                                <option value="">-- Sélectionner pronoms --</option>
                                <option>elle</option>
                                <option>il</option>
                                <option>iel</option>
                            </select>
                        </div>
                        <div>

                            <select id="langue" name="langue" required>
                                <option value="">-- Sélectionner langue --</option>
                                <option>Français</option>
                                <option>Anglais</option>
                            </select>
                        </div>
                    </div>

                    <h2 className="section-title" >Histoire & style</h2>
                    <div className="row">
                        <div>

                            <select id="theme" name="theme" required>
                                <option value="">-- Choisir un thème --</option>
                                <option>Aventure</option>
                                <option>Animaux</option>
                                <option>Espace</option>
                                <option>Château</option>
                                <option>Pirates</option>
                                <option>Contes de fées</option>
                            </select>
                        </div>
                        <div>

                            <select id="duree" name="duree" required>
                                <option value="">-- Sélectionner la dur&eacute;e de lecture--</option>
                                <option>~5 min</option>
                                <option>~8 min</option>
                                <option>~12 min</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div>

                            <select id="moral" name="moral" required>
                                <option value="">-- Sélectionner la morale de l'histoire--</option>
                                <option>Partage</option>
                                <option>Confiance</option>
                                <option>Persévérance</option>
                                <option>Bienveillance</option>
                            </select>
                        </div>
                        <div>

                            <div className="pills" role="group" aria-label="Choisir un ton">
                                <Input type="radio" name="ton" id="ton_fun" value="Amusant" checked />


                                <Input type="radio" name="ton" id="ton_poet" value="Poétique" />


                                <Input type="radio" name="ton" id="ton_avent" value="Aventure" />

                            </div>
                        </div>
                    </div>

                    <div>
                        Notes pour l’illustration (facultatif)
                        <textarea id="notes" name="notes" placeholder="Ex. petit dragon jaune, ciel étoilé, pyjama bleu…"></textarea>
                    </div>


                    <div>
                        Photo de l’enfant (facultatif)
                        <div id="dropzone" className="dropzone">
                            <Input id="photo" name="photo" type="file" accept="image/*" hidden />
                            <p className="muted">
                                Glissez-déposez une image ici ou &nbsp; 
                                <button type="button" className="btn btn-outline" id="browseBtn"> Parcourir</button>
                            </p>
                            <small className="muted">La photo n’est <strong>pas stockée</strong> sans votre consentement.</small>
                        </div>
                        <div id="fileInfo" className="file-info muted" aria-live="polite"></div>
                    </div>

                    <label>
                        <Input type="checkbox" required name="consent" /> J’accepte la politique de confidentialité
                    </label>

                    <div className="actions">
                        <button className="btn" type="button" id="btnPreview">Prévisualiser</button>
                        <button className="btn btn-outline" type="submit">Générer l’histoire</button>
                    </div>

                    <p className="muted">
                        ⓘ Aucune donnée n’est mémorisée avant validation. Vous pourrez éditer avant de télécharger en PDF.
                    </p>
                </form>


                <aside className="card">
                    <h2 className="section-title">Prévisualisation</h2>
                    <div className="notice" >
                        💡 <span className="text-orange-500 font-semi-bold">Astuce :</span> Le thème <strong>Aventure</strong> plaît souvent aux 5–7 ans.
                    </div>

                    <div className="preview-cover">
                        <div className="preview-art" id="previewArt">
                            <em className="muted">Aperçu couverture</em>
                        </div>
                        <div className="preview-meta">
                            <div><strong>Titre :</strong> <span id="pvTitle">—</span></div>
                            <div><strong>Âge :</strong> <span id="pvAge">—</span></div>
                            <div><strong>Thème :</strong> <span id="pvTheme">—</span></div>
                            <div><strong>Ton :</strong> <span id="pvTon">Amusant</span></div>
                            <div><strong>Durée :</strong> <span id="pvDur">—</span></div>
                        </div>
                    </div>

                    <div className="progress muted" id="pvHint" >
                        Cliquez sur “Prévisualiser” pour voir un aperçu dynamique ✨
                    </div>

                    <div className="actions">
                        <a className="btn btn-outline" href="themes.html">Changer de thème</a>
                        <a className="btn" href="tarification.html">Voir les offres</a>
                    </div>
                </aside>
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

    </>)
}