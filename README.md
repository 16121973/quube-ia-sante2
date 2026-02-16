# QUUBE×IA Santé

## Aperçu

Site web pour **QUUBE×IA Santé**, cabinet indépendant de conseil et formation en intelligence artificielle pour les organisations de santé et médico-sociales.

**Design inspiré de** : https://quube.fr (atmosphère premium, fond sombre, typographie élégante)

## 🚀 URLs

- **Développement sandbox** : https://3000-iykmf9q8i3qnvhy0ib05f-de59bda9.sandbox.novita.ai
- **GitHub** : *(À déployer)*
- **Production Cloudflare Pages** : *(À déployer)*

## 📋 Architecture du site

### Pages (5)

1. **Accueil** (`/`) - 6 sections :
   - Hero full-screen (fond sombre gradient #0A1628 → #1B2838)
   - 3 offres (Formation, Conseil, Accélération)
   - Valeurs + Chiffres clés (25 ans, ÷2-3, 50-70%)
   - Section fondateur avec avatar monogram "SB"
   - Aperçu cas d'usage
   - CTA final sombre

2. **Nos offres** (`/offres`) - *(En construction)*
   - Formation & Montée en compétences
   - Conseil & Stratégie IA
   - Accélération de Projet (offre signature)

3. **Cas d'usage IA par métier** (`/cas-usage`) - *(En construction)*
   - 7 onglets métiers avec ROI chiffrés

4. **Qui sommes-nous** (`/a-propos`) - *(En construction)*
   - Fondateur, vision, méthodologie 5 phases

5. **Contact** (`/contact`)
   - Coordonnées : 10 rue du Colisée, 75008 Paris
   - Email : contact@quube.fr
   - Lien Calendly

## 🎨 Design System Premium

### Palette de couleurs
- **Sombre** : #0A1628 (hero), #1B2838 (secondary)
- **Accent orange** : #E67E22 (boutons, highlights)
- **Clairs** : #FAFAFA (fond), #F0F4F8 (sections alternées)
- **Texte** : Blanc avec opacités (100%, 85%, 70%, 40%) sur fond sombre

### Typographie
- **Police** : Inter (Google Fonts) - 400, 500, 600, 700, 800
- **H1 Hero** : clamp(2.5rem, 5vw, 4.5rem), weight 800
- **H2 Sections** : clamp(1.8rem, 3vw, 2.5rem), weight 700
- **H3 Cartes** : 1.25rem, weight 600
- **Body** : 18px / 1.05rem, line-height 1.7

### Espacements
- **Sections verticales** : clamp(80px, 10vw, 120px)
- **Gap cartes** : 32px
- **Padding cartes** : 40px
- **Max-width** : 1200px centré
- **Mobile** : clamp(48px, 8vw, 64px)

### Alternance sections
1. Hero - **sombre** (gradient)
2. Offres - **clair** (#FAFAFA)
3. Valeurs/Chiffres - **teinté** (#F0F4F8)
4. Fondateur - **sombre**
5. Cas d'usage preview - **clair**
6. CTA final - **sombre**
7. Footer - **sombre**

### Éléments clés
- **Header** : Transparent → fixe avec `backdrop-filter: blur(12px)` au scroll
- **Boutons** : Primaire (accent #E67E22), Secondaire (outline blanc), hover lift -2px
- **Cartes** : Fond blanc, ombres douces, hover lift -4px, border-radius 16px
- **Carte signature** : Border-left 4px accent + badge "Offre signature"
- **Icônes** : SVG stroke 1.5px (pas d'emojis)
- **Avatar fondateur** : Monogram "SB" 200×200px, fond gradient sombre

### Animations
- **Scroll** : fade-in + translateY(20px), stagger 100ms entre cartes
- **Count-up** : Chiffres (25, 60) s'animent au scroll
- **Header** : Transition background 0.3s au scroll
- **Hover** : Transform translateY(-2px/-4px), box-shadow

## 🛠️ Stack Technique

- **Framework** : Hono 4.x (Cloudflare Workers)
- **Build** : Vite 6.x (SSR)
- **Déploiement** : Cloudflare Pages
- **Runtime** : PM2 (sandbox dev)
- **Styles** : CSS pur (~18KB) - Pas de Tailwind
- **JavaScript** : Vanilla JS (~7.7KB) - IntersectionObserver, count-up, tabs

## 📦 Scripts npm

```bash
# Développement
npm run dev                # Vite dev server
npm run dev:sandbox        # Wrangler dev (0.0.0.0:3000)

# Build & Preview
npm run build              # Vite build → dist/
npm run preview            # Wrangler preview

# Déploiement
npm run deploy             # Build + deploy Cloudflare
npm run deploy:prod        # Deploy avec --project-name webapp

# Utilitaires
npm run clean-port         # Tuer port 3000
npm run test               # curl localhost:3000
npm run cf-typegen         # Types Cloudflare

# Git
npm run git:init           # git init + commit
npm run git:commit         # git add . + commit
npm run git:status         # git status
npm run git:log            # git log --oneline
```

## 🚀 Développement Local

```bash
# Installation
cd /home/user/webapp
npm install

# Build (OBLIGATOIRE avant PM2)
npm run build

# Démarrer avec PM2 (daemon)
pm2 start ecosystem.config.cjs

# Tester
curl http://localhost:3000

# Logs
pm2 logs webapp --nostream

# Redémarrer après modifications
npm run build
pm2 restart webapp
```

## 📝 Commits Git

```
main 7d698b5 - design: Refonte complète design premium quube.fr
main 96cb661 - design: Amélioration design system premium
main faf877a - docs: README complet avec documentation du projet
main c67a125 - PROMPT 5: Page Contact complète avec Calendly
main a998507 - PROMPT 4: Page Qui sommes-nous complète
main 65c8100 - PROMPT 3: Page Cas d'usage IA par métier avec 7 onglets
main 2bd59be - PROMPT 2: Page Nos offres complète avec 3 offres détaillées
main 0baef8c - PROMPT 1: Page d'accueil complète avec 6 sections
main a1ddf0f - PROMPT 0: Architecture du projet avec design system et navigation
```

## ✅ Statut Actuel

### ✅ Complété

- [x] Architecture projet Hono + Cloudflare Pages
- [x] Design system premium inspiré de quube.fr
- [x] Page d'accueil complète (6 sections)
  - [x] Hero fond sombre gradient 100vh
  - [x] 3 cartes offres (signature Accélération)
  - [x] 4 valeurs avec icônes SVG
  - [x] 3 chiffres clés énormes
  - [x] Section fondateur avec avatar "SB"
  - [x] 4 cas d'usage preview
  - [x] CTA final sombre
- [x] Header transparent → fixe/blur au scroll
- [x] Footer premium 3 colonnes
- [x] Animations scroll (fade-in, slide-up, count-up)
- [x] Responsive mobile/tablet/desktop
- [x] Suppression emojis → icônes SVG
- [x] Git repository (9 commits)
- [x] README documentation complète

### ⏳ En attente

- [ ] **Page Nos offres** - Détails 3 offres (Formation 3 niveaux, Conseil 5 modules, Accélération 4 catégories)
- [ ] **Page Cas d'usage** - 7 onglets métiers avec 6-8 cas chiffrés chacun
- [ ] **Page Qui sommes-nous** - Section fondateur détaillée, méthodologie 5 phases, références clients
- [ ] **Page Contact** - Formulaire + FAQ accordion + Calendly iframe
- [ ] **Déploiement GitHub** - Push vers repo utilisateur
- [ ] **Déploiement Cloudflare Pages** - Production avec custom domain

## 📞 Contact

**QUUBE×IA Santé**  
10 rue du Colisée  
75008 Paris  
[contact@quube.fr](mailto:contact@quube.fr)

## 📄 Licence

© 2026 QUUBE×IA Santé. Tous droits réservés.
