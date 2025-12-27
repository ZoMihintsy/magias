# 🚀 Projet Laravel magia

Petit guide rapide pour installer et lancer l'application.

## 🛠 Installation

## version 

php : >= 8.2 

Node : >= 22.*

Npm : >= 11.6

1. **Cloner le projet**

   git clone <url-du-depot>
   cd <nom-du-projet>
Installer les dépendances

composer install
npm install
Configuration

cp .env.example .env
php artisan key:generate
(Pense à configurer ta base de données dans le fichier .env)

Base de données

php artisan migrate
🏃 Lancement
Lance ces deux commandes dans deux terminaux différents :

Terminal 1 (Serveur PHP) :

php artisan serve
Terminal 2 (Compilation React) :

npm run dev
Accès : http://127.0.0.1:8000

📝 Infos utiles
Pages : resources/js/Pages/ (fichiers .tsx)

Composants : resources/js/Components/ (fichiers .tsx)

Routes : routes/web.php

Build Production : npm run build