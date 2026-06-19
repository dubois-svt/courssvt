import os


path = '/home/mica/courssvt/courssvt/'


def extraire_section(fichier_md, debut, fin, limitedebut, limitefin):
    try:
        with open(fichier_md, 'r', encoding='utf-8') as f:
            contenu = f.read()

        # Trouver l'index de début et de fin
        idx_debut = contenu.find(debut)
        idx_fin = contenu.find(fin)

        if idx_debut == -1 or idx_fin == -1:
            return "Balises non trouvées."

        # Extraire et retourner la section
        return contenu[idx_debut+limitedebut:idx_fin-limitefin + len(fin)]
    except FileNotFoundError:
        print(f"❌ Erreur : le fichier '{fichier_md}' n'existe pas.")

print("---")
print("initialExpandLevel: 1")
print("title: Mon titre")
print("focusOnBranch: true")
print("---")


# Ouvre le fichier en lecture (utf-8 pour éviter les problèmes d'accents)
with open("sommaire.md", "r", encoding="utf-8") as f:
    for ligne in f:
        # On enlève les espaces et les retours à la ligne
        ligne = ligne.strip()
        if not ligne:
            continue  # ignore les lignes vides
        if any(x in ligne for x in ['- 5e', '- 3e', '- 4e']):
            print()
            print("#",ligne[2:])
        elif ("Séquence" in ligne):
            print()
            print("##",ligne[2:])
        elif (not(any(x in ligne for x in ['Fiche', 'Exercice', 'Introduction']))):
            parties = ligne.split(":")
            titre =  extraire_section((parties[1][1:]), "# ", "!!!", 2, 5 )
            print("###",titre)
            compétences =  extraire_section((parties[1][1:]), "!!! note \"Compétences\"", "!!! warning", 24, 13 )
            print(compétences)

