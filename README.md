# GROUPOMANIA SOCIAL NETWORK
- NodeJS v16.13.2
- @vue/cli 4.5.15
- mySQL
- Wampserver
# installation de Wampserver
- après l'installation de l'environement Wampserver pour administrer la base de données 
- lancer `http://localhost/` et choisir ` PhpMyAdmin 5.1.1 ` 
- sur l'interface `http://localhost/phpmyadmin/` vous vous connecter `utilisateur : root` et votre  mot de pass

## Dossier Backend
Comme son nom l'indique, ce dossier contient la partie serveur de notre application.

1. Après le télechargement du dossier, vous lancez `npm install` 
2. Tapez la commande suivante : `npm start`. 
3. Puis lancez le serveur en tapant la commande : `nodemon server`.

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