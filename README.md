# Projet42
Cirious Game CIR2 - Data et Intelligence Artificielle

-------------------------------------------------------------------------------------------------------------------

## Comment lancer PathfAInder ?

A la racine du projet lancer la commande 'python server.py' (vous devez posséder python).

Lancez ensuite Chrome ou Chromium en mode kiosk (sur ubuntu de préférence) :

- pour Chromium 'chromium-browser --kiosk --app=http://127.0.0.1:4242/ --start-fullscreen'

- pour Chrome 'chrome-browser --kiosk --app=http://127.0.0.1:4242/ --start-fullscreen'

Si le mode kiosk ne fonctionne pas vous pouvez simplement accéder au jeu dans n'importe quel navigateur avec cet adresse 'http://127.0.0.1:4242/' à condition d'avoir lancé le serveur python au préalable.


-------------------------------------------------------------------------------------------------------------------

## Descriptif du jeu :

PathfAInder est un jeu de puzzle en vue de dessus qui vous demande de programmer un petit robot pour résoudre le niveau. Vous pouvez attribuer des points dans 4 directions selon 4 couleurs, le nombre de points maximum pour une direction est de 10.

Vous ne pouvez pas modifier les points du robots après l'avoir lancé alors plannifiez bien votre parcours, en cas d'échec vous pouvez relancer le niveau avec R. Pour observer les contrôles appuyez sur Echap.

Vous pouvez aussi jouer en Multijoueur pour faire la course avec un(e) ami(e).

Bonne chance !


-------------------------------------------------------------------------------------------------------------------

## Indication sur l'utilisation du GitHub

### Comment cloner le projet pour commencer à apporter des modifs ?

Allez dans le fichier où vous voulez placer le projet à l'aide de votre terminal.

Utilisez la commande : git clone https://github.com/Milawy/Projet42

### Pour push votre travail

Modifiez le projet puis assurez vous qu'il n'y a pas de bug, ensuite faire un : 
git add nomDuFichier

pour chaque fichier que vous avez ajouté ou modifié.

Puis utilisez la commande : git commit -m "Brève explication de la modif"

Et enfin : git push origin master

### Si vous avez besoin de forcer un git pull

Utilisez la commande : git fetch --all

Puis : git reset --hard origin/master

GG !