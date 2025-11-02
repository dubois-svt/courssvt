# Activité : Exercices d’application

## Exercice 1 : Moyens de stockage

!!! note "Compétences"

    Trouver et utiliser des informations 

!!! warning "Consignes"

    1. ous avez un document de 3500 Mo à enregistrer , vous devez choisir un moyen de stokage pour le sauvegarder. Quel objet faut-il utiliser ? 


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

<div markdown style="display: flex; flex-direction: column">

![](pictures/sambaedu.png)

</div>
<div markdown style="display: flex; flex-direction: column">

Le collège a un réseau informatique comportant des espaces de stockage.

Trois répertoires sont à votre disposition.

L’espace personnel (lecteur K:) qui n’est accessible que par l'utilisateur.

L’espace de travail (lecteur H:) contient deux répertoires :
- un répertoire « _travail » : où les enseignants peuvent déposer un document. Les élèves n’ont que le droit en lecture sur ce répertoire et ne peuvent donc pas modifier les documents présents.
Le répertoire de l’élève « identifiant_eleve » : l’élève peut y sauvegarder ses travaux. Ce dossier est accessible en lecture et écriture par l’ensemble des professeurs de la classe. 

</div>

</div>


'''
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
    D --> I(Compatabilité) 
    C --> J(pnom)
    J --> T(Contrôle 2025.txt)
    I --> K(2025)
    I --> L(2024)
    I --> M(2023)
    M --> N(Contrôle 2023.txt)
    K --> R(Contrôle 2025.txt)
    L --> S(Contrôle 2024.txt)

'''
