# 📦 BACKUP PAGE "CAS D'USAGE" - VERSION ORIGINALE

**Date de sauvegarde** : 17 février 2026  
**Version du site** : Phase 2 complète (conformité 85%)  
**Commit Git** : `0fe1193`

---

## 📋 CONTENU SAUVEGARDÉ

### 1️⃣ **BACKUP_CAS_USAGE_PAGE_ORIGINAL.tsx** (47 KB, 933 lignes)
- **Description** : Code JSX complet de la page `/cas-usage`
- **Lignes source** : 168-1100 de `src/index.tsx`
- **Contenu** :
  - Hero avec badge animé
  - Social proof bar (4 métriques)
  - Bannière crédibilité
  - 9 badges d'expertise (HAS, ARS, RGPD, etc.)
  - Filtres par persona (8 catégories)
  - **23 cartes cas d'usage** détaillées avec :
    - Icône colorée
    - Titre
    - Métrique de résultat
    - Description
    - Tags (persona + domaine)
    - CTA "Voir le détail"

### 2️⃣ **BACKUP_CAS_USAGE_CSS_ORIGINAL.css** (16 KB, 716 lignes)
- **Description** : Feuille de style complète pour la page Cas d'usage
- **Fichier source** : `public/static/cas-usage.css`
- **Styles inclus** :
  - `.hero-cas-usage` : Hero avec gradient violet-bleu
  - `.proof-bar` : Barre de métriques sociales
  - `.credibility-banner` : Bannière d'approche terrain
  - `.expertise-badges` : Badges horizontaux (RGPD, HAS, etc.)
  - `.filter-section` : Système de filtres par persona
  - `.use-case-card` : Cartes cas d'usage avec hover
  - Animations (dot-pulse, fade-in, etc.)
  - Responsive mobile (@media queries)

---

## 🎯 POURQUOI CETTE SAUVEGARDE ?

La page "Cas d'usage" actuelle contient **8 sections** riches en contenu :
1. Hero
2. Social proof bar
3. Bannière crédibilité
4. Badges d'expertise
5. Filtres
6. 23 cartes cas d'usage
7. Section "Avant/Après"
8. CTA final

**Phase 3** prévoit une **simplification** (8 → 4 sections) pour :
- ✅ Réduire le scrolling
- ✅ Améliorer l'expérience mobile
- ✅ Rendre la page plus digeste

Cette sauvegarde permet de **restaurer la version originale** si besoin.

---

## 🔄 COMMENT RESTAURER ?

### Option A : Restauration complète

```bash
# 1. Restaurer le code JSX
cd /home/user/webapp
cp BACKUP_CAS_USAGE_PAGE_ORIGINAL.tsx src/index.tsx.RESTORE

# 2. Remplacer les lignes 168-1100 dans src/index.tsx
# (utiliser un éditeur ou sed)

# 3. Restaurer le CSS
cp BACKUP_CAS_USAGE_CSS_ORIGINAL.css public/static/cas-usage.css

# 4. Rebuild
npm run build

# 5. Redémarrer
pm2 restart webapp
```

### Option B : Restauration partielle (certaines sections uniquement)

Ouvrir `BACKUP_CAS_USAGE_PAGE_ORIGINAL.tsx` et copier les sections souhaitées :
- Lignes 189-206 : Social proof bar
- Lignes 208-223 : Bannière crédibilité
- Lignes 225-236 : Badges d'expertise
- Lignes 238-251 : Filtres
- Lignes 254-1050 : 23 cartes cas d'usage

---

## 📊 STRUCTURE DES 23 CARTES

