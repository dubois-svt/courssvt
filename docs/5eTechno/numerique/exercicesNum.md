# Activité : Exercices d’application

## Exercice 1 : Moyens de stockage

!!! note "Compétences"

    Trouver et utiliser des informations 

!!! warning "Consignes"

    1. Vous avez un document de 3500 Mo à enregistrer , vous devez choisir un moyen de stokage pour le sauvegarder. Quel objet faut-il utiliser ? 


| Nom de l’objet  | Taille  |
|--|--|
| Clé USB | 64Go   |
| CD | 700 Mo|
| Disque externe | 500 Go |


## Exercice 2 : Arborescences des données



!!! note "Compétences"

    Trouver et utiliser des informations 

!!! warning "Consignes"

    1. Donner le chemin d'accès où se trouve le fichier nommé "Exercice Incendie.png"
    2. Quel fichier du contrôle 2025 a été complété et rendu par l'élève. Indiquer le chemin complet.


**Document 1 Un système d'information du collège**

<div markdown style="display: flex; flex-direction: row">

<div markdown style="display: flex; flex: 1 1 1; flex-direction: column">

![](pictures/sambaedu.png){: style="width:800px"}
Contrôle
</div>
<div markdown style="display: flex; flex: 1 1 1; flex-direction: column">


Le collège a un réseau informatique comportant des espaces de stockage.

Trois répertoires sont à votre disposition.

L’espace personnel (lecteur K:) qui n’est accessible que par l'utilisateur.

L’espace de travail (lecteur H:) contient deux répertoires :
- un répertoire « _travail » : où les enseignants peuvent déposer un document. Les élèves n’ont que le droit en lecture sur ce répertoire et ne peuvent donc pas modifier les documents présents.
Le répertoire de l’élève « identifiant_eleve » : l’élève peut y sauvegarder ses travaux. Ce dossier est accessible en lecture et écriture par l’ensemble des professeurs de la classe. 

</div>

</div>


``` mermaid

flowchart TD
    A[Racine] --> B(Home K:)
    A --> C(Classe H:)
    B --> D(Devoirs)
    B --> F(Téléchargements)
    C --> G(_travail)
    G --> Q(Contrôle 2025.txt)
    C --> H(Informations)
    H --> P(Exercice Incendie.pdf)
    
    E --> O(LibreOffice.exe)
    B --> E(Documents)
    D --> I(Contrôle) 
    C --> J(pnom)
    J --> T(Contrôle 2025.txt)
    I --> K(2025)
    I --> L(2024)
    I --> M(2023)
    M --> N(Contrôle 2023.txt)
    K --> R(Contrôle 2025.txt)
    L --> S(Contrôle 2024.txt)

```


## Exercice 3 : Sécurité informatique


!!! note "Compétences"

    Trouver et utiliser des informations 

!!! warning "Consignes"

    1. Indiquer les mots de passse qui vous semblent les plus appropriés dans le document 1
    2. Indiquer où est ce que l'on peut télécharer le logiciel VLC sans risque de malware. 

**Document 1 Mots de passe**

Une élève nommée Idia et née le 07072012 veut choisir un mot de passe dans cette liste :

- password
- Xb2Rs583TksuR8
- hakimi
- lesmureaux78
- F25vw
- #q;6ieR28V
- 07072021
- Idia78
- able-skating-rubbed-octopus
- i-have-a-dream


**Document 2 Source possibles pour télécharger le logiciel VLC**
 
Si on recherche sur un moteur de recherche à télécharger le logiciel VLC de Videolan, on obtient les résultats suivants.


![](pictures/resultSearchVLC.png)
 


## Exercice 3 : Cyberviolence


!!! note "Compétences"

    Trouver et utiliser des informations 

!!! warning "Consignes"

    1. Pour chacune de ces situations indiquer s'il s'agi de cyberviolence.


**Document 4 Des situations de cyberviolence ?**


Dire une fois à quelqu’un que vous n’êtes pas d’accord avec lui.

Se regrouper avec des ami(e)s pour se moquer d’une personne.

Diffuser des vraies photos de quelques sans lui demander sans accord

Faire des commentaires sur une photo en évitant d’être désagréable.

Faire un commentaire désagréable à chaque fois que l’on parle d’une personne

Créer un groupe pour s’entraider. 

Utiliser le compte de quelqu’un d’autre et en profiter pour insulter tout le monde en se faisant passer pour lui.



