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
            Studio d'accélération des usages IA<br />
            Santé & Médico-social — Cas d'usage concrets, mis en routine avec vos équipes, autonomie transférée.
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
            {/* Offre 1 - Parcours Compétences IA */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 class="card-title">Parcours Compétences IA -  Comprendre</h3>
              <p class="card-description"><strong>Parce que la transformation IA se construit de l'intérieur.</strong><br />De la sensibilisation à l'autonomie, des formats adaptés à chaque étape.</p>
              <a href="/services/parcours-competences-ia" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 2 - Trajectoire IA */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3 class="card-title">Trajectoire IA - Déployez</h3>
              <p class="card-description"><strong>Construisons ensemble votre cap IA — et les moyens de le tenir.</strong><br />Diagnostic, choix stratégiques, co-pilotage, conduite du changement.</p>
              <a href="/services/trajectoire-ia" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 3 - Conseil Augmenté (SIGNATURE) */}
            <div class="card card-signature fade-in">
              <div class="card-badge">Offre signature</div>
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="card-title">Accélération de projets via l'IA - Délivrez</h3>
              <p class="card-description"><strong>Vos projets réels, réalisés plus vite, mieux — et vous gardez la méthode.</strong><br />Co-production de livrables outillée par l'IA, transfert de compétences intégré.</p>
              <a href="/services/conseil-augmente" class="card-link">Découvrir →</a>
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

      {/* Section 4 - CTA FINAL (fond sombre) */}
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
      <link rel="stylesheet" href="/static/cas-usage-v3.css" />

      {/* === SECTION 1: HERO COMPACT (discours de preuve honnête) === */}
      <section class="hero-cas-usage-v3">
        <div class="container">
          <div class="hero-content-v3">
            <div class="hero-badge-v3">
              <div class="dot-pulse"></div>
              23 cas d'usage conçus à partir de 25 ans d'expérience terrain
            </div>
            <h1>L'IA au service de votre <em>quotidien</em>, pas de la théorie</h1>
            <p class="hero-subtitle-v3">
              Chaque cas d'usage ci-dessous a été conçu à partir de problématiques terrain rencontrées pendant 25 ans dans le secteur sanitaire et médico-social. 
              Des gains estimés de <strong>50 à 70% sur vos tâches à forte valeur ajoutée</strong> — à mesurer ensemble sur votre contexte.
            </p>
            
            {/* Mini social proof intégré - reformulé */}
            <div class="hero-stats-v3">
              <div class="stat-item-v3">
                <span class="stat-number-v3">25 ans</span>
                <span class="stat-label-v3">d'expérience terrain</span>
              </div>
              <div class="stat-item-v3">
                <span class="stat-number-v3">50-70%</span>
                <span class="stat-label-v3">gains estimés</span>
              </div>
              <div class="stat-item-v3">
                <span class="stat-number-v3">100%</span>
                <span class="stat-label-v3">RGPD conforme</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 2: FILTRES + CARTES === */}
      <section class="section-cas-usage-v3">
        <div class="container">
          <div class="filter-section-v3">
            <h2 class="filter-title-v3">Filtrer par fonction</h2>
            <div class="filter-tabs-v3">
              <div class="filter-tab-v3 active" data-filter="all">Tous</div>
              <div class="filter-tab-v3" data-filter="dir">Direction</div>
              <div class="filter-tab-v3" data-filter="data">Data / Finance</div>
              <div class="filter-tab-v3" data-filter="soin">Soignant·e</div>
              <div class="filter-tab-v3" data-filter="rh">RH</div>
              <div class="filter-tab-v3" data-filter="educ">Éducateur·rice</div>
              <div class="filter-tab-v3" data-filter="qualite">Qualité</div>
              <div class="filter-tab-v3" data-filter="strat">Stratégie</div>
            </div>
          </div>

          {/* === GRILLE DE CARTES (23 cartes importées) === */}
          <div class="cards-grid" id="cards-container">
        {/* Card 1 - Rapport d'activité (vitrine) */}
        <div class="use-case-card" data-personas="dir">
          <div class="card-header">
            <div class="card-icon blue">📊</div>
            <div class="card-title">Rapport d'activité en 2h</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">60-80%</div>
            <div class="card-result-text">gains estimés sur<br />le temps de rédaction</div>
          </div>
          <div class="card-desc"><strong>Problème :</strong> 2 jours de compilation manuelle de données multi-services. <strong>Gain :</strong> L'IA agrège vos données et génère un rapport structuré conforme ARS. À mesurer ensemble sur votre contexte.</div>
          <div class="card-tags">
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">ARS</span>
            <span class="card-tag">CPOM</span>
          </div>
          <div class="card-cta">
            Échangeons sur ce cas →
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 2 - EPRD/ERRD (vitrine) */}
        <div class="use-case-card" data-personas="data dir">
          <div class="card-header">
            <div class="card-icon indigo">💰</div>
            <div class="card-title">EPRD/ERRD simulé en 1 jour</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">70-80%</div>
            <div class="card-result-text">gains estimés sur<br />la modélisation budgétaire</div>
          </div>
          <div class="card-desc"><strong>Problème :</strong> Création manuelle sous Excel, simulations longues. <strong>Gain :</strong> L'IA structure vos données comptables et génère un EPRD pré-rempli conforme ARS. À mesurer ensemble.</div>
          <div class="card-tags">
            <span class="card-tag data">Data & Finance</span>
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">EPRD</span>
          </div>
          <div class="card-cta">
            Échangeons sur ce cas →
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>


        {/* Card 3 - CA/CVS (vitrine) */}
        <div class="use-case-card" data-personas="dir">
          <div class="card-header">
            <div class="card-icon blue">🏛️</div>
            <div class="card-title">Préparation CA/CVS en 1h</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">80-85%</div>
            <div class="card-result-text">gains estimés sur<br />la synthèse multi-services</div>
          </div>
          <div class="card-desc"><strong>Problème :</strong> 1 journée pour compiler les remontées de chaque service. <strong>Gain :</strong> L'IA synthétise automatiquement et crée un support de présentation. À mesurer ensemble.</div>
          <div class="card-tags">
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">Gouvernance</span>
          </div>
          <div class="card-cta">
            Échangeons sur ce cas →
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 4 - Benchmark territorial (vitrine) */}
        <div class="use-case-card" data-personas="strat dir data">
          <div class="card-header">
            <div class="card-icon pink">🗺️</div>
            <div class="card-title">Benchmark territorial SAE/ATIH</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">Open Data</div>
            <div class="card-result-text">croisement automatique<br />bases publiques</div>
          </div>
          <div class="card-desc"><strong>Problème :</strong> Aucune visibilité territoriale sur votre positionnement. <strong>Gain :</strong> L'IA interroge SAE, ATIH, CNSA pour vous situer vs établissements comparables.</div>
          <div class="card-tags">
            <span class="card-tag strat">Stratégie</span>
            <span class="card-tag data">Data</span>
            <span class="card-tag">SAE</span>
            <span class="card-tag">ATIH</span>
          </div>
          <div class="card-cta">
            Échangeons sur ce cas →
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 5 - Protocoles HAS (vitrine) */}
        <div class="use-case-card" data-personas="qualite">
          <div class="card-header">
            <div class="card-icon green">✅</div>
            <div class="card-title">Protocoles HAS : veille + rédaction</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">50-60%</div>
            <div class="card-result-text">gains estimés sur<br />la mise en conformité</div>
          </div>
          <div class="card-desc"><strong>Problème :</strong> Veille chronophage, rédaction manuelle des protocoles. <strong>Gain :</strong> L'IA synthétise les recommandations HAS et propose un brouillon conforme.</div>
          <div class="card-tags">
            <span class="card-tag qualite">Qualité</span>
            <span class="card-tag">HAS</span>
          </div>
          <div class="card-cta">
            Échangeons sur ce cas →
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

        {/* Card 6 - Appels à projets (vitrine) */}
        <div class="use-case-card" data-personas="dir">
          <div class="card-header">
            <div class="card-icon orange">📋</div>
            <div class="card-title">Réponse aux appels à projets</div>
          </div>
          <div class="card-result">
            <div class="card-result-metric">×3</div>
            <div class="card-result-text">rapidité estimée sur<br />le montage dossier</div>
          </div>
          <div class="card-desc"><strong>Problème :</strong> Analyse longue du cahier des charges, rédaction complexe. <strong>Gain :</strong> L'IA structure votre réponse et génère un dossier prêt à finaliser.</div>
          <div class="card-tags">
            <span class="card-tag dir">Direction</span>
            <span class="card-tag">AAP</span>
          </div>
          <div class="card-cta">
            Échangeons sur ce cas →
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </div>
        </div>

          </div>
        </div>
      </section>

      {/* === CTA PDF PREMIUM (machine à leads) === */}
      <section class="cta-pdf-section">
        <div class="container">
          <div class="cta-pdf-content">
            <h2 class="cta-pdf-title">Téléchargez nos 22 cas d'usage complets</h2>
            <p class="cta-pdf-subtitle">
              Rapport d'activité, CPOM, GPEC, formations, protocoles, transmissions... 
              Découvrez tous nos prototypages IA adaptés à votre réalité terrain.
            </p>
            
            <form class="lead-form" action="/api/leads" method="POST">
              <div class="form-group">
                <input type="text" name="name" placeholder="Nom *" required class="form-input" />
              </div>
              <div class="form-group">
                <input type="email" name="email" placeholder="Email professionnel *" required class="form-input" />
              </div>
              <div class="form-group">
                <input type="text" name="etablissement" placeholder="Établissement *" required class="form-input" />
              </div>
              <button type="submit" class="btn-primary btn-large">
                📥 Télécharger le PDF (22 cas complets)
              </button>
            </form>
            
            <p class="trust-badge">
              🔒 100% RGPD — Aucun spam, juste le PDF et nos actualités IA Santé
            </p>
          </div>
        </div>
      </section>

      {/* === SECTION 3: IMPACT & MÉTHODE (fusion Avant/Après + Méthode) === */}
      <section class="section-impact-v3">
        <div class="container">
          <h2 class="impact-title-v3">Notre méthode : diagnostic, test, autonomie</h2>
          <p class="impact-subtitle-v3">Un accompagnement ancré dans vos pratiques réelles</p>
          
          <div class="impact-grid-v3">
            <div class="impact-step-v3">
              <div class="step-icon-v3">🔬</div>
              <h3>Diagnostic terrain</h3>
              <p>On observe vos irritants et identifie les cas d'usage à fort impact</p>
            </div>
            <div class="impact-step-v3">
              <div class="step-icon-v3">⚡</div>
              <h3>Pilotes mesurés</h3>
              <p>On teste 2-3 cas concrets avec vos équipes et on mesure les gains</p>
            </div>
            <div class="impact-step-v3">
              <div class="step-icon-v3">🎯</div>
              <h3>Autonomie</h3>
              <p>Templates, prompts et process en place. Vous pilotez l'IA en interne</p>
            </div>
          </div>
          
          <div class="impact-results-v3">
            <div class="result-stat-v3">
              <span class="result-number-v3">–70%</span>
              <span class="result-label-v3">Temps de rédaction rapports</span>
            </div>
            <div class="result-stat-v3">
              <span class="result-number-v3">×3</span>
              <span class="result-label-v3">Vitesse montage projets</span>
            </div>
            <div class="result-stat-v3">
              <span class="result-number-v3">100%</span>
              <span class="result-label-v3">Équipes autonomes après formation</span>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 4: CTA FINAL === */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Prêt à tester l'IA sur vos propres cas d'usage ?</h2>
            <p class="cta-subtitle">Échangeons 30 min. On vous montre concrètement ce que l'IA peut changer dans votre quotidien.</p>
            <a href="/contact" class="btn btn-primary btn-large">Réserver un créneau</a>
          </div>
        </div>
      </section>
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
          <h1 class="fade-in" style="font-size: clamp(3rem, 12vw, 9rem) !important;">Nos services</h1>
          <p class="hero-subtitle fade-in">Trois approches complémentaires pour réussir votre transformation IA</p>
        </div>
      </section>

      {/* 3 Cartes offres */}
      <section class="section-light">
        <div class="container">
          <div class="cards-grid">
            {/* Offre 1 - Parcours Compétences IA */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 class="card-title">Parcours Compétences IA</h3>
              <p class="card-description"><strong>Parce que la transformation IA se construit de l'intérieur.</strong><br/>De la sensibilisation à l'autonomie, des formats adaptés à chaque étape.<br/><br/><em>→ Bénéfice clé : vos équipes maîtrisent l'IA et l'intègrent durablement.</em></p>
              <a href="/services/parcours-competences-ia" class="card-link">Découvrir le parcours →</a>
            </div>

            {/* Offre 2 - Trajectoire IA */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3 class="card-title">Trajectoire IA</h3>
              <p class="card-description"><strong>Construisons ensemble votre cap — et les moyens de le tenir.</strong><br/>Diagnostic, choix stratégiques, co-pilotage, conduite du changement.<br/><br/><em>→ Bénéfice clé : une feuille de route claire, adaptée à votre réalité terrain.</em></p>
              <a href="/services/trajectoire-ia" class="card-link">Découvrir la démarche →</a>
            </div>

            {/* Offre 3 - Conseil Augmenté (SIGNATURE) */}
            <div class="card card-signature fade-in">
              <div class="card-badge">Offre signature</div>
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="card-title">Conseil Augmenté</h3>
              <p class="card-description"><strong>Vos projets réels, réalisés plus vite, mieux — et vous gardez la méthode.</strong><br/>Co-production de livrables outillée par l'IA, transfert de compétences intégré.<br/><br/><em>→ Bénéfice clé : qualité supérieure + gain de temps + autonomie acquise.</em></p>
              <a href="/services/conseil-augmente" class="card-link">Découvrir l'offre →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
    { title: 'Nos services' }
  )
})

