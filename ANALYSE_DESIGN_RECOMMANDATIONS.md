# 📊 ANALYSE DESIGN & STRUCTURE - QUUBE·IA SANTÉ
## Analyse complète et recommandations d'amélioration

**Date**: 17 février 2026  
**Site analysé**: https://quube-ia-sante2.pages.dev  
**Référence charte**: QUUBE_charte.pdf (Mai 2024)

---

## 🎯 SYNTHÈSE EXÉCUTIVE

### Points forts actuels ✅
1. **Typographie massive** respectée (H1 jusqu'à 9rem, H2 5.5rem)
2. **Palette officielle QUUBE** appliquée (Noir #000, Gris #F1F1F1, couleurs accent)
3. **Architecture de l'information** claire (5 pages bien structurées)
4. **Contenu riche** (23 cas d'usage, 3 offres de services détaillées)

### Points à améliorer 🔴
1. **Formes géométriques** trop petites et discrètes (hero::before actuel)
2. **Sections trop nombreuses** sur certaines pages (fragmentation visuelle)
3. **Cartes blanches uniformes** manquent de personnalité QUUBE
4. **Navigation mobile** non testée/optimisée
5. **Espacements** incohérents entre sections
6. **Hiérarchie visuelle** pas assez marquée malgré la typographie

---

## 📐 ANALYSE PAR SECTION

### 1. STRUCTURE GLOBALE

#### État actuel
```
Header (fixe, blanc)
├── Navigation horizontale (5 liens)
└── Logo QUUBE·IA

5 Pages:
├── Accueil (6 sections)
├── Cas d'usage (9 sections dont 23 cartes)
├── Services (5 sections dont 3 offres détaillées)
├── À propos (5 sections)
└── Contact (3 sections + FAQ)
```

#### Problèmes identifiés

**P1 - Trop de sections par page**
- Accueil: 6 sections → fragmentation visuelle
- Services: 5 sections → trop de scrolling
- Solution: **Regrouper les sections connexes**

**P2 - Répétition de structure**
- Toutes les pages suivent le même modèle (Hero → Section claire → Section alt → CTA)
- Manque de différenciation visuelle entre pages
- Solution: **Varier les layouts par type de page**

**P3 - Espacements inconsistants**
- `--section-spacing: clamp(60px, 8vw, 100px)` trop variable
- Sauts visuels entre sections
- Solution: **Espacements fixes par type de rupture**

---

### 2. TYPOGRAPHIE

#### Comparaison avec la charte QUUBE

| Élément | Actuel | Charte QUUBE 2024 | Statut |
|---------|--------|-------------------|---------|
| Font famille | Inter (fallback) | **TWK Everett** (requis) | ❌ Non conforme |
| H1 taille | clamp(3rem→9rem) | 24pt base, uppercase | ⚠️ Trop variable |
| H2 taille | clamp(2.5rem→5.5rem) | 18pt base, uppercase | ⚠️ Trop variable |
| Casse | Uppercase (✓) | Uppercase requis | ✅ Conforme |
| Hiérarchie | 9 niveaux définis | 9 niveaux (10.5→24pt) | ⚠️ Désynchronisé |

#### Recommandations typographie

**R1 - Charger TWK Everett**
```css
/* À ajouter dans <head> */
<link rel="stylesheet" href="https://use.typekit.net/xyz.css">
/* OU */
@font-face {
  font-family: 'TWK Everett';
  src: url('/static/fonts/TWKEverett-Medium.woff2');
}

:root {
  --font-primary: 'TWK Everett', 'Inter', -apple-system, sans-serif;
}
```

**R2 - Simplifier les clamp()**
- H1 Hero: `clamp(4rem, 10vw, 8rem)` au lieu de 3→9rem
- H2 Sections: `clamp(2.5rem, 6vw, 4.5rem)` au lieu de 2.5→5.5rem
- Plus prévisible sur tablette

**R3 - Ajouter variantes de poids**
- Medium (500) pour titres
- Book (400) pour corps de texte
- Bold (700) pour CTA et accents

---

### 3. COULEURS & PALETTE

#### État actuel vs Charte

| Couleur | Usage actuel | Charte QUUBE | Recommandation |
|---------|--------------|--------------|----------------|
| Noir #000 | Texte, bordures, boutons | ✅ Identité | ✅ Bien utilisé |
| Gris #F1F1F1 | Fond sections | ✅ Identité (préféré au blanc) | ✅ Correct |
| Blanc #FFF | Cartes, header | ⚠️ Trop omniprésent | 🔄 Remplacer par gris léger |
| Jaune #FCF474 | Badges (peu) | Accent 1 | 🔴 Sous-utilisé |
| Rouge #F96566 | Tags "avant/après" | Accent 2 | 🟡 OK mais timide |
| Violet #7E71C4 | Gradients hero | Accent 3 | ✅ Bien utilisé |
| Bleu #95CFFF | Gradients hero | Accent 4 | ✅ Bien utilisé |
| Vert #37CAB0 | CTA, hover cartes | Accent 5 (principal) | ✅ Excellente utilisation |

#### Problèmes identifiés

**P4 - Cartes trop "blanches"**
- Toutes les cartes ont `background: #FFF`
- Charte recommande le gris #F1F1F1 comme fond de référence
- Solution: **Cartes sur fond gris léger #F7F7F7**

**P5 - Jaune presque absent**
- Le jaune #FCF474 est un accent QUUBE mais peu utilisé
- Seulement dans les badges "cas d'usage"
- Solution: **Utiliser jaune pour highlights importants**

**P6 - Pas de blocks colorés massifs**
- Les formes géométriques sont timides (opacity: 0.95, rotation subtile)
- Référence quube.fr: **Blocs pleins, 100% opacité, formes simples et grandes**
- Solution: **Refonte des formes hero**

---

### 4. FORMES GÉOMÉTRIQUES

#### État actuel (Hero)
```css
.hero::before {
  content: '';
  position: absolute;
  top: 10%;
  right: -10%;
  width: 60%;
  height: 80%;
  background: linear-gradient(135deg, violet, bleu);
  transform: rotate(-8deg) skewY(-3deg);
  border-radius: 40px;
  opacity: 0.95; /* ← Trop discret */
}
```

**Problèmes:**
- Trop petit (60% width)
- Trop transparent (0.95)
- Positionné hors écran (-10% right)
- Rotation subtile (-8deg)

#### Référence QUUBE.FR

D'après les captures d'écran et la charte:
- **Formes pleines 100% opaques**
- **Tailles massives** (70-90% de la section)
- **Couleurs franches** (pas de dégradés complexes)
- **Formes simples**: rectangles arrondis, cercles géants
- **Superposition** avec le texte

#### Recommandations formes

**R4 - Refonte Hero avec forme massive**
```css
.hero::before {
  content: '';
  position: absolute;
  top: -5%;
  right: 5%; /* Visible dans le viewport */
  width: 85%; /* ← MASSIF */
  height: 90%;
  background: var(--color-violet); /* Couleur unie */
  transform: rotate(8deg); /* Rotation simple */
  border-radius: 80px; /* Coins très arrondis */
  opacity: 1.0; /* ← Pleine opacité */
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 40%;
  height: 50%;
  background: var(--color-jaune); /* Accent jaune */
  border-radius: 60px;
  opacity: 1.0;
  z-index: 0;
}
```

**R5 - Ajouter formes géométriques sur autres sections**
- Section "Comment nous aidons" → cercle géant vert en bas à gauche
- Section "Cas d'usage" → rectangle rouge incliné en fond
- CTA finale → forme jaune massive derrière le texte

---

### 5. NAVIGATION & HEADER

#### État actuel
```html
<header> (fixe, blanc, bordure bottom)
  <logo>QUUBE·IA Santé</logo>
  <nav>
    Accueil | Services | Cas d'usage | Qui sommes-nous | Contact
  </nav>
</header>
```

#### Problèmes

**P7 - Header trop discret**
- Bordure bottom subtile (1px rgba)
- Pas de différenciation visuelle forte
- Logo purement textuel

**P8 - Pas de logo graphique**
- Les fichiers Hub contiennent:
  - `QUUBE_Logo_Noir@2x.png`
  - `QUUBE_symbole_Noir@2x.png`
- Actuellement on utilise seulement du texte

**P9 - Navigation mobile non implémentée**
- `.mobile-menu-toggle { display: none; }`
- Pas de menu hamburger codé
- Risque d'inutilisabilité sur mobile

#### Recommandations navigation

**R6 - Intégrer le logo officiel QUUBE**
```html
<a href="/" class="logo">
  <img src="/static/logo-quube-noir.png" 
       alt="QUUBE" 
       height="40" />
  <span class="logo-sub">IA Santé</span>
</a>
```

**R7 - Renforcer le header**
```css
header {
  background: var(--color-blanc);
  border-bottom: 2px solid var(--color-noir); /* Plus marqué */
  padding: 24px 0; /* Plus d'air */
}
```

**R8 - Implémenter navigation mobile**
- Ajouter menu hamburger (icône SVG)
- Menu latéral slide-in (overlay)
- Breakpoint: `@media (max-width: 900px)`

---

### 6. CARTES & COMPOSANTS

#### Analyse des cartes actuelles

**Type 1: Cartes offres (page Accueil)**
```css
.card {
  background: #FFF;
  padding: 48px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
```

**Type 2: Cartes cas d'usage (page dédiée)**
```css
.use-case-card {
  background: #F1F1F1; /* ✓ Gris QUUBE */
  border: 1.5px solid rgba(0,0,0,0.08);
  hover: border-color: #37CAB0;
}
```

**Type 3: Cartes personas/métiers (page Accueil)**
```css
.use-case-card {
  background: #F1F1F1; /* ✓ Bon */
  border: 1px rgba(0,0,0,0.06);
  hover: white bg + green border
}
```

#### Problèmes

**P10 - Incohérence entre types de cartes**
- Page Accueil offres → fond blanc
- Page Cas d'usage → fond gris
- Page Services → fond blanc
- **Pas d'harmonie**

**P11 - Hover trop subtils**
- Translate -4px (peu visible)
- Changement de border uniquement
- Pas assez "QUUBE" (la charte prône le contraste fort)

**P12 - Pas de différenciation par catégorie**
- Toutes les cartes se ressemblent
- Pas de code couleur par type de service

#### Recommandations cartes

**R9 - Uniformiser les fonds**
```css
/* Toutes les cartes sur gris léger */
.card, 
.offer-card,
.use-case-card {
  background: #F7F7F7; /* Entre gris et blanc */
  border: 2px solid transparent; /* Prêt pour hover */
}
```

**R10 - Hover plus marqué**
```css
.card:hover {
  background: var(--color-blanc);
  border-color: var(--color-vert); /* Accent QUUBE */
  transform: translateY(-8px); /* Plus visible */
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}
```

**R11 - Ajouter barre colorée par catégorie**
```css
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px; /* Barre top */
  background: var(--card-accent-color);
  border-radius: 12px 12px 0 0;
}

.card.formation::before { background: var(--color-violet); }
.card.conseil::before { background: var(--color-bleu); }
.card.acceleration::before { background: var(--color-vert); }
```

---

### 7. STRUCTURE PAR PAGE

#### PAGE ACCUEIL

**Structure actuelle:**
1. Hero (fond géométrique)
2. 3 Offres (section claire)
3. 4 Piliers (section alt)
4. 3 Cas d'usage métiers (section claire)
5. CTA final (section sombre)

**Problèmes:**
- **P13**: Section "4 Piliers" trop similaire aux cartes offres (confusion)
- **P14**: Passage section claire → alt → claire → sombre = saccadé
- **P15**: Pas de zone de respiration entre sections

**Recommandations structure Accueil:**

**R12 - Fusionner sections similaires**
```
1. Hero (forme massive violette + jaune)
2. Offres + Piliers combinés (sur fond gris, 2 colonnes)
3. Cas d'usage métiers (3 grandes cartes avec images)
4. CTA final (forme jaune massive)
```
→ Passe de 5 sections à 4, flux plus fluide

**R13 - Ajouter images d'illustration**
- Actuellement: aucune photo/illustration
- Charte QUUBE utilise des visuels simples et épurés
- Proposer: illustrations vectorielles ou photos health-tech

**R14 - Retravailler "4 Piliers"**
```html
<!-- Actuel: grille 4 colonnes avec icônes -->
<!-- Proposé: 2×2 avec fond coloré par pilier -->
<div class="values-grid">
  <div class="value-item" style="--accent: var(--color-violet)">
    <div class="value-shape"></div> <!-- Forme géométrique -->
    <h4>100% Santé × IA</h4>
    <p>...</p>
  </div>
  ...
</div>
```

---

#### PAGE CAS D'USAGE

**Structure actuelle:**
1. Hero + Badge + Social proof
2. Bannière crédibilité
3. Badges expertise (9 tags)
4. Filtres personas (8 boutons)
5. Grille 23 cartes
6. Section Avant/Après
7. Méthode 4 étapes
8. CTA final

**8 sections** = page très longue

**Problèmes:**
- **P16**: Trop de sections avant les cartes (hero + bannière + badges + filtres = 4 niveaux)
- **P17**: Bannière "crédibilité" redondante avec hero
- **P18**: 23 cartes sans pagination ni lazy loading

**Recommandations Cas d'usage:**

**R15 - Simplifier header de page**
```
1. Hero compact (titre + 1 ligne + filtres intégrés)
2. Grille cartes (avec lazy load)
3. Avant/Après (simplifié)
4. CTA

→ Passe de 8 à 4 sections
```

**R16 - Intégrer filtres dans hero**
```html
<section class="hero-cas-usage">
  <h1>L'IA au service de votre quotidien</h1>
  <div class="filter-tabs-hero">
    <!-- Filtres directement dans hero -->
  </div>
</section>
```

**R17 - Ajouter pagination ou "Load more"**
- 23 cartes d'un coup = lourd (surtout mobile)
- Proposer: 12 cartes + bouton "Voir 11 cas supplémentaires"

---

#### PAGE SERVICES

**Structure actuelle:**
1. Hero
2. Formation (3 niveaux)
3. Conseil (5 sous-offres)
4. Accélération (4 domaines)
5. Méthodologie 5 phases
6. CTA

**6 sections** dont 3 mega-sections de contenu

**Problèmes:**
- **P19**: Sections Formation/Conseil/Accélération trop longues (chacune = mini-page)
- **P20**: Pas de navigation intra-page (ancres visibles)
- **P21**: Méthodologie répétée sur plusieurs pages

**Recommandations Services:**

**R18 - Ajouter menu sticky latéral**
```html
<aside class="services-nav">
  <a href="#formation">Formation</a>
  <a href="#conseil">Conseil</a>
  <a href="#acceleration">Accélération</a>
  <a href="#methodo">Méthodologie</a>
</aside>
```

**R19 - Compacter les offres**
- Actuellement: liste complète de chaque sous-offre
- Proposé: carte cliquable → modale/accordéon avec détails

**R20 - Supprimer "Méthodologie" si déjà sur page À propos**
- Éviter duplication de contenu
- Ou garder uniquement sur Services si plus pertinent

---

#### PAGES À PROPOS & CONTACT

**Bon état général**, quelques ajustements mineurs:

**R21 - Page À propos**
- Ajouter photo Samuel Bottaro (actuellement CDN externe)
- Remplacer liste "terrains d'intervention" par carte interactive
- Ajouter timeline carrière visuelle

**R22 - Page Contact**
- Formulaire fonctionnel (actuellement juste HTML)
- Ajouter backend `/api/contact` avec validation
- Carte Google Maps intégrée (optionnel)

---

### 8. RESPONSIVE & MOBILE

#### Analyse des breakpoints actuels

```css
/* Actuellement: breakpoints implicites via clamp() */
/* Pas de @media queries explicites */
```

**Problèmes:**

**P22 - Pas de tests mobile documentés**
- Navigation non adaptée
- Cartes en grille: `minmax(320px, 1fr)` OK mais pas optimisé
- Typographie clamp() peut être trop petite sur très petit écran

**P23 - Hero forme géométrique déborde sur mobile**
- `width: 60%; height: 80%; right: -10%` = coupé à droite

**R23 - Ajouter breakpoints explicites**
```css
/* Mobile first approach */
@media (max-width: 640px) {
  .hero::before { display: none; } /* Masquer formes complexes */
  .cards-grid { grid-template-columns: 1fr; }
  nav { display: none; } /* Hamburger menu only */
}

@media (min-width: 641px) and (max-width: 1024px) {
  .hero::before { width: 50%; opacity: 0.6; }
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1025px) {
  /* Desktop: styles actuels */
}
```

---

### 9. PERFORMANCE & ACCESSIBILITÉ

#### État actuel (tests console)

**Console logs analysés:**
- ❌ 1 erreur 404 (ressource manquante)
- ⚠️ Page load: 7-8 secondes (lent)
- ✅ Pas d'erreur JavaScript critique

**P24 - Temps de chargement**
- 8 secondes = trop long
- Probablement:  
  - Fonts non optimisées
  - Pas de lazy loading images
  - CSS/JS non minifiés en prod

**P25 - Erreur 404 récurrente**
- À identifier et corriger

#### Recommandations performance

**R24 - Optimiser chargement**
```html
<!-- Preload fonts critiques -->
<link rel="preload" href="/static/fonts/TWKEverett.woff2" as="font" crossorigin>

<!-- Lazy load images -->
<img src="photo.jpg" loading="lazy" decoding="async">

<!-- Minifier CSS/JS en prod -->
<!-- (déjà géré par Vite normalement) -->
```

**R25 - Accessibilité WCAG**
```html
<!-- Ajouter aria-labels -->
<nav aria-label="Navigation principale">
<button aria-label="Ouvrir le menu">☰</button>

<!-- Contrast ratio: vérifier noir sur violet -->
<!-- Actuellement hero texte noir sur fond violet peut être limite -->
```

---

### 10. CONTENU & COPYWRITING

*(Hors scope design, mais important)*

**Observations:**
- ✅ Ton clair et direct (bien pour secteur santé)
- ✅ Jargon limité
- ⚠️ Quelques répétitions (ex: méthodologie sur 2 pages)
- ⚠️ Manque de "social proof" visuel (logos clients, témoignages)

**R26 - Ajouter éléments de crédibilité**
- Logos établissements accompagnés (si accord clients)
- Citations courtes de témoignages
- Certifications/labels (si existants)

---

## 🎨 PLAN D'ACTION PRIORITAIRE

### Phase 1 - CORRECTIONS CRITIQUES (2-3h)
1. ✅ **Charger police TWK Everett** (ou fallback Arial si indispo)
2. ✅ **Refonte formes géométriques Hero** (massives, opaques, colorées)
3. ✅ **Uniformiser fonds cartes** (toutes sur #F7F7F7)
4. ✅ **Corriger erreur 404** identifiée dans console
5. ✅ **Ajouter logo QUUBE officiel** dans header

### Phase 2 - AMÉLIORATIONS DESIGN (4-5h)
6. ✅ **Ajouter formes géométriques** sur sections clés (3-4 sections)
7. ✅ **Retravailler hover cartes** (plus marqué, barre colorée top)
8. ✅ **Simplifier page Cas d'usage** (fusionner sections)
9. ✅ **Ajouter menu sticky** sur page Services
10. ✅ **Optimiser espacements** (grille cohérente)

### Phase 3 - RESPONSIVE & FINITIONS (3-4h)
11. ✅ **Implémenter navigation mobile** (menu hamburger)
12. ✅ **Tester et ajuster breakpoints** (320px, 768px, 1024px, 1440px)
13. ✅ **Lazy loading images** (si ajoutées)
14. ✅ **Audit accessibilité** (contraste, aria-labels)
15. ✅ **Tests multi-navigateurs** (Chrome, Safari, Firefox)

### Phase 4 - CONTENU & EXTRAS (optionnel, 2-3h)
16. ✅ **Ajouter illustrations/photos** (si disponibles)
17. ✅ **Intégrer logos clients** (social proof)
18. ✅ **Formulaire contact fonctionnel** (backend API)
19. ✅ **Animations subtiles** (fade-in, parallax doux)

---

## 📋 CHECKLIST DE CONFORMITÉ CHARTE QUUBE

### Design System
- [x] Palette officielle (7 couleurs)
- [ ] Police TWK Everett (Medium, Book)
- [x] Hiérarchie typographique (9 niveaux)
- [x] Uppercase sur titres principaux
- [ ] Formes géométriques massives
- [x] Fond gris préféré au blanc

### Identité Visuelle
- [ ] Logo QUUBE officiel intégré
- [x] Noir #000 = identité forte
- [x] Gris #F1F1F1 = fond privilégié
- [x] Accent vert #37CAB0 = CTA principal
- [ ] Blocs colorés 100% opaques
- [x] Bordures fines et subtiles

### UX/UI
- [x] Navigation simple et claire
- [ ] Navigation mobile fonctionnelle
- [x] CTA visibles et contrastés
- [x] Cartes avec hover feedback
- [ ] Transitions fluides (0.3s ease)
- [x] Hiérarchie visuelle respectée

### Performance
- [ ] Temps chargement < 3s
- [ ] Images optimisées (WebP)
- [ ] Fonts en preload
- [ ] Lazy loading actif
- [x] CSS minifié (Vite)
- [x] Pas d'erreurs console

**Score actuel: 13/24 (54%)**  
**Objectif Phase 1-2: 20/24 (83%)**  
**Objectif Phase 3-4: 24/24 (100%)**

---

## 💡 INSPIRATIONS VISUELLES

### Sites de référence design
1. **quube.fr** - Votre propre site QUUBE (formes massives, typo bold)
2. **stripe.com** - Formes géométriques subtiles mais présentes
3. **linear.app** - Minimalisme + contrastes forts
4. **vercel.com** - Typographie massive + espaces généreux

### Éléments à reproduire
- Formes géométriques **TRÈS GRANDES** (70-90% section)
- Couleurs **FRANCHES** (pas de dégradés complexes)
- Texte **MASSIF** mais lisible
- Espacements **GÉNÉREUX** (respiration)
- Cartes **SIMPLES** avec hover marqué

---

## 📞 QUESTIONS POUR VALIDATION

Avant de procéder aux modifications, merci de confirmer:

1. **Police TWK Everett**: Avez-vous accès à la license? Sinon, fallback Arial acceptable?
2. **Logo QUUBE**: Puis-je utiliser `QUUBE_Logo_Noir@2x.png` du Hub?
3. **Formes géométriques**: Quelle couleur privilégier? (violet, bleu, vert, jaune?)
4. **Navigation mobile**: Design souhaité? (menu latéral ou overlay plein écran?)
5. **Images/photos**: Avez-vous des visuels à intégrer? (illustrations, photos établissements?)
6. **Priorisation**: Phases 1-2 en priorité, ou tout d'un coup?

---

## 🚀 ÉTAPES SUIVANTES

1. **Validation de ce document** par vos soins
2. **Confirmation des choix design** (questions ci-dessus)
3. **Démarrage Phase 1** (corrections critiques)
4. **Revue intermédiaire** après Phase 1
5. **Phases 2-3-4** selon planning

**Délai estimé total: 12-15h de dev**  
**Livraison échelonnée possible** (phase par phase)

---

*Document généré le 17/02/2026 - QUUBE·IA Santé*  
*Référence: ANALYSE_DESIGN_RECOMMANDATIONS.md*
