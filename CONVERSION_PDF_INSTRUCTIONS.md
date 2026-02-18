# 📄 INSTRUCTIONS CONVERSION PDF

## 🎯 FICHIER À CONVERTIR
**RAPPORT_FINAL_QUUBE_IA_SANTE.md** (22 KB)

---

## 🛠️ MÉTHODES DE CONVERSION

### Méthode 1 : Pandoc (Recommandée) ⭐
```bash
pandoc RAPPORT_FINAL_QUUBE_IA_SANTE.md -o RAPPORT_FINAL_QUUBE_IA_SANTE.pdf \
  --pdf-engine=xelatex \
  --variable geometry:margin=2cm \
  --variable fontsize=11pt \
  --variable mainfont="Arial" \
  --toc \
  --toc-depth=2
```

**Avantages** :
- Table des matières automatique
- Mise en page professionnelle
- Emojis préservés (avec xelatex)
- Qualité production

**Installation** :
```bash
# Ubuntu/Debian
sudo apt-get install pandoc texlive-xetex

# macOS
brew install pandoc basictex
```

---

### Méthode 2 : Markdown to PDF (VS Code)
1. Installer extension **"Markdown PDF"**
2. Ouvrir `RAPPORT_FINAL_QUUBE_IA_SANTE.md`
3. Clic droit → "Markdown PDF: Export (pdf)"

**Avantages** :
- Simple et rapide
- Pas de ligne de commande
- Intégré IDE

---

### Méthode 3 : Typora (GUI)
1. Télécharger Typora : https://typora.io
2. Ouvrir le fichier Markdown
3. Fichier → Exporter → PDF

**Avantages** :
- Interface graphique
- Aperçu temps réel
- Thèmes professionnels

---

### Méthode 4 : Outils en ligne
- **Dillinger** : https://dillinger.io (import Markdown, export PDF)
- **Markdown to PDF** : https://www.markdowntopdf.com
- **CloudConvert** : https://cloudconvert.com/md-to-pdf

**Avantages** :
- Aucune installation
- Accessible partout
- Gratuit

---

## 🎨 PERSONNALISATION PDF

### Ajout logo entreprise (Pandoc)
```bash
pandoc RAPPORT_FINAL_QUUBE_IA_SANTE.md -o rapport.pdf \
  --pdf-engine=xelatex \
  --include-before-body=header.tex \
  --variable geometry:margin=2cm
```

**Créer header.tex** :
```latex
\begin{center}
\includegraphics[width=4cm]{public/static/logo-quube.svg}
\end{center}
```

### Style personnalisé
```bash
pandoc RAPPORT_FINAL_QUUBE_IA_SANTE.md -o rapport.pdf \
  --pdf-engine=xelatex \
  --css=style.css \
  --variable geometry:margin=2.5cm \
  --variable fontsize=12pt \
  --variable mainfont="Helvetica"
```

---

## ✅ CHECKLIST POST-CONVERSION

Vérifier le PDF généré :
- [ ] Table des matières complète
- [ ] Emojis affichés correctement
- [ ] Tableaux formatés proprement
- [ ] Images/logos visibles
- [ ] Liens cliquables
- [ ] Pas de pages vides
- [ ] Numérotation pages
- [ ] Marges correctes

---

## 📦 RÉSULTAT ATTENDU

**Nom fichier** : `RAPPORT_FINAL_QUUBE_IA_SANTE.pdf`  
**Taille estimée** : 300-500 KB  
**Pages** : ~25-30 pages  
**Format** : A4  
**Qualité** : Production  

---

## 🚀 COMMANDE RAPIDE (Pandoc)

```bash
cd /home/user/webapp

# Conversion basique
pandoc RAPPORT_FINAL_QUUBE_IA_SANTE.md -o rapport.pdf

# Conversion optimisée
pandoc RAPPORT_FINAL_QUUBE_IA_SANTE.md -o RAPPORT_FINAL_QUUBE_IA_SANTE.pdf \
  --pdf-engine=xelatex \
  --variable geometry:margin=2cm \
  --variable fontsize=11pt \
  --toc \
  --toc-depth=2 \
  --highlight-style=tango
```

---

## 📧 PARTAGE CLIENT

Une fois le PDF généré, vous pouvez :
1. **Email** : Joindre le PDF (< 1MB)
2. **GitHub** : Ajouter dans repo (non recommandé pour fichiers binaires)
3. **Google Drive / Dropbox** : Partager lien
4. **Cloudflare R2** : Upload sur CDN du projet

---

**Le fichier Markdown est déjà prêt et optimisé pour conversion PDF !** ✅
