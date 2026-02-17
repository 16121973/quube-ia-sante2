# 🎨 AVANT/APRÈS - Exemples visuels de design

## Comparaisons détaillées avec code CSS

---

## 1. FORMES GÉOMÉTRIQUES HERO

### ❌ AVANT (actuel - discret)
```css
.hero::before {
  content: '';
  position: absolute;
  top: 10%;
  right: -10%;        /* ← Hors écran */
  width: 60%;         /* ← Petit */
  height: 80%;
  background: linear-gradient(135deg, 
    var(--color-violet) 0%, 
    var(--color-bleu) 100%);
  transform: rotate(-8deg) skewY(-3deg);
  border-radius: 40px;
  opacity: 0.95;      /* ← Translucide */
  z-index: 0;
}
```

**Problèmes:**
- Forme trop petite (60% width)
- Positionnée en dehors du viewport (-10% right)
- Transparence trop forte (95%)
- Double transformation (rotate + skew = complexe)

---

### ✅ APRÈS (recommandé - massif)

```css
/* Forme principale MASSIVE */
.hero::before {
  content: '';
  position: absolute;
  top: -5%;           /* ← Déborde légèrement */
  right: 5%;          /* ← Visible */
  width: 85%;         /* ← MASSIF */
  height: 95%;
  background: var(--color-violet); /* ← Couleur unie */
  transform: rotate(12deg);  /* ← Rotation simple et marquée */
  border-radius: 80px; /* ← Très arrondi */
  opacity: 1.0;       /* ← OPAQUE */
  z-index: 0;
}

/* Forme secondaire d'accent (optionnel) */
.hero::after {
  content: '';
  position: absolute;
  bottom: -8%;
  left: -3%;
  width: 35%;
  height: 45%;
  background: var(--color-jaune); /* ← Accent jaune */
  border-radius: 60px;
  opacity: 1.0;
  z-index: 0;
  transform: rotate(-15deg);
}

.hero-content {
  position: relative;
  z-index: 1;         /* ← Au-dessus des formes */
  max-width: 800px;
}
```

**Avantages:**
- Forme 85% width = impact visuel fort
- Opacité 100% = identité QUUBE affirmée
- Couleur unie = clarté visuelle
- Seconde forme jaune = rythme + accent
- Texte reste lisible (z-index)

---

## 2. CARTES OFFRES

### ❌ AVANT (fond blanc uniforme)
```css
.card {
  background: #FFFFFF;    /* ← Blanc pur */
  padding: 48px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.3s;
}

.card::before {
  /* Pas de barre colorée */
}

.card:hover {
  transform: translateY(-2px); /* ← Subtil */
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
}
```

**Problèmes:**
- Fond blanc = pas dans la charte (gris préféré)
- Hover trop discret (-2px)
- Pas de différenciation par catégorie
- Ombre trop légère (6% opacity)

---

### ✅ APRÈS (fond gris + barre colorée)

```css
.card {
  background: #F7F7F7;    /* ← Gris léger QUUBE */
  padding: 52px 40px 48px; /* ← Espace pour barre top */
  border-radius: 12px;
  border: 2px solid transparent;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Barre colorée top par catégorie */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;        /* ← Barre visible */
  background: var(--card-accent);
  border-radius: 12px 12px 0 0;
  transition: height 0.3s;
}

/* Couleurs par type */
.card.formation::before {
  background: var(--color-violet);
}

.card.conseil::before {
  background: var(--color-bleu);
}

.card.acceleration::before {
  background: var(--color-vert);
}

/* Hover MARQUÉ */
.card:hover {
  background: var(--color-blanc);
  border-color: var(--card-accent);
  transform: translateY(-8px); /* ← Visible */
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
}

.card:hover::before {
  height: 10px; /* ← Barre s'agrandit */
}
```

**Avantages:**
- Fond gris = charte respectée
- Barre colorée = identification rapide
- Hover -8px = feedback clair
- Border devient accent = cohérence
- Transition cubic-bezier = fluide

---

## 3. TYPOGRAPHIE

### ❌ AVANT (police Inter + tailles variables)
```css
:root {
  --font-primary: 'Inter', -apple-system, sans-serif;
}

h1 {
  font-size: clamp(3rem, 12vw, 9rem); /* ← Trop variable */
  font-weight: 900;
  line-height: 0.95;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(2.5rem, 8vw, 5.5rem); /* ← Trop variable */
  font-weight: 900;
}
```

