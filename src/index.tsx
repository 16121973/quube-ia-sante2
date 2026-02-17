import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for all routes
app.use(renderer)

// ============================================================================
// PAGE D'ACCUEIL - CONTENU EXACT du prompt utilisateur
// ============================================================================
app.get('/', (c) => {
  return c.render(
    <>
      {/* Section 1 - HERO (fond sombre gradient, 100vh) */}
      <section class="hero">
        <div class="hero-content">
          <h1 class="fade-in" style="font-size: clamp(3rem, 12vw, 9rem) !important;">L'IA en Santé,<br />En Toute Confiance</h1>
          <p class="hero-subtitle fade-in">
            Cabinet indépendant de conseil et formation en IA pour les organisations de santé et médico-sociales. 
            De la stratégie aux usages concrets, nous vous guidons sans jargon, au service des soignants et des patients.
          </p>
          <div class="hero-cta fade-in">
            <a href="/services" class="btn btn-primary btn-large">Découvrir nos services</a>
            <a href="/contact" class="btn btn-secondary btn-large">Prendre rendez-vous</a>
          </div>
          {/* SUPPRIMÉ: ligne "Claude • ChatGPT • Gemini..." du hero (à déplacer vers pages intérieures uniquement) */}
        </div>
      </section>

      {/* Section 2 - 3 OFFRES (fond clair) */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Comment pouvons-nous vous aider ?</h2>
            <p class="section-subtitle">Trois approches complémentaires pour réussir votre transformation IA</p>
          </div>
          <div class="cards-grid">
            {/* Offre 1 - Formation */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 class="card-title">Formation & Montée en compétences</h3>
              <p class="card-description">Vos équipes deviennent autonomes sur l'IA. Du dirigeant au professionnel de terrain, des programmes progressifs 100% santé.</p>
              <a href="/services#formation" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 2 - Conseil */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 class="card-title">Conseil & Stratégie IA</h3>
              <p class="card-description">Construisons ensemble votre feuille de route IA : diagnostic de maturité, choix de solutions, pilotage de projet, conduite du changement.</p>
              <a href="/services#conseil" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 3 - Accélération (SIGNATURE) */}
            <div class="card card-signature fade-in">
              <div class="card-badge">Offre signature</div>
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="card-title">Accélération de Projet</h3>
              <p class="card-description">L'IA comme outil de production. Nous co-créons avec vous et livrons vos livrables plus rapidement avec un transfert de compétences intégré.</p>
              <a href="/services#acceleration" class="card-link">Découvrir l'offre →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - 4 PILIERS (fond légèrement teinté) */}
      <section class="section-alt">
        <div class="container">
          <div class="values-grid fade-in">
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h4 class="value-title">100% Santé × IA</h4>
              <p class="value-description">Expertise terrain sanitaire + intelligence artificielle</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 class="value-title">Neutres & Indépendants</h4>
              <p class="value-description">Aucun partenariat éditeur, conseil objectif</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 class="value-title">Concrets & Humains</h4>
              <p class="value-description">Co-construction pragmatique avec vos équipes</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
              <h4 class="value-title">Gardez la Main</h4>
              <p class="value-description">L'IA augmente, elle ne remplace pas vos équipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - 10 MÉTIERS CARDS (fond clair) */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Explorez des cas d'usage par métier</h2>
            <p class="section-subtitle">Que vous soyez directeur, manager ou professionnel de terrain, découvrez comment l'IA répond à vos défis</p>
          </div>
          <div class="use-cases-grid use-cases-grouped">
            <a href="/cas-usage#direction" class="use-case-card use-case-card-large fade-in">
              <span class="use-case-tag">Direction Générale</span>
              <h3 class="use-case-title">Stratégie, pilotage et transformation organisationnelle</h3>
              <p class="use-case-description">Pilotage stratégique, CPOM, EPRD, conseils d'administration, communication interne</p>
            </a>
            <a href="/cas-usage#administratif" class="use-case-card use-case-card-large fade-in">
              <span class="use-case-tag">Services Administratifs & Support</span>
              <h3 class="use-case-title">Finances, RH, Qualité, Achats, SI, Communication</h3>
              <p class="use-case-description">CPOM & EPRD, recrutement, HAS, appels d'offres, RGPD, valorisation projets</p>
            </a>
            <a href="/cas-usage#coeur-metier" class="use-case-card use-case-card-large fade-in">
              <span class="use-case-tag">Cœur de Métier Santé</span>
              <h3 class="use-case-title">Médical-soignant, Accompagnement, Direction des soins</h3>
              <p class="use-case-description">Projets personnalisés, transmissions, supports FALC, protocoles, audits de pratiques</p>
            </a>
          </div>
          <div class="section-cta fade-in">
            <a href="/cas-usage" class="btn btn-primary">Voir tous les cas d'usage →</a>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA FINAL (fond sombre) */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Prêt à engager votre transformation IA ?</h2>
            <p class="cta-subtitle">Échangeons 30 minutes sur vos enjeux. Sans engagement.</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Accueil' }
  )
})

// ============================================================================
// ============================================================================
// PAGE CAS D'USAGE - 3 CATÉGORIES ACCORDÉON
// NOUVELLE ROUTE /CAS-USAGE - PAGE COMPLÈTE
// À remplacer dans index.tsx lignes 166-306

app.get('/cas-usage', (c) => {
  return c.render(
    <>
      <link rel="stylesheet" href="/static/cas-usage.css" />

      {/* === HERO === */}
      <section class="hero-cas-usage">
        <div class="hero-badge-cas">
          <div class="dot-pulse"></div>
          Cas d'usage co-construits avec des professionnels de terrain
        </div>
        <h1>
          L'IA au service de votre <em>quotidien</em>, pas de la théorie
        </h1>
        <p>
          Chaque cas d'usage a été testé en conditions réelles, dans des établissements sanitaires, 
          médico-sociaux et sociaux. Pas de promesses, des résultats mesurés.
        </p>
      </section>

      {/* === SOCIAL PROOF BAR === */}
      <div class="proof-bar">
        <div class="proof-item">
          <div class="proof-number">15+</div>
          <div class="proof-label">établissements accompagnés</div>
        </div>
        <div class="proof-item">
          <div class="proof-number">–70%</div>
          <div class="proof-label">temps de rédaction rapports d'activité</div>
        </div>
        <div class="proof-item">
          <div class="proof-number">23</div>
          <div class="proof-label">cas d'usage validés sur le terrain</div>
        </div>
        <div class="proof-item">
          <div class="proof-number">100%</div>
          <div class="proof-label">approche éthique RGPD conforme</div>
        </div>
      </div>

      {/* === BANNIÈRE CRÉDIBILITÉ === */}
      <div class="credibility-banner">
        <div class="credibility-inner">
          <div class="credibility-tag">Notre approche</div>
          <div class="credibility-icon">🔬</div>
          <div class="credibility-content">
            <strong>Des cas d'usage forgés sur le terrain, pas en laboratoire</strong>
            <p>
              Nous intervenons aux côtés d'organisations employeurs majeures du secteur, d'établissements 
              de toute taille, et de professionnels en exercice. Chaque cas d'usage ci-dessous a été construit, 
              testé et mesuré en conditions réelles — avec les contraintes du quotidien : temps limité, 
              outils existants, équipes non-techniciennes.
            </p>
          </div>
        </div>
      </div>

      {/* === BADGES D'EXPERTISE === */}
      <div class="expertise-badges">
        <span class="expertise-badge">🏥 Sanitaire & Médico-social</span>
        <span class="expertise-badge">📋 Référentiels HAS</span>
        <span class="expertise-badge">🏛️ Conformité ARS & CPOM</span>
        <span class="expertise-badge">♿ FALC & Accessibilité</span>
        <span class="expertise-badge">🔒 RGPD & Éthique IA</span>
        <span class="expertise-badge">📊 SERAFIN-PH</span>
        <span class="expertise-badge">🗄️ SAE / ATIH / RTC / PMSI</span>
        <span class="expertise-badge">📐 Indicateurs ANAP & CNSA</span>
        <span class="expertise-badge">💰 EPRD / ERRD / PPI</span>
      </div>

      {/* === FILTRES PAR PERSONA === */}
      <div class="filter-section">
        <div class="filter-label">Filtrer par fonction :</div>
        <div class="filter-tabs">
          <div class="filter-tab active" data-filter="all">Tous les cas d'usage</div>
          <div class="filter-tab" data-filter="dir">Direction / Stratégie</div>
          <div class="filter-tab" data-filter="data">Data / Pilotage / Finance</div>
          <div class="filter-tab" data-filter="soin">Soignant·e</div>
          <div class="filter-tab" data-filter="rh">RH</div>
          <div class="filter-tab" data-filter="educ">Éducateur·rice</div>
          <div class="filter-tab" data-filter="qualite">Qualité / Achats / Contrôle</div>
          <div class="filter-tab" data-filter="strat">Analyse territoriale / Open Data</div>
        </div>
      </div>

      {/* === GRILLE DE CARTES (23 cartes importées) === */}
      <div class="cards-grid" id="cards-container">
        {/* Card 1 - Rapport d'activité */}
        <div class="use-case-card" data-personas="dir">
          <div class="card-header">
            <div class="card-icon blue">📊</div>
            <div class="card-title">Rapport d'activité en 2h au lieu de 2 jours</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">–70%</div>
            <div class="card-result-text">de temps de rédaction<br />mesuré en accompagnement</div>
          </div>
          <div class="card-desc">L'IA agrège vos données multi-services et génère un rapport structuré, conforme aux exigences ARS et Département. Vous relisez et validez.</div>
          <div class="card-tags">
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">ARS</span>
            <span class="card-tag">CPOM</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 2 - Projets personnalisés */}
        <div class="use-case-card" data-personas="soin">
          <div class="card-header">
            <div class="card-icon green">📝</div>
            <div class="card-title">Projets personnalisés structurés en 30 min</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">30 min</div>
            <div class="card-result-text">au lieu de 2-3h<br />par projet</div>
          </div>
          <div class="card-desc">À partir de vos notes de terrain et bilans, l'IA structure le projet personnalisé selon les référentiels HAS. Vous gardez la main clinique.</div>
          <div class="card-tags">
            <span class="card-tag soin">Soins</span>
            <span class="card-tag">HAS</span>
            <span class="card-tag">PP</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 3 - Supports FALC */}
        <div class="use-case-card" data-personas="educ">
          <div class="card-header">
            <div class="card-icon purple">🎨</div>
            <div class="card-title">Supports FALC générés en quelques clics</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">×5</div>
            <div class="card-result-text">plus de supports produits<br />par semaine</div>
          </div>
          <div class="card-desc">Transformez n'importe quel document en version Facile à Lire et à Comprendre, avec pictogrammes adaptés. Idéal pour l'accessibilité des usagers.</div>
          <div class="card-tags">
            <span class="card-tag educ">Éducatif</span>
            <span class="card-tag">FALC</span>
            <span class="card-tag">Accessibilité</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 4 - Préparation CA/CVS */}
        <div class="use-case-card" data-personas="dir">
          <div class="card-header">
            <div class="card-icon blue">🏛️</div>
            <div class="card-title">Préparation CA/CVS : synthèse multi-services automatisée</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">1h</div>
            <div class="card-result-text">de préparation au lieu<br />d'une journée</div>
          </div>
          <div class="card-desc">L'IA compile les remontées de chaque service, crée un support de présentation structuré pour vos instances de gouvernance. Prêt à personnaliser.</div>
          <div class="card-tags">
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">Gouvernance</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 5 - Protocoles HAS */}
        <div class="use-case-card" data-personas="qualite">
          <div class="card-header">
            <div class="card-icon green">✅</div>
            <div class="card-title">Protocoles HAS : de la veille à la rédaction</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">–60%</div>
            <div class="card-result-text">de temps sur la veille<br />réglementaire</div>
          </div>
          <div class="card-desc">L'IA identifie les recommandations HAS applicables, synthétise les bonnes pratiques et propose un brouillon de protocole conforme à adapter.</div>
          <div class="card-tags">
            <span class="card-tag qualite">Qualité</span>
            <span class="card-tag soin">Soins</span>
            <span class="card-tag">HAS</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 6 - Transmissions */}
        <div class="use-case-card" data-personas="soin">
          <div class="card-header">
            <div class="card-icon green">💬</div>
            <div class="card-title">Transmissions ciblées lisibles en 1 minute</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">1 min</div>
            <div class="card-result-text">pour lire une synthèse<br />de transmissions</div>
          </div>
          <div class="card-desc">Fini les transmissions illisibles. L'IA structure les notes de relève en format clair, priorise les alertes, et facilite la coordination d'équipe.</div>
          <div class="card-tags">
            <span class="card-tag soin">Soins</span>
            <span class="card-tag">Coordination</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 7 - Plan de formation */}
        <div class="use-case-card" data-personas="rh">
          <div class="card-header">
            <div class="card-icon orange">👥</div>
            <div class="card-title">Plan de formation sur mesure en une journée</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">1 jour</div>
            <div class="card-result-text">au lieu d'une semaine<br />de montage</div>
          </div>
          <div class="card-desc">L'IA analyse vos entretiens professionnels, identifie les besoins par service, et propose un plan de formation structuré, prêt à arbitrer.</div>
          <div class="card-tags">
            <span class="card-tag rh">RH</span>
            <span class="card-tag">Formation</span>
            <span class="card-tag">GPEC</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 8 - Activités éducatives */}
        <div class="use-case-card" data-personas="educ">
          <div class="card-header">
            <div class="card-icon purple">🧩</div>
            <div class="card-title">Activités éducatives personnalisées par profil</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">∞</div>
            <div class="card-result-text">d'idées adaptées au profil<br />de chaque usager</div>
          </div>
          <div class="card-desc">L'IA propose des activités éducatives ajustées aux capacités, intérêts et objectifs de chaque usager. L'éducateur choisit, adapte et anime.</div>
          <div class="card-tags">
            <span class="card-tag educ">Éducatif</span>
            <span class="card-tag">Personnalisation</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 9 - Appels à projets */}
        <div class="use-case-card" data-personas="rh dir">
          <div class="card-header">
            <div class="card-icon orange">📋</div>
            <div class="card-title">Réponse aux appels à projets 3× plus vite</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">×3</div>
            <div class="card-result-text">de rapidité sur le<br />montage dossier</div>
          </div>
          <div class="card-desc">L'IA structure votre réponse à partir du cahier des charges, intègre vos données établissement, et génère un dossier de candidature prêt à finaliser.</div>
          <div class="card-tags">
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">Admin</span>
            <span class="card-tag">AAP</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 10 - EPRD/ERRD */}
        <div class="use-case-card" data-personas="data dir">
          <div class="card-header">
            <div class="card-icon indigo">💰</div>
            <div class="card-title">EPRD/ERRD : modélisation financière en quelques heures</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">–80%</div>
            <div class="card-result-text">de temps sur la<br />modélisation budgétaire</div>
          </div>
          <div class="card-desc">L'IA structure vos données comptables, projette les tendances, et génère un EPRD/ERRD pré-rempli conforme aux cadres ARS. Vous arbitrez, elle calcule.</div>
          <div class="card-tags">
            <span class="card-tag data">Data & Finance</span>
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">EPRD</span>
            <span class="card-tag">ERRD</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 11 - PPI */}
        <div class="use-case-card" data-personas="data dir">
          <div class="card-header">
            <div class="card-icon indigo">🏗️</div>
            <div class="card-title">Plan Pluriannuel d'Investissement : scénarios simulés en temps réel</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">3→1</div>
            <div class="card-result-text">semaine au lieu de 3<br />pour un PPI complet</div>
          </div>
          <div class="card-desc">L'IA modélise différents scénarios d'investissement (travaux, équipements, numérique), simule l'impact sur la CAF et la trésorerie, et génère un plan pluriannuel chiffré.</div>
          <div class="card-tags">
            <span class="card-tag data">Data & Finance</span>
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">PPI</span>
            <span class="card-tag">CAF</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 12 - Business models */}
        <div class="use-case-card" data-personas="data dir">
          <div class="card-header">
            <div class="card-icon indigo">📈</div>
            <div class="card-title">Simulation de business models : tester avant de décider</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">∞</div>
            <div class="card-result-text">de scénarios testables<br />en quelques clics</div>
          </div>
          <div class="card-desc">Ouverture de places, création de service, changement de tarification — l'IA simule l'impact financier de chaque hypothèse et compare les scénarios visuellement.</div>
          <div class="card-tags">
            <span class="card-tag data">Data & Finance</span>
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">CPOM</span>
            <span class="card-tag">Tarification</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 13 - Tableaux de bord */}
        <div class="use-case-card" data-personas="data dir">
          <div class="card-header">
            <div class="card-icon indigo">🎯</div>
            <div class="card-title">Tableaux de bord pilotage : vos indicateurs en un coup d'œil</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">Temps réel</div>
            <div class="card-result-text">suivi des indicateurs<br />clés automatisé</div>
          </div>
          <div class="card-desc">L'IA agrège vos données RH, financières et d'activité pour produire des dashboards actualisés, avec alertes sur les écarts significatifs. Fini les tableaux Excel manuels.</div>
          <div class="card-tags">
            <span class="card-tag data">Data & Finance</span>
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">KPI</span>
            <span class="card-tag">ANAP</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 14 - GPEC prédictive */}
        <div class="use-case-card" data-personas="rh">
          <div class="card-header">
            <div class="card-icon orange">📊</div>
            <div class="card-title">GPEC prédictive : anticiper les départs et besoins en compétences</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">12 mois</div>
            <div class="card-result-text">de visibilité<br />sur les effectifs</div>
          </div>
          <div class="card-desc">L'IA croise pyramide des âges, ancienneté, turnover historique et entretiens pour projeter vos besoins en recrutement et formation sur 1 à 3 ans.</div>
          <div class="card-tags">
            <span class="card-tag rh">RH</span>
            <span class="card-tag">GPEC</span>
            <span class="card-tag">Prédictif</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 15 - Analyse absentéisme */}
        <div class="use-case-card" data-personas="rh data">
          <div class="card-header">
            <div class="card-icon orange">🔍</div>
            <div class="card-title">Analyse absentéisme : comprendre les patterns, agir en amont</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">–25%</div>
            <div class="card-result-text">d'absentéisme visé par<br />l'identification des causes</div>
          </div>
          <div class="card-desc">L'IA détecte les corrélations entre absentéisme, services, périodes et profils. Elle identifie les signaux faibles avant que la situation ne se dégrade.</div>
          <div class="card-tags">
            <span class="card-tag rh">RH</span>
            <span class="card-tag data">Data</span>
            <span class="card-tag">QVT</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 16 - Fiches de poste */}
        <div class="use-case-card" data-personas="rh">
          <div class="card-header">
            <div class="card-icon orange">✍️</div>
            <div class="card-title">Fiches de poste et annonces : rédigées en 15 min, conformes CCN</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">15 min</div>
            <div class="card-result-text">par fiche de poste<br />prête à diffuser</div>
          </div>
          <div class="card-desc">L'IA génère des fiches de poste conformes à votre convention collective (CCN 66, 51, BAD…), adaptées au profil recherché et à votre culture d'établissement.</div>
          <div class="card-tags">
            <span class="card-tag rh">RH</span>
            <span class="card-tag">Recrutement</span>
            <span class="card-tag">CCN</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 17 - Contrôle achats */}
        <div class="use-case-card" data-personas="qualite data">
          <div class="card-header">
            <div class="card-icon teal">🛒</div>
            <div class="card-title">Contrôle achats : détecter les surcoûts et doublons automatiquement</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">5-15%</div>
            <div class="card-result-text">d'économies identifiées sur<br />les achats récurrents</div>
          </div>
          <div class="card-desc">L'IA analyse vos bons de commande, factures et contrats fournisseurs. Elle repère les doublons, écarts de prix, et fournisseurs hors marché.</div>
          <div class="card-tags">
            <span class="card-tag qualite">Contrôle</span>
            <span class="card-tag data">Data</span>
            <span class="card-tag">Achats</span>
            <span class="card-tag">Anomalies</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 18 - Détection d'anomalies */}
        <div class="use-case-card" data-personas="qualite data">
          <div class="card-header">
            <div class="card-icon teal">⚠️</div>
            <div class="card-title">Détection d'anomalies : facturation, pointages, écritures comptables</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">24/7</div>
            <div class="card-result-text">surveillance automatique<br />des flux de données</div>
          </div>
          <div class="card-desc">L'IA scanne en continu vos flux (paie, facturation, comptabilité) et alerte sur les incohérences : montants atypiques, erreurs de saisie, écarts de pointage.</div>
          <div class="card-tags">
            <span class="card-tag qualite">Contrôle</span>
            <span class="card-tag data">Data</span>
            <span class="card-tag">Anomalies</span>
            <span class="card-tag">Facturation</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 19 - Pré-audit qualité */}
        <div class="use-case-card" data-personas="qualite">
          <div class="card-header">
            <div class="card-icon teal">🔎</div>
            <div class="card-title">Pré-audit qualité : auto-évaluation continue avant le contrôle</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">–50%</div>
            <div class="card-result-text">de temps de préparation<br />avant évaluation externe</div>
          </div>
          <div class="card-desc">L'IA compare vos pratiques documentées aux référentiels HAS/ESSMS. Elle identifie les écarts, génère un plan d'action priorisé, et suit l'avancement des corrections.</div>
          <div class="card-tags">
            <span class="card-tag qualite">Qualité</span>
            <span class="card-tag">HAS</span>
            <span class="card-tag">Évaluation</span>
            <span class="card-tag">ESSMS</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 20 - Benchmark territorial */}
        <div class="use-case-card" data-personas="strat dir data">
          <div class="card-header">
            <div class="card-icon pink">🗺️</div>
            <div class="card-title">Benchmark territorial : positionnez-vous via SAE, ATIH, CNSA</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">Open Data</div>
            <div class="card-result-text">croisement automatique<br />de bases publiques</div>
          </div>
          <div class="card-desc">L'IA interroge les bases SAE, ATIH, RTC, PMSI, CNSA et indicateurs ANAP pour vous situer par rapport aux établissements comparables de votre territoire. Taux d'occupation, coûts, activité — en quelques clics.</div>
          <div class="card-tags">
            <span class="card-tag strat">Stratégie</span>
            <span class="card-tag data">Data</span>
            <span class="card-tag">SAE</span>
            <span class="card-tag">ATIH</span>
            <span class="card-tag">ANAP</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 21 - Analyse besoins territoire */}
        <div class="use-case-card" data-personas="strat dir">
          <div class="card-header">
            <div class="card-icon pink">📍</div>
            <div class="card-title">Analyse des besoins du territoire : identifier les zones blanches</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">360°</div>
            <div class="card-result-text">vision territoriale<br />données croisées</div>
          </div>
          <div class="card-desc">L'IA croise données démographiques (INSEE), offre existante (FINESS, SAE), indicateurs de précarité et données ARS pour cartographier les besoins non couverts sur votre territoire.</div>
          <div class="card-tags">
            <span class="card-tag strat">Stratégie</span>
            <span class="card-tag">FINESS</span>
            <span class="card-tag">INSEE</span>
            <span class="card-tag">PRS</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 22 - Analyse RTC & coûts */}
        <div class="use-case-card" data-personas="strat data dir">
          <div class="card-header">
            <div class="card-icon pink">⚖️</div>
            <div class="card-title">Analyse RTC & coûts : comparez votre structure aux référentiels nationaux</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">RTC</div>
            <div class="card-result-text">retraitement comptable<br />analysé automatiquement</div>
          </div>
          <div class="card-desc">L'IA décompose votre RTC, compare chaque poste aux moyennes nationales et régionales (ATIH, CNSA), et identifie les leviers d'optimisation. Idéal pour négocier votre CPOM.</div>
          <div class="card-tags">
            <span class="card-tag strat">Stratégie</span>
            <span class="card-tag data">Data</span>
            <span class="card-tag">RTC</span>
            <span class="card-tag">CPOM</span>
            <span class="card-tag">CNSA</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 23 - Veille stratégique */}
        <div class="use-case-card" data-personas="strat dir">
          <div class="card-header">
            <div class="card-icon pink">📰</div>
            <div class="card-title">Veille stratégique : réformes, appels à projets, évolutions tarifaires</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">Quotidien</div>
            <div class="card-result-text">veille automatisée<br />filtrée par pertinence</div>
          </div>
          <div class="card-desc">L'IA surveille les publications ARS, CNSA, DGCS, Légifrance et vous alerte uniquement sur ce qui impacte votre activité. Plus besoin d'éplucher les bulletins officiels.</div>
          <div class="card-tags">
            <span class="card-tag strat">Stratégie</span>
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">Veille</span>
            <span class="card-tag">Réglementaire</span>
          </div>
          <div class="card-cta">
            Voir le détail
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* === SECTION AVANT/APRÈS === */}
      <div class="before-after">
        <h2 class="ba-title">Votre quotidien, avant et après l'IA</h2>
        <p class="ba-subtitle">Constats terrain sur 15+ établissements accompagnés</p>
        <div class="ba-grid">
          <div class="ba-col before">
            <h3>❌ Sans IA</h3>
            <div class="ba-item"><span>⏰</span> 2 jours pour un rapport d'activité</div>
            <div class="ba-item"><span>📄</span> EPRD/PPI montés manuellement sous Excel</div>
            <div class="ba-item"><span>😩</span> Aucune visibilité sur votre positionnement territorial</div>
            <div class="ba-item"><span>🔍</span> Anomalies factures/achats détectées au hasard</div>
            <div class="ba-item"><span>📝</span> Turnover subi, pas anticipé</div>
            <div class="ba-item"><span>🗂️</span> Données SAE/ATIH/RTC inexploitées</div>
          </div>
          <div class="ba-col after">
            <h3>✅ Avec QUUBE·IA</h3>
            <div class="ba-item"><span>⚡</span> Rapport d'activité en 2h, EPRD simulé en 1 jour</div>
            <div class="ba-item"><span>📈</span> Business models testés en quelques clics</div>
            <div class="ba-item"><span>🗺️</span> Benchmark territorial automatique via Open Data</div>
            <div class="ba-item"><span>⚠️</span> Détection d'anomalies 24/7 sur tous vos flux</div>
            <div class="ba-item"><span>👥</span> GPEC prédictive, absentéisme analysé</div>
            <div class="ba-item"><span>🎯</span> Données publiques croisées pour piloter votre stratégie</div>
          </div>
        </div>
      </div>

      {/* === SECTION MÉTHODE === */}
      <section class="approach-section">
        <div class="approach-inner">
          <h2>Notre méthode en 4 étapes</h2>
          <p>Un accompagnement concret, ancré dans vos pratiques réelles</p>
          <div class="approach-steps">
            <div class="approach-step">
              <div class="step-number">1</div>
              <div class="step-title">Diagnostic terrain</div>
              <div class="step-desc">On observe vos pratiques, on identifie les irritants à fort impact IA</div>
            </div>
            <div class="approach-step">
              <div class="step-number">2</div>
              <div class="step-title">Cas d'usage pilotes</div>
              <div class="step-desc">On teste 2-3 cas concrets avec vos équipes, on mesure les résultats</div>
            </div>
            <div class="approach-step">
              <div class="step-number">3</div>
              <div class="step-title">Formation métier</div>
              <div class="step-desc">Vos équipes apprennent dans leur langage, avec leurs documents</div>
            </div>
            <div class="approach-step">
              <div class="step-number">4</div>
              <div class="step-title">Autonomie</div>
              <div class="step-desc">Templates, prompts et process en place. Vous êtes autonomes.</div>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <div class="cta-cas-usage">
        <h2>Prêt à gagner du temps sur ce qui compte ?</h2>
        <p>Échangeons 30 min sur vos cas d'usage. On vous montre concrètement ce que l'IA peut changer dans votre quotidien.</p>
        <div class="cta-buttons">
          <a href="/contact" class="btn-primary-cas">Réserver un créneau →</a>
          <a href="#" class="btn-secondary-cas">Télécharger nos cas d'usage (PDF)</a>
        </div>
      </div>
    </>,
    { title: 'Cas d\'usage' }
  )
})

