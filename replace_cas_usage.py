#!/usr/bin/env python3
import re

# Lire le fichier original
with open('src/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Lire le nouveau contenu de la route
with open('cas-usage-new-route.txt', 'r', encoding='utf-8') as f:
    new_route = f.read()

# Pattern pour trouver la route cas-usage complète
# De app.get('/cas-usage' jusqu'à la fermeture })
pattern = r"(// ============================================================================\n)?app\.get\('/cas-usage',.*?\n\}\)"

# Remplacer
new_content = re.sub(
    pattern,
    new_route.strip(),
    content,
    flags=re.DOTALL
)

# Écrire le résultat
with open('src/index.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Route /cas-usage remplacée avec succès!")