// ============================================================================
// PAGE PARCOURS COMPÉTENCES IA
// ============================================================================
app.get('/services/parcours-competences-ia', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in" style="font-size: clamp(3rem, 12vw, 9rem) !important;">Parcours Compétences IA</h1>
          <p class="hero-subtitle fade-in">Parce que la transformation IA se construit de l'intérieur</p>
        </div>
      </section>

      {/* Intro */}
      <section class="section-light">
        <div class="container">
          <div class="offer-intro fade-in">
            <p style="font-size: 1.25rem; line-height: 1.8; text-align: center; max-width: 900px; margin: 0 auto;">
              <strong>Trois entrées selon votre besoin.</strong> Des formats complémentaires pour embarquer vos équipes, vous former en tant que dirigeant, et engager vos instances de gouvernance.
            </p>
          </div>
        </div>
      </section>

      {/* PORTE 1 - Mes équipes */}
      <section class="section-light" style="padding-top: 0;">
        <div class="container">
          <div class="porte-container porte-equipes fade-in">
            <div class="porte-header">
              <div class="porte-icon">👥</div>
              <h2 class="porte-title">Mes équipes comprennent et utilisent l'IA</h2>
              <p class="porte-subtitle">Pour embarquer toute l'organisation, du premier contact à l'autonomie durable.</p>
            </div>
            
            <div class="porte-progression">
              <div class="progression-item">
                <div class="progression-number">①</div>
                <h3 class="progression-title">Initiation IA</h3>
                <p class="progression-duration">1h30</p>
                <p class="progression-description">Lever les idées reçues, comprendre les possibles, volet éthique intégré (données, confidentialité, bonnes pratiques). <strong>Objectif : éclairer, pas convaincre.</strong></p>
              </div>
              
              <div class="progression-arrow">→</div>
              
              <div class="progression-item">
                <div class="progression-number">②</div>
                <h3 class="progression-title">Atelier Cas d'Usages</h3>
                <p class="progression-duration">1 à 2 jours</p>
                <p class="progression-description">Explorer et expérimenter des cas d'usage concrets issus du secteur santé et médico-social. Chaque participant repart avec des usages opérationnels immédiatement transposables dans son quotidien professionnel.</p>
              </div>
              
              <div class="progression-arrow">→</div>
              
              <div class="progression-item">
                <div class="progression-number">③</div>
                <h3 class="progression-title">Ambassadeurs IA</h3>
                <p class="progression-duration">Programme structuré</p>
                <p class="progression-description">Former des relais internes capables de diffuser les usages, accompagner leurs collègues et ancrer la culture IA dans la durée. <strong>Des passeurs, pas des experts techniques.</strong></p>
              </div>
            </div>
            
            <div class="porte-cta">
              <a href="/contact?sujet=parcours-equipes" class="btn btn-primary">Construire le parcours de mes équipes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTE 2 - Dirigeant augmenté */}
      <section class="section-alt">
        <div class="container">
          <div class="porte-container porte-dirigeant fade-in">
            <div class="porte-header">
              <div class="porte-icon">🎯</div>
              <h2 class="porte-title">Le dirigeant augmenté</h2>
              <p class="porte-subtitle">L'IA ne se pilote pas à distance. Elle se comprend de l'intérieur.</p>
            </div>
            
            <div class="porte-offers">
              <div class="offer-card fade-in">
                <div class="offer-number">①</div>
                <h3 class="offer-card-title">Coaching Dirigeants</h3>
                <p class="offer-description">Accompagnement individuel ou collectif sur <strong>3 dimensions :</strong> prendre en main l'IA par la pratique, construire sa vision et sa posture, intégrer l'IA dans sa stratégie et son modèle organisationnel.</p>
                <p class="offer-description"><strong>Modalités :</strong> individuel / groupe 4-5 personnes / CODIR entier.</p>
              </div>
              
              <div class="offer-card fade-in">
                <div class="offer-number">②</div>
                <h3 class="offer-card-title">Bootcamp IA — 3 jours intensifs</h3>
                <p class="offer-description">Le format le plus engageant pour un dirigeant pressé. 3 jours pour passer de la curiosité à la maîtrise opérationnelle : comprendre les enjeux, pratiquer les outils, identifier ses premiers cas d'usage prioritaires.</p>
                <p class="offer-description"><strong>Cible :</strong> directeurs, directeurs adjoints, cadres dirigeants.</p>
              </div>
            </div>
            
            <div class="porte-cta">
              <a href="/contact?sujet=parcours-dirigeant" class="btn btn-primary">Découvrir le parcours dirigeant →</a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTE 3 - Instances */}
      <section class="section-light">
        <div class="container">
          <div class="porte-container porte-instances fade-in">
            <div class="porte-header">
              <div class="porte-icon">⚖️</div>
              <h2 class="porte-title">Les instances au cœur de la transformation IA</h2>
              <p class="porte-subtitle">Vos instances ne sont pas spectatrices de la transformation IA. Elles en sont les garantes.</p>
            </div>
            
            <div class="offer-card-large fade-in">
              <h3 class="offer-card-title">Offre Instances</h3>
              <p class="offer-description">Des interventions spécifiquement conçues pour vos instances de gouvernance : sensibiliser, outiller et engager les décideurs là où les orientations stratégiques se prennent.</p>
              <p class="offer-description"><strong>Formats :</strong> séminaire stratégique, atelier gouvernance IA, réflexion opportunités et business model, introduction à l'AI Act et au cadre réglementaire santé.</p>
              <p class="offer-description"><strong>Instances concernées :</strong> CA · Bureau · CODIR · CME · CSE · CVS · CDU</p>
            </div>
            
            <div class="porte-cta">
              <a href="/contact?sujet=parcours-instances" class="btn btn-primary">Préparer mes instances →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Vous ne savez pas par où commencer ?</h2>
            <p class="cta-subtitle">Échangeons 30 minutes. On vous aide à identifier la porte d'entrée la plus adaptée à votre situation.</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Parcours Compétences IA' }
  )
})