// PAGE NOS SERVICES - 3 SECTIONS DÉTAILLÉES
// ============================================================================
app.get('/services', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in">Nos services</h1>
          <p class="hero-subtitle fade-in">Trois approches complémentaires pour réussir votre transformation IA</p>
        </div>
      </section>

      {/* Section Formation */}
      <section class="section-light" id="formation">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Formation & Montée en compétences</h2>
            <p class="section-subtitle">Vos équipes deviennent autonomes sur l'IA. Programmes progressifs 100% santé.</p>
          </div>
          
          <div class="offer-cards-grid">
            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Niveau 1 : Sensibilisation</h3>
              <p class="offer-duration">Durée : 2 heures</p>
              <p class="offer-description">Conférence ou atelier découverte pour lever les craintes, montrer des exemples concrets du secteur santé et identifier les premiers cas d'usage.</p>
              <ul class="offer-list">
                <li>Qu'est-ce que l'IA générative ?</li>
                <li>Opportunités et risques en santé</li>
                <li>Exemples de cas d'usage par métier</li>
                <li>Éthique, RGPD et AI Act</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Niveau 2 : Initiation</h3>
              <p class="offer-duration">Durée : 1 jour</p>
              <p class="offer-description">Formation pratique pour prendre en main les outils IA (ChatGPT, Claude, etc.), maîtriser les prompts et intégrer l'IA dans son quotidien professionnel.</p>
              <ul class="offer-list">
                <li>Choisir le bon outil selon l'usage</li>
                <li>Rédiger des prompts efficaces</li>
                <li>Cas pratiques métier (CPOM, fiches de poste, protocoles)</li>
                <li>Bonnes pratiques de sécurité des données</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Niveau 3 : Expertise</h3>
              <p class="offer-duration">Durée : 2 à 3 jours</p>
              <p class="offer-description">Programme avancé pour les power-users : automatisation de processus, création de GPTs personnalisés, pilotage de projets IA.</p>
              <ul class="offer-list">
                <li>Techniques avancées de prompting</li>
                <li>Création de GPTs métier personnalisés</li>
                <li>Intégration IA dans les workflows existants</li>
                <li>Accompagnement de la transformation IA</li>
              </ul>
            </div>
          </div>
          
          <div class="section-cta fade-in">
            <a href="/contact" class="btn btn-primary">Demander un devis formation</a>
          </div>
        </div>
      </section>

      {/* Section Conseil */}
      <section class="section-alt" id="conseil">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Conseil & Stratégie IA</h2>
            <p class="section-subtitle">Construisons ensemble votre feuille de route IA</p>
          </div>
          
          <div class="offer-cards-grid">
            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Diagnostic de maturité IA</h3>
              <p class="offer-description">Audit complet de votre organisation pour identifier le niveau de maturité IA, les freins et les opportunités.</p>
              <ul class="offer-list">
                <li>Cartographie des usages potentiels</li>
                <li>Analyse des compétences existantes</li>
                <li>Évaluation de la gouvernance et des risques</li>
                <li>Recommandations priorisées</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Feuille de route IA</h3>
              <p class="offer-description">Co-construction d'une stratégie IA adaptée à vos enjeux, avec un plan d'action opérationnel sur 12 à 24 mois.</p>
              <ul class="offer-list">
                <li>Définition des objectifs et KPIs</li>
                <li>Roadmap par métier et par usage</li>
                <li>Budgétisation et ROI attendu</li>
                <li>Plan de formation et de conduite du changement</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Choix de solutions IA</h3>
              <p class="offer-description">Accompagnement neutre et indépendant pour sélectionner les outils IA adaptés à vos besoins (aucun partenariat éditeur).</p>
              <ul class="offer-list">
                <li>Benchmark des solutions du marché</li>
                <li>Grille d'analyse multicritères</li>
                <li>Tests et POC avec vos équipes</li>
                <li>Support au cahier des charges</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Pilotage de projet IA</h3>
              <p class="offer-description">Assistance à maîtrise d'ouvrage pour piloter vos projets de transformation IA de bout en bout.</p>
              <ul class="offer-list">
                <li>Cadrage et gouvernance projet</li>
                <li>Coordination des parties prenantes</li>
                <li>Suivi des jalons et livrables</li>
                <li>Mesure du ROI et ajustements</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Conduite du changement</h3>
              <p class="offer-description">Accompagnement humain de vos équipes pour faire de l'IA un levier d'épanouissement professionnel.</p>
              <ul class="offer-list">
                <li>Analyse des impacts et résistances</li>
                <li>Plan de communication interne</li>
                <li>Formation des ambassadeurs IA</li>
                <li>Suivi et évaluation post-déploiement</li>
              </ul>
            </div>
          </div>
          
          <div class="section-cta fade-in">
            <a href="/contact" class="btn btn-primary">Échanger sur votre projet</a>
          </div>
        </div>
      </section>

      {/* Section Accélération */}
      <section class="section-light" id="acceleration">
        <div class="container">
          <div class="section-header fade-in">
            <div class="offer-badge-large">Offre signature</div>
            <h2 class="section-title">Accélération de Projet</h2>
            <p class="section-subtitle">L'IA comme outil de production. Nous co-créons avec vous et livrons vos livrables plus rapidement.</p>
          </div>
          
          <div class="offer-intro fade-in">
            <p>Dans cette offre, nous ne nous contentons pas de vous conseiller : nous travaillons en binôme avec vous, l'IA à la main, pour produire vos livrables. Vous gagnez du temps, vous apprenez en faisant, et vous gardez la main sur le contenu.</p>
          </div>

          <div class="offer-cards-grid">
            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Stratégie & feuilles de route</h3>
              <ul class="offer-list">
                <li>Schéma directeur des systèmes d'information</li>
                <li>Plan stratégique d'établissement</li>
                <li>Roadmap transformation numérique</li>
                <li>Stratégie de communication</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Documents financiers & pilotage</h3>
              <ul class="offer-list">
                <li>CPOM (Contrat Pluriannuel d'Objectifs et de Moyens)</li>
                <li>EPRD (État Prévisionnel des Recettes et Dépenses)</li>
                <li>Business plans et dossiers de financement</li>
                <li>Tableaux de bord et reportings</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Appels d'offres & cahiers des charges</h3>
              <ul class="offer-list">
                <li>Cahiers des charges SI, achats, travaux</li>
                <li>Analyse et comparaison d'offres</li>
                <li>Grilles d'évaluation multicritères</li>
                <li>Support à la négociation</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Qualité, certification & conformité</h3>
              <ul class="offer-list">
                <li>Auto-évaluations HAS</li>
                <li>Procédures qualité et protocoles</li>
                <li>Registres RGPD et analyses d'impact</li>
                <li>Rapports d'audit et plans d'action</li>
              </ul>
            </div>
          </div>
          
          <div class="section-cta fade-in">
            <a href="/contact" class="btn btn-primary">Accélérer votre prochain projet</a>
          </div>
        </div>
      </section>

      {/* Méthodologie 5 phases */}
      <section class="section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Notre méthodologie en 5 phases</h2>
            <p class="section-subtitle">Un accompagnement structuré et itératif</p>
          </div>
          
          <div class="methodology-timeline fade-in">
            <div class="timeline-item">
              <div class="timeline-number">1</div>
              <h3 class="timeline-title">Cadrage</h3>
              <p class="timeline-description">Compréhension de vos enjeux, objectifs et contraintes. Définition du périmètre et des livrables attendus.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">2</div>
              <h3 class="timeline-title">Diagnostic</h3>
              <p class="timeline-description">Analyse de l'existant, identification des opportunités IA et des points de vigilance (RGPD, éthique, faisabilité).</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">3</div>
              <h3 class="timeline-title">Co-création</h3>
              <p class="timeline-description">Ateliers collaboratifs pour concevoir les solutions, rédiger les premiers livrables et former vos équipes en pratique.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">4</div>
              <h3 class="timeline-title">Livraison</h3>
              <p class="timeline-description">Remise des livrables finalisés (documents, outils, procédures) et transfert de compétences complet.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">5</div>
              <h3 class="timeline-title">Suivi</h3>
              <p class="timeline-description">Accompagnement post-livraison, mesure des impacts, ajustements et consolidation de l'autonomie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Quelle offre vous correspond ?</h2>
            <p class="cta-subtitle">Échangeons 30 minutes sur vos enjeux</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Nos services' }
  )
})

