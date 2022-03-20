# ![left 100%](https://raw.githubusercontent.com/kohkohdriss/archive/main/images/Logo_OpenClassrooms.png) OpenClassrooms-Développeur Web

_`Début de formation  Avril/2021`_

## Auteur

👤 &nbsp; **Driss KOHKOH** [🇫🇷 Contactez moi 🇬🇧](<kohkoh.driss@gmail.com>)

* Github: [@Driss Kohkoh](https://github.com/kohkohdriss)
* LinkedIn: [@kohkoh driss](https://www.linkedin.com/in/driss-kohkoh/)
* Visitez ==> 🏠 [e-portfolio](https://driss-kohkoh.jimdosite.com/)

***
## 📎 Projet 7 - Création d'un réseau social d’entreprise

Le projet 7 consiste à construire  (Frontend et Backend) un réseau social interne pour les employés de Groupomania. En utilisant une organisation "agile", nous avons "Carte blanche" avec quelques orientations et contraintes.

* Fonction, partager/commenter des gifs genre le site 9GAG.
* Fonction, écrire/partager des articles à la façon de Reddit.
* Utiliser le langage SQL pour le stockage de données.
* Les données de connexion doivent être sécurisées.

L'un des employés du groupe testera un MVP du produit avec une seule des deux fonctions demandées.

* <span style="color:green">Nous avons choisi de présenter " Pouvoir partager et commenter des gifs ".</span>

### Objectifs et Compétences évalué

* Gérer un stockage de données à l'aide de SQL
* Personnaliser le contenu envoyé à un client web
* Implémenter un stockage de données sécurisé en utilisant SQL
* Authentifier un utilisateur et maintenir sa session

***

## 🔨 Installation

### Pré requis
- NodeJS v16.13.2
- @vue/cli 4.5.15
- mySQL
- Wampserver
# installation de Wampserver
- après l'installation de l'environement Wampserver pour administrer la base de données 
- lancer `http://localhost/` et choisir ` PhpMyAdmin 5.1.1 ` 
- sur l'interface `http://localhost/phpmyadmin/` vous vous connecter `utilisateur : root` et votre  mot de pass

Une des sauvegardes de base de données devra être importée
```source/Groupomania.sql```

| email administrateur                        | Mot de passe    |
| :-------------:               |:--------------: |
| administrateur@groupomania.fr | kohkoh88      |

## Dossier Backend
Comme son nom l'indique, ce dossier contient la partie serveur de notre application.

1. Après le télechargement du dossier, vous lancez `npm install` 
2. Puis lancez le serveur en tapant la commande : `nodemon server`.

- Le serveur doit fonctionner sur [`http://localhost:3000/`](http://localhost:3000/).

## Dossier Frontend
Comme son nom l'indique, ce dossier contient la partie site de notre application.

1. Après le télechargement du dossier, vous lancez `npm install` 
2. Puis lancez le serveur en tapant la commande : `npm run serve`.

- Le serveur doit fonctionner sur [`http://localhost:8080/`](http://localhost:8080/).

## NOTES:
- Au lancement du serveur backend, la base de données sera créée automatiquement.
- Le compte administrateur sera crée en même temps que le premier utilisateur.
- Ces informations de compte sont définies dans le fichier `.env`

### Utilisé dans ce projet

* Voir : [Le projet 7 "Groupomania" sur OpenClassrooms](https://openclassrooms.com/fr/paths/185/projects/677/assignment "Cliquez pour voir le projet")
* Voir : [Les spécifications fonctionnelles donnée par le client](documents/spécifications_fonctionnelles.pdf)

| Langages       | et              | outils             |
| :-------------: |:--------------: | :-----------------:|
| HTML5           | Node.js         | Git/GitHub         |
| CSS3            | Vue.js          | Visual Studio Code |
| Javascript      | Sequelize      | WCAG               |
|    xXx          | MySQL           |        xXx         |

***
### 🚦Les documents de présentation de la soutenance

→ [Voir les spécifications fonctionnelles](./documents/sp%C3%A9cifications_fonctionnelles.pdf)\
→ [Voir le schéma de la base de données](./documents/Sch%C3%A9ma%20de%20la%20base%20de%20donn%C3%A9es.pdf)\