// ============================================================================
// PAGE TRAJECTOIRE IA
// ============================================================================
app.get('/services/trajectoire-ia', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in" style="font-size: clamp(3rem, 12vw, 9rem) !important;">Trajectoire IA</h1>
          <p class="hero-subtitle fade-in">Construisons ensemble votre cap — et les moyens de le tenir</p>
        </div>
      </section>

      {/* Corps de page */}
      <section class="section-light">
        <div class="container">
          {/* Intro enrichie */}
          <div class="offer-intro fade-in">
            <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 2rem;">L'IA n'est pas un projet comme les autres. Elle se construit dans le mouvement, par itérations, avec vos équipes dans la boucle à chaque étape.</p>
            <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 2rem;">Notre approche est délibérément itérative : on ne vous remet pas une feuille de route de 80 pages. On lit votre situation réelle, on co-définit un cap, puis on avance avec vous — décision après décision, en ajustant au fil des apprentissages.</p>
            <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 3rem;"><strong>Pas de méthode imposée. Pas de solution vendue.</strong> Un regard extérieur indépendant, une expertise terrain de 25 ans dans le secteur santé et médico-social.</p>
          </div>

          {/* Deux modes d'intervention */}
          <div class="section-header fade-in" style="margin-top: 4rem; margin-bottom: 3rem;">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Deux modes d'intervention</h2>
          </div>

          <div class="intervention-modes fade-in">
            <div class="mode-card mode-ponctuel">
              <div class="mode-number">1</div>
              <h3 class="mode-title">Mission ponctuelle</h3>
              <p class="mode-description">Pour cadrer, orienter et prioriser. Idéal pour démarrer ou remettre le cap.</p>
              <p class="mode-duration"><strong>Durée :</strong> quelques semaines</p>
            </div>
            <div class="mode-card mode-duree">
              <div class="mode-number">2</div>
              <h3 class="mode-title">Accompagnement dans la durée</h3>
              <p class="mode-description">Pour co-piloter la transformation dans le temps. On reste dans la boucle, mission après mission, en ajustant à chaque étape.</p>
              <p class="mode-duration"><strong>Durée :</strong> plusieurs mois</p>
            </div>
          </div>

          {/* Ce qu'on construit ensemble */}
          <div class="section-header fade-in" style="margin-top: 5rem;">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Ce qu'on construit ensemble</h2>
          </div>

          <div class="values-grid fade-in" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h4 class="value-title">Lecture de maturité IA</h4>
              <p class="value-description">État des lieux objectif de vos pratiques, compétences et opportunités IA</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 class="value-title">Alignement de la gouvernance</h4>
              <p class="value-description">Charte éthique, stratégie IA, priorisation et budgétisation</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h4 class="value-title">Cap stratégique</h4>
              <p class="value-description">Feuille de route et déploiement adaptés à votre réalité terrain</p>
            </div>
            <div class="value-item value-item-highlight">
              <div class="value-badge">Nouveau</div>
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <h4 class="value-title">AI Act & Cadre réglementaire santé</h4>
              <p class="value-description">Comprendre et anticiper les obligations réglementaires : AI Act, RGPD, HDS. Transformer la conformité en avantage stratégique plutôt qu'en contrainte subie.</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 class="value-title">Choix de solutions</h4>
              <p class="value-description">Accompagnement neutre pour sélectionner les outils adaptés à vos besoins</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h4 class="value-title">Co-pilotage</h4>
              <p class="value-description">Assistance à maîtrise d'ouvrage, coordination et suivi de vos projets IA</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 class="value-title">Conduite du changement</h4>
              <p class="value-description">Accompagnement humain pour faire de l'IA un levier d'épanouissement</p>
            </div>
          </div>

          {/* Une posture, pas une méthode */}
          <div class="posture-block fade-in">
            <h3 class="posture-title">Une posture, pas une méthode.</h3>
            <p class="posture-text">La plupart des cabinets vous livrent un rapport et repartent. Notre posture est différente : nous construisons avec vous, pas pour vous. Chaque étape renforce votre autonomie — pas notre indispensabilité.</p>
            <p class="posture-text" style="margin-top: 1.5rem;"><strong>Nous n'avons aucun partenariat éditeur. Aucune solution à vous vendre. Notre seul intérêt : que votre transformation réussisse.</strong></p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Définissons ensemble votre trajectoire IA</h2>
            <p class="cta-subtitle">Que vous ayez besoin d'un cadrage ponctuel ou d'un accompagnement dans la durée, échangeons 30 minutes sur votre contexte.</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Trajectoire IA' }
  )
})

