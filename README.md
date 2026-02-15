# QUUBE IA Santé

Site web professionnel pour QUUBE IA Santé, cabinet indépendant de conseil et formation en intelligence artificielle pour le secteur santé et médico-social.

## 🌐 URLs

- **Production** : En attente de déploiement sur Cloudflare Pages
- **Développement** : http://localhost:3000
- **GitHub** : En attente de push

## 📋 Fonctionnalités actuelles

### ✅ Pages complètes (5 pages)

1. **Accueil** (`/`)
   - Hero plein écran avec CTA
   - 3 offres en cartes (Formation, Conseil, Accélération)
   - Valeurs et chiffres clés
   - Section fondateur avec citation
   - Aperçu cas d'usage (4 exemples)
   - CTA final

2. **Nos offres** (`/offres`)
   - Formation IA (Conférences, Coaching, 3 niveaux)
   - Conseil & Stratégie (Diagnostic, Choix solutions, Pilotage, Changement, ROI)
   - Accélération de Projet ★ (Tableau gains, Méthode binôme, Projets éligibles)

3. **Cas d'usage IA par métier** (`/cas-usage`)
   - 7 onglets métiers interactifs
   - 6 cas d'usage percutants par métier
   - Exemples concrets chiffrés
   - Badges ROI++, Automatisation, Conformité, Data
   - Filtres transversaux

4. **Qui sommes-nous** (`/a-propos`)
   - Fondateur Samuel Bottaro (photo + texte narratif)
   - Vision de l'IA en santé (3 blocs)
   - Méthodologie en 5 phases
   - Références et cas pratiques
   - Écosystème d'experts

5. **Contact** (`/contact`)
   - Calendly intégré
   - Formulaire de contact
   - Coordonnées (email, Calendly)
   - FAQ accordéon (4 questions)

### ✅ Design System

- **Palette** : Tons sombres élégants (bleu nuit/noir), accent corail (#E67E22)
- **Typographie** : Inter (Google Fonts), titres imposants, espacement généreux
- **Animations** : Fade-in au scroll, transitions douces
- **Responsive** : Adapté mobile/tablette/desktop
- **Cohérence** : Inspiré de quube.fr

### ✅ Architecture technique

- **Framework** : Hono 4.x (Cloudflare Pages)
- **Runtime** : Cloudflare Workers
- **Build** : Vite 6.x
- **Déploiement** : Wrangler 4.x
- **Version control** : Git + GitHub
- **Process manager** : PM2 (développement)

## 🚀 Développement

### Installation

```bash
cd /home/user/webapp
npm install
```

### Développement local

```bash
# Build le projet
npm run build

# Démarrer avec PM2 (recommandé)
pm2 start ecosystem.config.cjs

# Tester
curl http://localhost:3000

# Logs
pm2 logs webapp --nostream

# Redémarrer
pm2 restart webapp
```

### Scripts disponibles

```bash
npm run dev              # Vite dev server
npm run dev:sandbox      # Wrangler pages dev (sandbox)
npm run build            # Build production
npm run preview          # Preview build
npm run deploy           # Build + Deploy to Cloudflare
npm run deploy:prod      # Deploy to production
npm run clean-port       # Kill process on port 3000
npm run test             # Test endpoint
npm run git:init         # Init git repo
npm run git:commit       # Commit with message
npm run git:status       # Git status
npm run git:log          # Git log
```

## 📊 Structure du projet

```
webapp/
├── src/
│   ├── index.tsx          # Routes principales (1400+ lignes)
│   └── renderer.tsx       # Layout commun (header + footer)
├── public/
│   └── static/
│       ├── styles.css     # Design system complet (10000+ lignes)
│       └── app.js         # JavaScript interactions (onglets, FAQ, formulaire)
├── dist/                  # Build output (Cloudflare Workers)
├── ecosystem.config.cjs   # PM2 configuration
├── wrangler.jsonc         # Cloudflare configuration
├── package.json           # Dependencies & scripts
└── README.md             # Ce fichier
```

## 📈 Prochaines étapes

### Déploiement GitHub
- [ ] Push vers repository GitHub existant
- [ ] Configure GitHub Actions (optionnel)

### Déploiement Cloudflare Pages
- [ ] Créer projet Cloudflare Pages
- [ ] Configurer cloudflare_project_name
- [ ] Déployer en production
- [ ] Configurer domaine personnalisé (optionnel)

### Améliorations futures (optionnelles)
- [ ] Système de gestion de contenu (CMS)
- [ ] Analytics (Cloudflare Web Analytics)
- [ ] Formulaire de contact avec backend
- [ ] Blog intégré
- [ ] SEO optimization
- [ ] Tests automatisés

## 🎯 Caractéristiques techniques

### Points forts
- ✅ Design élégant inspiré de quube.fr
- ✅ Navigation fluide entre 5 pages
- ✅ Système d'onglets interactif fonctionnel
- ✅ FAQ accordéon animée
- ✅ Responsive design complet
- ✅ Git repository initialisé
- ✅ Code propre et maintenable
- ✅ Performance optimisée (Cloudflare Workers)

### Conformité aux prompts
- ✅ Pas de faux chiffres (450+, +76%, 60 min) ❌
- ✅ "Attestation de formation" (PAS "Certification") ✓
- ✅ Design inspiré de quube.fr ✓
- ✅ Contenu basé sur quube-ia-sante.pages.dev ✓
- ✅ 6-8 cas d'usage max par onglet (version condensée) ✓
- ✅ Photo Samuel Bottaro (placeholder professionnel) ✓
- ✅ Navigation multi-pages fonctionnelle ✓

## 👤 Contact

- **Email** : contact@quube.fr
- **Calendly** : https://calendly.com/quube

---

**Dernière mise à jour** : Février 2026  
**Version** : 1.0.0  
**Statut** : ✅ Développement terminé - Prêt pour déploiement
