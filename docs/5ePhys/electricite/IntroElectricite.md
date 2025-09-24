# Séquence : Électricité 

L'électricité est une énergie que l'on utilise tous les jours. Une de ces utilisations est l'éclairage. 

!!! question "Problématique"

    De quoi a-t-on besoin pour assurer l’éclairage électrique d’une pièce ?    

## Séance 1 : Modélisation d'une lampe de poche

C’est en 1879 que l’Américain Thomas Edison provoque une révolution dans le quotidien des gens. Grâce à lui, les bougies et les lampes à pétrole qui provoquaient de nombreux incendies dans les foyers ont été remplacées par les premières ampoules électriques. Aujourd’hui, une simple pression sur un bouton et nous pouvons avoir de la lumière.

!!! question "Problématique"

    Quels sont les composants électriques constituant la lampe aujourd'hui ?  
    Comment modéliser un circuit électrique ?


[Activité sur la modélisation d'une lampe](../modelisationLampe)

??? abstract "Bilan"
    Un circuit électrique est une chaîne d'objets électriques. Il contient :

    - un générateur qui fournit l'énergie électrique
    - des récepteurs qui la reçoivent (lampe, moteur, fils électrique, interrupteur).


    Pour faire fonctionner des appareils électriques, il faut au minimum que le circuit :

    - ait un générateur
    - soit une boucle fermée.


    Un dipôle est un composant d’un circuit électrique disposant de deux extrémités. Chaque dipôle est représenté dans un circuit par un symbole normalisé.

    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    </style>
    <table markdown class="tg">
    <thead>
    <tr>
        <th class="tg-c3ow" rowspan="2">Pile</th>
        <th class="tg-c3ow" rowspan="2">Générateur</th>
        <th class="tg-c3ow" rowspan="2">Ampoule</th>
        <th class="tg-c3ow" colspan="2">Interrupteur</th>
        <th class="tg-c3ow" rowspan="2">Moteur</th>
        <th class="tg-c3ow" rowspan="2">Fil électrique</th>
    </tr>
    <tr>
        <th class="tg-c3ow">ouvert</th>
        <th class="tg-c3ow">fermé</th>
     </tr>
    </thead>
    <tbody>
        <tr>
            <td class="tg-c3ow">![](Pictures/schemaPile.png)</td>
            <td class="tg-c3ow">![](Pictures/schemaGenerateur.png)</td>
            <td class="tg-c3ow">![](Pictures/schemaAmpoule.png)</td>
            <td class="tg-c3ow">![](Pictures/schemaInterrupteurOuvert.png)</td>
            <td class="tg-c3ow">![](Pictures/schemaInterrupteurFerme.png)</td>
            <td class="tg-c3ow">![](Pictures/schemaMoteur.png)</td>
            <td class="tg-c3ow">![](Pictures/schemaFil.png)</td>
      </tr>
    </tbody>
    </table>



## Séance 2 : Intensité du courant électrique


En 1820, André-Marie Ampère, physicien français, théorise ce que l’on appelle aujourd’hui : le courant électrique. Jusqu’au début du XIXe siècle, les physiciens pensaient que de l’électricité était un fluide qui circulait dans un circuit. Aujourd’hui, nous savons que l’électricité est due au déplacement de charges électriques appelées électrons.

!!! question "Problématique"

    Comment mesurer l’intensité du courant électrique présent dans un circuit ?


[Activité sur l'intensité du courant électrique](../intensiteCourant)

??? abstract "Bilan"
    L’intensité du courant électrique est la quantité de charges électriques (électrons) qui se déplacent pendant un temps donné. 

    Les électrons se déplacent de la borne négative à la borne positive. Par convention, on note le sens du courant électrique de la borne + à la borne -.

    L'intensité se mesure avec un ampèremètre. 
    ![Schéma normalisé d'un ampèremètre](Pictures/schemaAmperemetre.png){: style="width:150px"}

    L’unité de mesure est l’ampère (notée A).  
    Le COM de l'ampèremètre se branche sur la borne - et le A de l'ampèremètre se branche sur la borne +, si le branchement est inversé, l'intensité affichée sera négative.
    
    On parle d’électrisation lorsque le corps humain reçoit une décharge électrique et d’électrocution lorsque cela provoque un arrêt cardiaque.

## Séance 3 : Installation électrique d'une pièce 

Vous vous lancez dans la réalisation des plans électriques de votre salle de classe. Plusieurs contraintes sont à respecter : 
Il doit y avoir un seul générateur.
Il doit y avoir deux lampes. Si une des ampoules grille, l’autre doit continuer à briller quand même.
Il doit y avoir un interrupteur pour allumer et éteindre les deux ampoules en même temps.

!!! question "Problématique :"
    Comment réaliser un circuit électrique répondant à toutes ces contraintes ?



[Activité sur l'installation électrique d'une pièce](../installElectrique)

??? abstract "Bilan"
    Tout comme un interrupteur, une ampoule grillée (ou tout autre dipôle défectueux) ouvre le circuit. Le courant ne peut plus circuler

 
    Il existe deux types de circuit électrique :   
    <table markdown class="tg">
    <tbody markdown>
    <tr markdown>
    <td class="tg-lboi">le circuit en série&nbsp;&nbsp;:</td>
    <td  class="tg-lboi">le circuit en dérivation : </td>
    </tr>
    <tr markdown>
    <td markdown class="tg-lboi">![Schéma d'un circuit en série](Pictures/schemaCircuitSerie.png){: style="width:300px"} </td>
    <td markdown class="tg-lboi"> ![Schéma d'un circuit en dérivation](Pictures/schemaCircuitDerivation.png){: style="width:300px"} </td>
    </tr>
    </tbody>
    </table>

    Dans un circuit en série, il y a une seule boucle. 
    Les dipôles sont dépendants les uns des autres.
    Ils sont branchés les uns à la suite des autres.










    Dans un circuit en dérivation, il y a au moins deux boucles.
    Les dipôles sont indépendants les uns des autres.
    Ils sont branchés les uns aux bornes des autres.



??? info "Infos"

    <table markdown>
    <tbody markdown>
    <tr markdown>
    <td class="tg-lboi">
    Quelques informations supplémentaires : 

    Une boucle est le chemin suivi par le courant électrique dans le circuit, partant de la borne positive du générateur pour arriver sur sa borne négative (sens inverse de circulation des électrons).


    Exemple: il y a deux boucles, la rouge et la verte.


    Dans une boucle, il y a plusieurs branches. Une branche est une portion de circuit qui comporte un dipôle. 


    Exemple: dans la boucle rouge, il y a la branche orange et la branche bleue.




    Si trois branches ou plus sont reliées en un même point, ce point est appelé nœud.


    Exemple : les branches orange, bleu et violette se rejoignent en un même point, c’est un nœud. Il y en a deux.
    </td>
    <td  class="tg-lboi">
    ![](Pictures/schemaCircuitBoubleBranche.png){: style="width:300px"}
    </td>
    </tr>
   
    </tbody>


    </table>


## Séance 4 : Exercices de révision

[Activité exercices de révision](../exercicesElectricite)

