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

// Route: Page d'accueil
app.get('/', (c) => {
  return c.render(
    <>
      {/* Section 1 - HERO (fond sombre gradient, 100vh) */}
      <section class="hero">
        <div class="hero-content">
          <h1 class="fade-in">L'IA en Santé,<br />En Toute Confiance</h1>
          <p class="hero-subtitle fade-in">
            Cabinet indépendant de conseil et formation en IA pour les organisations de santé et médico-sociales. 
            De la stratégie aux usages concrets, nous vous guidons sans jargon, au service des soignants et des patients.
          </p>
          <div class="hero-cta fade-in">
            <a href="/offres" class="btn btn-primary btn-large">Découvrir nos offres</a>
            <a href="/contact" class="btn btn-secondary btn-large">Prendre rendez-vous</a>
          </div>
          <div class="hero-tools fade-in">
            Claude • ChatGPT • Gemini • Mistral • Copilot
          </div>
        </div>
      </section>

      {/* Section 2 - 3 OFFRES (fond clair) */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Comment pouvons-nous vous aider ?</h2>
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
              <a href="/offres#formation" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 2 - Conseil */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 class="card-title">Conseil & Stratégie IA</h3>
              <p class="card-description">Construisons ensemble votre feuille de route IA : diagnostic, sélection de solutions neutres, pilotage, conduite du changement et mesure du ROI.</p>
              <a href="/offres#conseil" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 3 - Accélération (SIGNATURE) */}
            <div class="card card-signature fade-in">
              <div class="card-badge">Offre signature</div>
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="card-title">Accélération de Projet</h3>
              <p class="card-description">Produisez en 2 à 3 fois moins de temps avec l'IA. Nous travaillons en binôme avec vous, de la stratégie au financement : le conseil augmenté par l'IA.</p>
              <a href="/offres#acceleration" class="card-link">Découvrir l'offre →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - VALEURS & CHIFFRES (fond légèrement teinté) */}
      <section class="section-alt">
        <div class="container">
          {/* Valeurs */}
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
              <p class="value-description">L'IA augmente vos équipes, ne les remplace pas</p>
            </div>
          </div>

          {/* Chiffres clés */}
          <div class="numbers-grid fade-in" style="margin-top: 80px;">
            <div class="number-item">
              <span class="number-value">25 ans</span>
              <div class="number-label">D'expertise santé</div>
            </div>
            <div class="number-item">
              <span class="number-value">÷2‑3</span>
              <div class="number-label">Délais divisés</div>
            </div>
            <div class="number-item">
              <span class="number-value">50‑70 %</span>
              <div class="number-label">Gain de temps</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - FONDATEUR (fond sombre) */}
      <section class="founder-section">
        <div class="container">
          <div class="founder-content fade-in">
            {/* Avatar monogram SB */}
            <div class="founder-avatar">SB</div>
            
            <div class="founder-quote-block">
              <p class="founder-quote">
                « J'ai créé QUUBE IA Santé avec une conviction : l'intelligence artificielle est un levier majeur pour transformer le secteur de la santé. 
                Accompagner les dirigeants et les équipes dans la maîtrise de l'IA, c'est leur donner les moyens de répondre aux défis de demain — 
                efficience des organisations, qualité de l'accompagnement, et épanouissement des professionnels. »
              </p>
              <div>
                <div class="founder-name">Samuel Bottaro</div>
                <div class="founder-title">Fondateur & Consultant IA Santé</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - APERÇU CAS D'USAGE (fond clair) */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Cas d'usage par métier</h2>
            <p class="section-subtitle">Des gains concrets, mesurés sur le terrain</p>
          </div>
          <div class="cards-grid">
            <div class="card fade-in">
              <h4 class="card-title">Direction Générale</h4>
              <p class="card-description">Projet stratégique livré en <strong>8 semaines</strong> au lieu de 4 mois.</p>
              <p class="card-description" style="font-size: 0.95rem; color: var(--color-text-gray);">
                Plan stratégique • Projet établissement • Projet associatif
              </p>
            </div>
            <div class="card fade-in">
              <h4 class="card-title">Finance & Gestion</h4>
              <p class="card-description">Rapports DGOS/ARS en <strong>5 jours</strong> au lieu de 3 semaines.</p>
              <p class="card-description" style="font-size: 0.95rem; color: var(--color-text-gray);">
                Rapports réglementaires • Budgets • Analyses financières
              </p>
            </div>
            <div class="card fade-in">
              <h4 class="card-title">Ressources Humaines</h4>
              <p class="card-description"><strong>120 fiches de poste</strong> créées en 1 semaine vs 2 mois.</p>
              <p class="card-description" style="font-size: 0.95rem; color: var(--color-text-gray);">
                Recrutement • Formation • Gestion des talents
              </p>
            </div>
            <div class="card fade-in">
              <h4 class="card-title">Qualité & Conformité</h4>
              <p class="card-description"><strong>3 auto-évaluations ESSMS</strong> simultanées en mode projet.</p>
              <p class="card-description" style="font-size: 0.95rem; color: var(--color-text-gray);">
                HAS • Certifications • Plans d'action
              </p>
            </div>
          </div>
          <div class="text-center" style="margin-top: 48px;">
            <a href="/cas-usage" class="btn btn-primary">Voir tous les cas d'usage</a>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA FINAL (fond sombre) */}
      <section class="cta-final">
        <div class="cta-final-content fade-in">
          <h2>Parlons de votre projet</h2>
          <p class="cta-final-subtitle">
            Un échange de 30 minutes pour comprendre vos enjeux et définir comment l'IA peut accélérer vos projets.
          </p>
          <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
        </div>
      </section>
    </>,
    { title: 'Accueil' }
  )
})