| # | Titre | Persona | Métrique | Tags |
|---|-------|---------|----------|------|
| 1 | Rapport d'activité en 2h | Direction | –70% temps | Direction, ARS, CPOM |
| 2 | Projets personnalisés 30 min | Soins | 30 min | Soins, HAS, PP |
| 3 | Supports FALC en clics | Éducatif | ×5 supports/semaine | Éducatif, FALC, Accessibilité |
| 4 | Préparation CA/CVS | Direction | 1h au lieu d'1 jour | Direction, Gouvernance |
| 5 | Protocoles HAS | Qualité | –60% veille | Qualité, Soins, HAS |
| 6 | Transmissions ciblées | Soins | 1 min synthèse | Soins, Coordination |
| 7 | Plan de formation | RH | 1 jour au lieu d'1 semaine | RH, Formation, GPEC |
| 8 | Activités éducatives | Éducatif | ∞ idées | Éducatif, Personnalisation |
| 9 | Appels à projets | Direction/RH | ×3 rapidité | Direction, Admin, AAP |
| 10 | Offres d'emploi ciblées | RH | 20 min rédaction | RH, Recrutement |
| 11 | Audits de pratiques | Qualité | –50% temps | Qualité, Soins |
| 12 | Communication interne | Direction | 15 min newsletter | Direction, Communication |
| 13 | Analyse territoriale | Stratégie | Veille auto | Stratégie, Open Data |
| 14 | CPOM/EPRD | Data/Finance | –50% temps | Direction, Finance |
| 15 | Valorisation projets | Direction | Support 1h | Direction, Communication |
| 16 | Grilles d'évaluation | Qualité | Bibliothèque prête | Qualité, HAS |
| 17 | Support de sensibilisation | Éducatif | 10 min création | Éducatif, Prévention |
| 18 | Analyse SERAFIN-PH | Data | Indicateurs auto | Data, CNSA |
| 19 | Bilans d'activité services | Direction | 2h multi-services | Direction, Pilotage |
| 20 | Base documentaire intelligente | Qualité | Recherche 30s | Qualité, Documentation |
| 21 | Cahiers des charges achats | Achats | 1 jour au lieu de 3 | Achats, Appels d'offres |
| 22 | Tableaux de bord RH | RH | Indicateurs temps réel | RH, Data |
| 23 | Diagnostics RGPD | Qualité/SI | Checklist auto | Qualité, RGPD, SI |

---

## 🗂️ EMPLACEMENT DES FICHIERS

```
/home/user/webapp/
├── BACKUP_CAS_USAGE_PAGE_ORIGINAL.tsx    ← Code JSX complet (933 lignes)
├── BACKUP_CAS_USAGE_CSS_ORIGINAL.css     ← Styles complets (716 lignes)
├── BACKUP_CAS_USAGE_README.md            ← Ce fichier (documentation)
└── src/
    └── index.tsx                          ← Fichier actif (ligne 168-1100 = page Cas d'usage)
```

---

## 🎨 MODIFICATIONS PHASE 3 PRÉVUES

La simplification Phase 3 conservera :
- ✅ Hero (épuré)
- ✅ 23 cartes cas d'usage (avec filtres)
- ✅ CTA final

Sera fusionné/simplifié :
- 🔀 Social proof bar → intégré dans Hero
- 🔀 Bannière crédibilité → fusionnée avec Hero
- ❌ Badges d'expertise → simplifiés ou retirés
- ❌ Section "Avant/Après" → déplacée page Services

**Objectif** : Passer de 8 sections à 4 sections sans perdre l'essentiel.

---

## 📞 CONTACT

Si besoin de restauration ou questions sur ce backup :
- **Commit Git** : `0fe1193`
- **Production actuelle** : https://quube-ia-sante2.pages.dev/cas-usage
- **Date backup** : 17/02/2026

---

## ✅ CHECKLIST RESTAURATION

- [ ] Vérifier que les fichiers BACKUP_* existent
- [ ] Comparer les lignes avec `diff`
- [ ] Tester localement avant de déployer
- [ ] Vérifier le responsive mobile
- [ ] Tester les filtres JavaScript
- [ ] Valider les 23 cartes s'affichent correctement
- [ ] Rebuild + redéploiement

---

*Sauvegarde créée automatiquement avant refonte Phase 3*  
*QUUBE·IA Santé - Conformité charte 85%*