**Problèmes:**
- Inter ≠ TWK Everett (charte QUUBE)
- clamp() avec 3rem→9rem = ratio x3 (trop d'écart)
- Sur tablette (768px): 12vw = 92px = entre-deux gênant

---

### ✅ APRÈS (TWK Everett + tailles maîtrisées)

```css
@font-face {
  font-family: 'TWK Everett';
  src: url('/static/fonts/TWKEverett-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Everett';
  src: url('/static/fonts/TWKEverett-Book.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-primary: 'TWK Everett', 'Inter', Arial, sans-serif;
}

h1 {
  font-size: clamp(4rem, 10vw, 7.5rem); /* ← Ratio x1.875 */
  font-weight: 500;       /* ← Medium (pas Black) */
  line-height: 1.0;       /* ← Plus d'air */
  text-transform: uppercase;
  letter-spacing: -0.025em;
}

h2 {
  font-size: clamp(2.5rem, 6vw, 4.5rem); /* ← Ratio x1.8 */
  font-weight: 500;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

h3 {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 500;
  line-height: 1.2;
}

p, li {
  font-family: 'TWK Everett', 'Inter', Arial, sans-serif;
  font-weight: 400;       /* ← Book pour corps de texte */
  font-size: 1.125rem;
  line-height: 1.7;
}
```

**Avantages:**
- TWK Everett = charte officielle
- Ratio clamp() réduit = prévisible
- Medium (500) pour titres = élégant sans être lourd
- Book (400) pour texte = lisibilité
- Fallback Inter + Arial = sécurité

---

## 4. NAVIGATION HEADER

### ❌ AVANT (logo texte seul)
```html
<header>
  <a href="/" class="logo">
    <span class="logo-main">QUUBE</span>
    <span class="logo-sub">IA Santé</span>
  </a>
  <nav>
    <a href="/">Accueil</a>
    <a href="/services">Services</a>
    ...
  </nav>
</header>
```

```css
header {
  background: #FFF;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  padding: 20px 0;
}

.logo-main {
  font-size: 1.5rem;
  font-weight: 900;
}
```

**Problèmes:**
- Pas de logo graphique QUUBE
- Bordure trop discrète (1px, 8% opacity)
- Padding insuffisant (20px)

---

### ✅ APRÈS (logo officiel + bordure marquée)

```html
<header>
  <a href="/" class="logo">
    <img src="/static/logo-quube-noir.svg" 
         alt="QUUBE" 
         class="logo-img"
         height="42" />
    <span class="logo-divider">×</span>
    <span class="logo-sub">IA Santé</span>
  </a>
  <nav aria-label="Navigation principale">
    <a href="/">Accueil</a>
    <a href="/services">Services</a>
    <a href="/cas-usage">Cas d'usage</a>
    <a href="/a-propos">Qui sommes-nous</a>
  </nav>
  <a href="/contact" class="btn-header-cta">Contact</a>
</header>
```

```css
header {
  background: var(--color-blanc);
  border-bottom: 2px solid var(--color-noir); /* ← Marqué */
  padding: 24px 0;    /* ← Plus d'air */
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-img {
  height: 42px;
  width: auto;
}

.logo-divider {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(0,0,0,0.3);
}

.logo-sub {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-noir);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.btn-header-cta {
  background: var(--color-vert);
  color: var(--color-blanc);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.25s;
}

.btn-header-cta:hover {
  background: #2bb59c; /* Vert plus foncé */
  transform: translateY(-2px);
}
```

**Avantages:**
- Logo officiel QUUBE intégré
- Bordure 2px noire = forte identité
- CTA vert = accent clair
- Divider × = séparation élégante
- Hover CTA = feedback immédiat

---

## 5. SECTION "4 PILIERS"

### ❌ AVANT (grille 4 colonnes uniformes)
```html
<div class="values-grid">
  <div class="value-item">
    <svg class="value-icon">...</svg>
    <h4>100% Santé × IA</h4>
    <p>Expertise terrain...</p>
  </div>
  <!-- x4 -->
</div>
```

```css
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, 
    var(--color-violet), 
    var(--color-bleu));
  border-radius: 50%;
}
```

**Problèmes:**
- Icônes circulaires = générique
- Pas de différenciation visuelle
- Dégradé identique sur tous = monotone

---

### ✅ APRÈS (cartes avec formes géométriques)

```html
<div class="values-grid-v2">
  <div class="value-card" data-accent="violet">
    <div class="value-shape"></div>
    <div class="value-content">
      <h4>100% Santé × IA</h4>
      <p>Expertise terrain sanitaire + intelligence artificielle</p>
    </div>
  </div>
  <div class="value-card" data-accent="bleu">
    <div class="value-shape"></div>
    <div class="value-content">
      <h4>Neutres & Indépendants</h4>
      <p>Aucun partenariat éditeur, conseil objectif</p>
    </div>
  </div>
  <!-- x4 avec couleurs différentes -->
</div>
```

```css
.values-grid-v2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.value-card {
  background: var(--color-blanc);
  padding: 48px 40px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  min-height: 240px;
  display: flex;
  align-items: flex-end;
}

/* Forme géométrique background */
.value-shape {
  position: absolute;
  top: -20%;
  right: -15%;
  width: 60%;
  height: 80%;
  border-radius: 40px;
  opacity: 0.12;     /* Subtil mais présent */
  transform: rotate(25deg);
  transition: all 0.4s;
}

/* Couleurs par accent */
.value-card[data-accent="violet"] .value-shape {
  background: var(--color-violet);
}

.value-card[data-accent="bleu"] .value-shape {
  background: var(--color-bleu);
}

.value-card[data-accent="vert"] .value-shape {
  background: var(--color-vert);
}

.value-card[data-accent="jaune"] .value-shape {
  background: var(--color-jaune);
}

/* Hover: forme s'agrandit */
.value-card:hover .value-shape {
  width: 70%;
  height: 90%;
  opacity: 0.18;
}

.value-content {
  position: relative;
  z-index: 1;
}

.value-card h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-noir);
}

.value-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(0,0,0,0.75);
}
```

**Avantages:**
- Grille 2×2 = moins écrasé que 4 colonnes
- Formes géométriques = identité QUUBE
- Couleur unique par carte = différenciation
- Hover interactif = engagement
- Hauteur min = alignement vertical

---

## 6. CTA FINAL

### ❌ AVANT (gradient discret)
```css
.section-cta-final {
  background: linear-gradient(135deg, 
    var(--color-violet) 0%, 
    var(--color-bleu) 100%);
  position: relative;
  overflow: hidden;
}

.section-cta-final::before {
  /* Forme décorative complexe */
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.1);
  border-radius: 80px;
  transform: rotate(20deg);
  top: -100px;
  right: -50px;
}

.cta-title {
  color: var(--color-blanc);
  text-align: center;
}
```

**Problèmes:**
- Gradient = pas dans la charte (couleurs unies préférées)
- Forme before blanche = peu visible
- Texte blanc = contraste OK mais prévisible

---

### ✅ APRÈS (forme jaune massive + texte noir)

```css
.section-cta-final {
  background: var(--color-gris); /* ← Fond gris neutre */
  position: relative;
  overflow: hidden;
  padding: 120px 0;
}

/* Forme jaune MASSIVE en background */
.section-cta-final::before {
  content: '';
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%) rotate(8deg);
  width: 90%;          /* ← MASSIF */
  height: 85%;
  background: var(--color-jaune); /* ← Jaune éclatant */
  border-radius: 100px;
  z-index: 0;
  opacity: 1.0;        /* ← Opaque */
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  color: var(--color-noir); /* ← Noir sur jaune = fort contraste */
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 20px;
}

.cta-subtitle {
  color: rgba(0,0,0,0.8);
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.cta-content .btn-primary {
  background: var(--color-noir);
  color: var(--color-blanc);
  font-size: 1.25rem;
  padding: 20px 48px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

.cta-content .btn-primary:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 32px rgba(0,0,0,0.25);
}
```

**Avantages:**
- Jaune massif = impact visuel énorme
- Texte noir = contraste maximum (WCAG AAA)
- Forme 90% width = remplit l'espace
- Bouton noir sur jaune = hiérarchie claire
- Hover scale = feedback ludique

---

## 7. PAGE CAS D'USAGE - FILTRES

### ❌ AVANT (badges passifs)
```css
.filter-tab {
  padding: 12px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 50px;
  background: #FFF;
  color: #718096;
  cursor: pointer;
}

.filter-tab.active {
  background: var(--color-vert);
  color: #FFF;
  border-color: var(--color-vert);
}
```

**Problèmes:**
- Bordure grise = peu visible
- Fond blanc = pas QUUBE
- État actif vert OK mais transition brusque

---

### ✅ APRÈS (badges actifs + hover progressif)

```css
.filter-tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
  justify-content: center;
}

.filter-tab {
  padding: 14px 28px;
  border: 2px solid transparent;
  border-radius: 50px;
  background: #F7F7F7;     /* ← Gris léger */
  color: var(--color-noir);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Hover: bordure verte apparaît */
.filter-tab:hover {
  background: #FFF;
  border-color: var(--color-vert);
  color: var(--color-vert);
  transform: translateY(-2px);
}

/* Actif: fond noir + texte blanc */
.filter-tab.active {
  background: var(--color-noir);
  border-color: var(--color-noir);
  color: var(--color-blanc);
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Badge de comptage (optionnel) */
.filter-tab::after {
  content: attr(data-count);
  position: absolute;
  top: -6px;
  right: -6px;
  background: var(--color-vert);
  color: #FFF;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 10px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.2s;
}

.filter-tab.active::after {
  opacity: 1;
  transform: scale(1);
}
```

**Avantages:**
- État par défaut gris = charte respectée
- Hover vert = feedback progressif
- Actif noir = fort contraste
- Badge compteur = information utile
- Transitions fluides = UX soignée

---

## RÉSUMÉ DES CHANGEMENTS CLÉS

| Élément | Avant | Après | Impact |
|---------|-------|-------|--------|
| **Formes géométriques** | 60% width, opacity 0.95 | 85% width, opacity 1.0 | +300% visibilité |
| **Police** | Inter | TWK Everett | Conformité charte |
| **Cartes fond** | Blanc #FFF | Gris #F7F7F7 | Identité QUUBE |
| **Hover cartes** | -2px | -8px + border accent | +400% feedback |
| **Header border** | 1px rgba | 2px solid noir | +200% présence |
| **CTA background** | Gradient violet-bleu | Jaune massif opaque | +500% impact |
| **Filtres actifs** | Vert | Noir + vert | Hiérarchie claire |

---

**Document de référence - QUUBE·IA Santé**  
*Design Before/After - 17/02/2026*