// ============================================================================
// PAGE CONSEIL AUGMENTÉ
// ============================================================================
app.get('/services/conseil-augmente', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <div class="offer-badge-large">Offre signature</div>
          <h1 class="fade-in" style="font-size: clamp(3rem, 12vw, 9rem) !important;">Conseil Augmenté</h1>
          <p class="hero-subtitle fade-in">Vos projets réels, réalisés plus vite, mieux — et vous gardez la méthode</p>
        </div>
      </section>

      {/* Corps de page */}
      <section class="section-light">
        <div class="container">
          {/* Accroche intro */}
          <div class="offer-intro fade-in">
            <p style="font-size: 1.35rem; line-height: 1.8; margin-bottom: 2.5rem; font-weight: 500;">Certains projets stratégiques méritent mieux qu'un PowerPoint standard ou un rapport figé. Avec le Conseil Augmenté, vous bénéficiez d'une expertise métier santé combinée à la puissance de l'IA — et vous gardez la maîtrise de bout en bout.</p>
          </div>

          {/* Liste de projets */}
          <div class="offer-intro fade-in">
            <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 2rem;">Vous avez un projet concret à produire : transformation de l'offre, appel à projet, projet innovant, analyse de positionnement stratégique, benchmark, plan stratégique, appels à projets, revue de processus, plan d'efficience, data-analyses, simulation financière, nouveaux business models...</p>
            <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 2rem;"><strong>On le co-produit avec vous, outillés par l'IA.</strong></p>
            <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 2rem;">Résultat : un livrable de qualité supérieure, livré plus rapidement. Et en chemin, vous avez appris à faire — pas juste à recevoir.</p>
            <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 3rem;"><strong>Le transfert de compétences n'est pas un bonus : il est intégré dès le départ.</strong></p>
          </div>

          {/* Comment ça se passe */}
          <div class="section-header fade-in" style="margin-top: 5rem;">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Comment ça se passe ?</h2>
          </div>

          <div class="methodology-timeline fade-in" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 5rem;">
            <div class="timeline-item">
              <div class="timeline-number" style="background: linear-gradient(135deg, var(--color-violet), var(--color-bleu));">①</div>
              <h3 class="timeline-title">Cadrage</h3>
              <p class="timeline-description">On définit ensemble le périmètre, les objectifs et les livrables attendus. Une demi-journée suffit.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number" style="background: linear-gradient(135deg, var(--color-bleu), var(--color-vert));">②</div>
              <h3 class="timeline-title">Co-production</h3>
              <p class="timeline-description">On travaille ensemble, outillés par l'IA : vous apportez la connaissance terrain, nous apportons la méthode et les outils.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number" style="background: linear-gradient(135deg, var(--color-vert), var(--color-jaune));">③</div>
              <h3 class="timeline-title">Livraison</h3>
              <p class="timeline-description">Un livrable de qualité supérieure, dans les délais convenus. Prêt à l'emploi.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number" style="background: linear-gradient(135deg, var(--color-jaune), var(--color-rouge));">④</div>
              <h3 class="timeline-title">Transfert</h3>
              <p class="timeline-description">Vous repartez avec la méthode, les prompts et les outils utilisés. Vous savez reproduire seul.</p>
            </div>
          </div>

          {/* Pas un cabinet classique */}
          <div class="differentiator-block fade-in">
            <h3 class="differentiator-title">Pas un cabinet classique.</h3>
            <p class="differentiator-text">Un cabinet traditionnel vous remet un rapport. Nous co-produisons avec vous — ce qui change tout : vous restez aux commandes, vous comprenez chaque étape, et vous repartez avec une capacité nouvelle. La dépendance n'est pas notre modèle.</p>
          </div>

          {/* La promesse triple */}
          <div class="section-header fade-in" style="margin-top: 5rem;">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">La promesse triple</h2>
          </div>

          <div class="values-grid fade-in">
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 class="value-title">↑ Qualité du livrable</h4>
              <p class="value-description">L'IA démultiplie la capacité d'analyse et de production. Vous obtenez un livrable plus complet, plus argumenté, plus percutant — dans un temps réduit.</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 class="value-title">⚡ Gain de temps</h4>
              <p class="value-description">Ce qui prenait des semaines se produit en jours. Sans sacrifier la rigueur ni la personnalisation à votre contexte.</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h4 class="value-title">🎓 Compétence acquise en interne</h4>
              <p class="value-description">Le transfert de compétences n'est pas un bonus : il est intégré dès le départ. Vous repartez avec la méthode, les outils et les prompts utilisés. Vous savez reproduire seul.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Accélérons votre prochain projet</h2>
            <p class="cta-subtitle">Échangeons 30 minutes sur votre projet concret</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Conseil Augmenté' }
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
          <h1 class="fade-in" style="font-size: clamp(3rem, 12vw, 9rem) !important;">Qui sommes-nous ?</h1>
          <p class="hero-subtitle fade-in">Expertise santé et intelligence artificielle au service de votre transformation</p>
        </div>
      </section>


      {/* Vision - 4 Piliers */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Notre vision</h2>
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
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Notre méthodologie</h2>
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

      {/* Terrains d'intervention - Version catégorisée */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Nos terrains d'intervention</h2>
            <p class="section-subtitle">14 secteurs accompagnés dans l'écosystème santé français</p>
          </div>
          
          <div class="sectors-categories fade-in">
            {/* Catégorie 1 : Établissements de Santé */}
            <div class="sector-category">
              <div class="category-header">
                <div class="category-icon">🏥</div>
                <h3 class="category-title">Établissements de Santé</h3>
              </div>
              <div class="category-list">
                <div class="sector-item-v2">Hôpitaux publics & CHU</div>
                <div class="sector-item-v2">Cliniques privées</div>
                <div class="sector-item-v2">EHPAD</div>
                <div class="sector-item-v2">Cabinets médicaux</div>
                <div class="sector-item-v2">Cabinets dentaires</div>
                <div class="sector-item-v2">Pharmacies</div>
                <div class="sector-item-v2">Biologie médicale</div>
              </div>
            </div>

            {/* Catégorie 2 : Secteur Médico-Social */}
            <div class="sector-category">
              <div class="category-header">
                <div class="category-icon">🤝</div>
                <h3 class="category-title">Secteur Médico-Social</h3>
              </div>
              <div class="category-list">
                <div class="sector-item-v2">Handicap (ESSMS)</div>
                <div class="sector-item-v2">Social & protection de l'enfance</div>
                <div class="sector-item-v2">Services à domicile (SAAD, SSIAD)</div>
              </div>
            </div>

            {/* Catégorie 3 : Écosystème Santé */}
            <div class="sector-category">
              <div class="category-header">
                <div class="category-icon">🌐</div>
                <h3 class="category-title">Écosystème Santé</h3>
              </div>
              <div class="category-list">
                <div class="sector-item-v2">Mutuelles & Institutions de Prévoyance</div>
                <div class="sector-item-v2">Recherche médicale</div>
                <div class="sector-item-v2">Associations & Fondations de santé</div>
                <div class="sector-item-v2">Institutionnels (fédérations, syndicats, think tanks)</div>
                <div class="sector-item-v2">Groupements hospitaliers de territoire (GHT)</div>
              </div>
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
          <h1 class="fade-in" style="font-size: clamp(3rem, 12vw, 9rem) !important;">Parlons de votre projet</h1>
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
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Questions fréquentes</h2>
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