// ============================================================================
// PAGE QUI SOMMES-NOUS
// ============================================================================
app.get('/a-propos', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in">Qui sommes-nous ?</h1>
          <p class="hero-subtitle fade-in">Expertise santé et intelligence artificielle au service de votre transformation</p>
        </div>
      </section>

      {/* Section Fondateur */}
      <section class="section-founder">
        <div class="container">
          <div class="founder-content fade-in">
            <div class="founder-image">
              <img src="https://cdn.prod.website-files.com/6693d568b935c546e51f1b34/66acd25a39ef72c39238a511_samuel_bottaro.webp" alt="Samuel Bottaro, Fondateur" />
            </div>
            <div class="founder-bio">
              <h2>Samuel Bottaro</h2>
              <h3>Fondateur QUUBE IA Santé</h3>
              <p>Consultant indépendant depuis 2000, j'accompagne les acteurs de la santé et du médico-social dans leurs transformations stratégiques et opérationnelles.</p>
              <p>En 2023, j'ai décidé de créer QUUBE IA Santé pour répondre à une conviction forte : l'intelligence artificielle peut être un levier majeur d'efficience et d'épanouissement professionnel dans le secteur de la santé, à condition d'être maîtrisée avec méthode et éthique.</p>
              <p>Fort d'une expérience de plus de 25 ans dans le secteur, je connais les réalités du terrain, la complexité des organisations et l'importance de l'humain dans toute démarche de transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision - 4 Piliers */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Notre vision</h2>
            <p class="section-subtitle">Quatre piliers pour un accompagnement réussi</p>
          </div>
          
          <div class="vision-grid">
            <div class="vision-card fade-in">
              <svg class="vision-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3>100% Santé</h3>
              <p>Nous ne travaillons qu'avec le secteur sanitaire, social et médico-social. Cette spécialisation garantit une compréhension fine de vos enjeux (CPOM, HAS, RGPD santé, AI Act...) et un langage commun.</p>
            </div>

            <div class="vision-card fade-in">
              <svg class="vision-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3>Indépendance & Neutralité</h3>
              <p>Nous n'avons aucun partenariat avec des éditeurs de logiciels ou fournisseurs d'IA. Nos conseils sont objectifs et guidés uniquement par vos intérêts.</p>
            </div>

            <div class="vision-card fade-in">
              <svg class="vision-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>Approche Terrain</h3>
              <p>Pas de jargon technique ni de promesses marketing. Nous travaillons en co-construction avec vos équipes, dans le respect de vos contraintes et de vos valeurs.</p>
            </div>

            <div class="vision-card fade-in">
              <svg class="vision-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3>Autonomie & Transfert</h3>
              <p>Notre objectif est de vous rendre autonome. Chaque mission intègre un transfert de compétences pour que vos équipes maîtrisent l'IA sur la durée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section class="section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Notre méthodologie</h2>
            <p class="section-subtitle">Un accompagnement structuré en 5 phases</p>
          </div>
          
          <div class="methodology-timeline fade-in">
            <div class="timeline-item">
              <div class="timeline-number">1</div>
              <h3 class="timeline-title">Cadrage</h3>
              <p class="timeline-description">Compréhension de vos enjeux, objectifs et contraintes. Définition du périmètre et des livrables attendus.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">2</div>
              <h3 class="timeline-title">Diagnostic</h3>
              <p class="timeline-description">Analyse de l'existant, identification des opportunités IA et des points de vigilance (RGPD, éthique, faisabilité).</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">3</div>
              <h3 class="timeline-title">Co-création</h3>
              <p class="timeline-description">Ateliers collaboratifs pour concevoir les solutions, rédiger les premiers livrables et former vos équipes en pratique.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">4</div>
              <h3 class="timeline-title">Livraison</h3>
              <p class="timeline-description">Remise des livrables finalisés (documents, outils, procédures) et transfert de compétences complet.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">5</div>
              <h3 class="timeline-title">Suivi</h3>
              <p class="timeline-description">Accompagnement post-livraison, mesure des impacts, ajustements et consolidation de l'autonomie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terrains d'intervention */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Nos terrains d'intervention</h2>
            <p class="section-subtitle">Une expertise reconnue dans 10 secteurs du système de santé français</p>
          </div>
          
          <div class="sectors-list fade-in">
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Établissements et services médico-sociaux (ESSMS)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Établissements de santé (hôpitaux, cliniques, EHPAD)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Services d'aide et de soins à domicile (SAAD, SSIAD, SPASAD)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Centres hospitaliers universitaires (CHU)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Groupements hospitaliers de territoire (GHT)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Agences régionales de santé (ARS) et organismes de santé publique</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fédérations et têtes de réseau du secteur santé/social</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Organismes de formation secteur santé</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Collectivités territoriales (volet santé/social)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cabinets de conseil spécialisés santé</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Envie d'en savoir plus ?</h2>
            <p class="cta-subtitle">Échangeons sur votre contexte et vos ambitions</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Qui sommes-nous' }
  )
})