// Route: Nos offres
app.get('/offres', (c) => {
  return c.render(
    <>
      <div class="page-hero">
        <div class="container">
          <h1>Nos offres</h1>
          <p>Trois approches complémentaires pour réussir votre transformation IA</p>
        </div>
      </div>
      
      <section class="section-light">
        <div class="container">
          <p style="text-align: center; font-size: 1.125rem;">Contenu détaillé des offres à venir...</p>
          <div class="text-center" style="margin-top: 32px;">
            <a href="/contact" class="btn btn-primary">Nous contacter</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Nos offres' }
  )
})

// Route: Cas d'usage
app.get('/cas-usage', (c) => {
  return c.render(
    <>
      <div class="page-hero">
        <div class="container">
          <h1>Cas d'usage IA par métier</h1>
          <p>Des exemples concrets, des gains mesurés</p>
        </div>
      </div>
      
      <section class="section-light">
        <div class="container">
          <p style="text-align: center; font-size: 1.125rem;">Onglets et cas d'usage détaillés à venir...</p>
        </div>
      </section>
    </>,
    { title: 'Cas d\'usage' }
  )
})

// Route: Qui sommes-nous
app.get('/a-propos', (c) => {
  return c.render(
    <>
      <div class="page-hero">
        <div class="container">
          <h1>Qui sommes-nous</h1>
          <p>Expertise santé et intelligence artificielle au service de votre transformation</p>
        </div>
      </div>
      
      <section class="section-light">
        <div class="container">
          <p style="text-align: center; font-size: 1.125rem;">Contenu À propos à venir...</p>
        </div>
      </section>
    </>,
    { title: 'Qui sommes-nous' }
  )
})

// Route: Contact
app.get('/contact', (c) => {
  return c.render(
    <>
      <div class="page-hero">
        <div class="container">
          <h1>Contact</h1>
          <p>Échangeons sur vos projets IA</p>
        </div>
      </div>
      
      <section class="section-light">
        <div class="container">
          <div style="max-width: 600px; margin: 0 auto; text-align: center;">
            <p style="font-size: 1.125rem; margin-bottom: 32px;">
              <strong>QUUBE×IA Santé</strong><br />
              10 rue du Colisée<br />
              75008 Paris
            </p>
            <p style="margin-bottom: 32px;">
              <a href="mailto:contact@quube.fr" style="color: var(--color-accent); font-weight: 600;">contact@quube.fr</a>
            </p>
            <a href="https://calendly.com/quube" target="_blank" rel="noopener" class="btn btn-primary btn-large">
              Prendre rendez-vous via Calendly
            </a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Contact' }
  )
})

export default app
