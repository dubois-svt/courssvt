# Activité : Programmer un robot

!!! note "Compétences"

    Passer d'un langage à un autre
    Utiliser l'outil numérique 

!!! warning "Consignes"

    Pour chaque défi du document 3 compléter l’algorigramme correspondant et programmer le robot pour qu’il réalise le défi.
    
??? bug "Critères de réussite"
    - 

**Document 1 Le rover Curiosity**

<div markdown style="display:flex; flex-direction: row;">

<div markdown style="display:flex; flex: 1 1 0; flex-direction: column;">

![](pictures/photoCuriosity.png){: style="width:300px;"}

</div>


<div markdown style="display:flex;  flex: 2 1 0; flex-direction: column;">
Le rover Curiosity est un vrai laboratoire d’analyse : 900 kg dont 80 uniquement en instruments scientifiques, 3 m de long, 2,7 m de large et 2,1m de haut soit environ les proportions d’une petite voiture.
Il peut se déplacer grâce à six roues (à une vitesse moyenne de l’ordre de quelques dizaines de centimètres par heure) et un générateur d’énergie nucléaire au plutonium. 

</div>

</div>


<div markdown style="display:flex; flex-direction: row;">
<div markdown style="display:flex; flex-direction: column;">

**Document 2 Les éléments présents sur le mBot**

1. Écran LED
2. interface programmable avec LED
3. Bouton 
4. Moteur et Roues
5. Capteur ultrasons pour évaluer les distances devant le robot
6. Module suiveur de ligne qui détecte les couleurs
-  Batterie

</div>


![](pictures/photomBot.png){: style="width:600px;"}

</div>

**Document 3 liste des défis**

1. Au démarrage du robot, faire clignoter 5 fois en rouge puis vert les LED RGB du robot à gauche et à droite. (laisser chaque lumière allumée une seconde)
2. Faire avancer un robot à 50% de sa vitesse
3. Faire avancer un robot et s'arrêter devant un obstacle, lorsque la distance est plus petite que 10 cm.
4. Créer un programme infini qui fait avancer un robot  puis tourner à droite quand il rencontre un obstacle (attention il faudra le laisser tourner pendant 1 seconde, donc attendre une seconde avant de faire autre chose)
5. Créer un programme infini qui fait suivre une ligne au robot.


<div markdown style="display:flex; flex-direction: row;">

![Algorigramme du défi 1](pictures/algorigrammeDefi1.png){: style="width:300px;"}

![Algorigramme du défi 2](pictures/algorigrammeDefi2.png){: style="width:300px;"}

</div>

<div markdown style="display:flex; flex-direction: row;">

![Algorigramme du défi 3](pictures/algorigrammeDefi3.png){: style="width:300px;"}

![Algorigramme du défi 4](pictures/algorigrammeDefi4.png){: style="width:300px;"}
</div>

![Algorigramme du défi 5](pictures/algorigrammeDefi5.png){: style="width:800px;"}


**Document 4 Fiche méthode utilisation du logiciel mBlock**


<ol markdown>
<li>Ouvrir le logiciel mBlock</li> 

![](pictures/tutomBlock1.png){: style="width:600px;"}


<li>Paramétrer le programme pour le robot</li> 

![](pictures/tutomBlock2.png){: style="width:600px;"}

<li>Connecter le robot, brancher le câble USB au robot et au PC, puis allumer le robot (s’il se met à rouler retourner le)</li> 
<li>Dans la zone de programmation, insérer un bloc « Lorsque le mBot(mcore) démarre »  et un bloc « attendre jusqu’à » avec un bloc « sur appui du bouton Carte pressé ? ». Tous les blocs que vous rajouterez devront se situer sous ce bloc.</li>

![](pictures/tutomBlock3.png){: style="width:400px;"}

Exemple : 

![](pictures/tutomBlock4.png){: style="width:400px;"}



<li>Téléverser (= envoyer le programme au robot), cliquer sur Téléverser dans la zone 4, puis attendre.</li> 

<li>Débrancher le robot et pour lancer le programme téléversé, appuyer sur le bouton situé au-dessus</li> 
</ol>