// ============================================================================
// PAGE CONTACT
// ============================================================================
app.get('/contact', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in">Parlons de votre projet</h1>
          <p class="hero-subtitle fade-in">Nous vous répondons sous 48h</p>
        </div>
      </section>

      {/* Section Contact */}
      <section class="section-light">
        <div class="container">
          <div class="contact-grid">
            {/* Formulaire de contact */}
            <div class="contact-form-wrapper fade-in">
              <h2 class="form-title">Envoyez-nous un message</h2>
              <form class="contact-form" method="post" action="/api/contact">
                <div class="form-group">
                  <label for="nom">Nom et prénom *</label>
                  <input type="text" id="nom" name="nom" required />
                </div>
                
                <div class="form-group">
                  <label for="email">Email professionnel *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div class="form-group">
                  <label for="organisation">Organisme / Établissement *</label>
                  <input type="text" id="organisation" name="organisation" required />
                </div>
                
                <div class="form-group">
                  <label for="fonction">Fonction</label>
                  <input type="text" id="fonction" name="fonction" />
                </div>
                
                <div class="form-group">
                  <label for="besoin">Votre besoin *</label>
                  <select id="besoin" name="besoin" required>
                    <option value="">-- Sélectionnez --</option>
                    <option value="formation">Formation & Montée en compétences</option>
                    <option value="conseil">Conseil & Stratégie IA</option>
                    <option value="acceleration">Accélération de Projet</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="message">Votre message *</label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                
                <div class="form-group">
                  <label class="checkbox-label">
                    <input type="checkbox" name="rgpd" required />
                    <span>J'accepte que mes données soient traitées dans le cadre de cette demande (conformément au RGPD)*</span>
                  </label>
                </div>
                
                <button type="submit" class="btn btn-primary btn-large">Envoyer le message</button>
              </form>
            </div>

            {/* Coordonnées */}
            <div class="contact-info-wrapper fade-in">
              <h2 class="info-title">Coordonnées</h2>
              
              <div class="info-item">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:contact@quube-ia-sante.fr">contact@quube-ia-sante.fr</a>
                </div>
              </div>
              
              <div class="info-item">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4>Adresse</h4>
                  <p>Paris & Île-de-France<br />Interventions sur toute la France</p>
                </div>
              </div>
              
              <div class="info-item">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4>Prendre rendez-vous</h4>
                  <a href="https://calendly.com/samuel-bottaro/30min" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Calendly - 30 minutes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Questions fréquentes</h2>
          </div>
          
          <div class="faq-wrapper">
            <details class="faq-item fade-in">
              <summary class="faq-question">
                Combien coûte un accompagnement QUUBE IA Santé ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="faq-answer">
                <p>Nos tarifs varient selon la nature de la mission (formation, conseil, accélération), la durée et la complexité. Une formation Sensibilisation (2h) démarre à partir de 1 200€ HT. Un accompagnement stratégique sur-mesure se construit en fonction de vos besoins.</p>
                <p>Nous vous proposons systématiquement un devis détaillé après un premier échange pour comprendre vos enjeux.</p>
              </div>
            </details>

            <details class="faq-item fade-in">
              <summary class="faq-question">
                Intervenez-vous partout en France ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="faq-answer">
                <p>Oui, nous intervenons sur l'ensemble du territoire français. Basé en Île-de-France, je me déplace régulièrement en région pour des missions de formation, de conseil ou d'accompagnement terrain.</p>
                <p>Certaines prestations (diagnostics, ateliers, suivi) peuvent également être réalisées à distance en visioconférence pour optimiser les coûts et les délais.</p>
              </div>
            </details>

            <details class="faq-item fade-in">
              <summary class="faq-question">
                Travaillez-vous avec des éditeurs de logiciels IA ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="faq-answer">
                <p>Non. QUUBE IA Santé est totalement indépendant et n'a aucun partenariat commercial avec des éditeurs de logiciels ou fournisseurs d'IA.</p>
                <p>Cette indépendance garantit un conseil objectif et guidé uniquement par vos intérêts. Si nous devons vous aider à choisir une solution, nous réalisons un benchmark neutre et transparent.</p>
              </div>
            </details>

            <details class="faq-item fade-in">
              <summary class="faq-question">
                Quels sont les délais pour démarrer une mission ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="faq-answer">
                <p>Pour une formation : entre 2 et 4 semaines selon la disponibilité de vos équipes et la complexité du programme.</p>
                <p>Pour un accompagnement stratégique : nous pouvons démarrer sous 2 à 3 semaines après validation du devis.</p>
                <p>Pour l'offre Accélération : le délai dépend du projet, mais nous sommes réactifs et pouvons démarrer rapidement si besoin.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Une autre question ?</h2>
            <p class="cta-subtitle">Parlons-en directement</p>
            <a href="https://calendly.com/samuel-bottaro/30min" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Contact' }
  )
})

export default app
