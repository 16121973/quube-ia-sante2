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
      {/* Section 1 - HERO */}
      <section class="hero">
        <div class="hero-content animate-on-scroll">
          <h1 class="fade-in">L'IA en Santé, En Toute Confiance</h1>
          <p class="fade-in fade-in-delay-1">
            Cabinet indépendant de conseil et formation en intelligence artificielle pour les organisations de santé et médico-sociales. 
            De la stratégie aux usages concrets, nous vous guidons sans jargon, au service des soignants et des patients.
          </p>
          <div class="hero-cta fade-in fade-in-delay-2">
            <a href="/offres" class="btn btn-primary">Découvrir nos offres</a>
            <a href="/contact" class="btn btn-secondary">Prendre rendez-vous</a>
          </div>
          <div class="hero-brands fade-in fade-in-delay-3">
            Claude | ChatGPT | Gemini | Mistral | Copilot
          </div>
        </div>
      </section>

      {/* Section 2 - 3 OFFRES */}
      <section class="section section-light">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Comment pouvons-nous vous aider ?</h2>
          <div class="cards-grid animate-on-scroll">
            {/* Offre 1 - Formation */}
            <div class="card">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3>Formation & Montée en compétences</h3>
              <p>Vos équipes deviennent autonomes sur l'IA. Du dirigeant au professionnel de terrain, des programmes progressifs 100% santé.</p>
              <a href="/offres#formation" class="btn-link">Découvrir →</a>
            </div>

            {/* Offre 2 - Conseil */}
            <div class="card">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3>Conseil & Stratégie IA</h3>
              <p>Diagnostic de maturité, feuille de route, aide au choix des solutions, pilotage de projet, conduite du changement.</p>
              <a href="/offres#conseil" class="btn-link">Découvrir →</a>
            </div>

            {/* Offre 3 - Accélération (Featured) */}
            <div class="card card-featured">
              <div class="card-badge">Offre signature</div>
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3>Accélération de Projet</h3>
              <p>L'IA comme outil de production pour vos projets stratégiques. Livrables 2 à 3 fois plus rapides, transfert de compétences inclus.</p>
              <a href="/offres#acceleration" class="btn-link">Découvrir →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - VALEURS + CHIFFRES */}
      <section class="section section-light" style="padding-top: 0;">
        <div class="container">
          {/* Valeurs */}
          <div class="values-grid animate-on-scroll">
            <div class="value-item">
              <h4>🏥 100% Santé × IA</h4>
              <p>Expertise terrain sanitaire + intelligence artificielle</p>
            </div>
            <div class="value-item">
              <h4>🤝 Neutres & Indépendants</h4>
              <p>Aucun partenariat éditeur, conseil objectif</p>
            </div>
            <div class="value-item">
              <h4>🛠️ Concrets & Humains</h4>
              <p>Co-construction pragmatique avec vos équipes</p>
            </div>
            <div class="value-item">
              <h4>✋ Gardez la Main</h4>
              <p>L'IA augmente vos équipes, ne les remplace pas</p>
            </div>
          </div>

          {/* Chiffres */}
          <div class="stats-grid animate-on-scroll">
            <div class="stat-item">
              <div class="stat-number">25 ans</div>
              <div class="stat-label">d'expertise dans le secteur santé et médico-social</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">÷ 2-3</div>
              <div class="stat-label">les délais de vos projets stratégiques</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50-70%</div>
              <div class="stat-label">de gain de temps mesuré</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - LE FONDATEUR */}
      <section class="section section-dark">
        <div class="container">
          <div class="quote-section animate-on-scroll">
            <div style="text-align: center;">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                alt="Samuel Bottaro" 
                class="quote-image"
                style="width: 300px; height: 300px; object-fit: cover;"
              />
            </div>
            <div class="quote-content">
              <div class="quote-text">
                « J'ai créé QUUBE IA Santé avec une conviction : l'intelligence artificielle est un levier majeur pour transformer le secteur de la santé. 
                Accompagner les dirigeants et les équipes dans la maîtrise de l'IA, c'est leur donner les moyens de répondre aux défis de demain — 
                efficience des organisations, qualité de l'accompagnement, et épanouissement des professionnels. »
              </div>
              <div class="quote-author">
                Samuel Bottaro
                <span>Fondateur de QUUBE IA Santé</span>
              </div>
              <div style="margin-top: var(--spacing-md);">
                <a href="/a-propos" class="btn-link">En savoir plus →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - APERÇU CAS D'USAGE */}
      <section class="section section-light">
        <div class="container">
          <h2 class="section-title animate-on-scroll">L'IA au service de chaque métier</h2>
          <p class="section-subtitle animate-on-scroll">
            Direction générale, finance, RH, qualité, soins, éducatif... Découvrez les applications concrètes pour votre fonction.
          </p>
          <div class="mini-cards animate-on-scroll">
            <div class="mini-card">
              <h4>📊 Direction Générale</h4>
              <p>Projet d'établissement produit en 8 semaines au lieu de 4 mois</p>
            </div>
            <div class="mini-card">
              <h4>💰 Finance</h4>
              <p>Rapports DGOS/ARS préparés en 5 jours au lieu de 3 semaines</p>
            </div>
            <div class="mini-card">
              <h4>👥 Ressources Humaines</h4>
              <p>120 fiches de poste rédigées en 1 semaine au lieu de 2 mois</p>
            </div>
            <div class="mini-card">
              <h4>✅ Qualité</h4>
              <p>Auto-évaluation ESSMS de 3 établissements en parallèle</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: var(--spacing-lg);" class="animate-on-scroll">
            <a href="/cas-usage" class="btn btn-primary">Voir tous les cas d'usage →</a>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA FINAL */}
      <section class="section section-dark">
        <div class="container">
          <div class="cta-section animate-on-scroll">
            <h2>Parlons de votre projet</h2>
            <p>Un premier échange de 30 minutes, sans engagement, pour explorer le potentiel de l'IA dans votre organisation.</p>
            <a href="/contact" class="btn btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Accueil' }
  )
})

// Route: Nos offres
app.get('/offres', (c) => {
  return c.render(
    <div>
      <h1>Nos offres - En construction</h1>
      <p>Cette page sera créée avec le PROMPT 2</p>
    </div>,
    { title: 'Nos offres' }
  )
})

// Route: Cas d'usage
app.get('/cas-usage', (c) => {
  return c.render(
    <div>
      <h1>Cas d'usage IA par métier - En construction</h1>
      <p>Cette page sera créée avec le PROMPT 3</p>
    </div>,
    { title: 'Cas d\'usage' }
  )
})

// Route: Qui sommes-nous
app.get('/a-propos', (c) => {
  return c.render(
    <div>
      <h1>Qui sommes-nous - En construction</h1>
      <p>Cette page sera créée avec le PROMPT 4</p>
    </div>,
    { title: 'Qui sommes-nous' }
  )
})

// Route: Contact
app.get('/contact', (c) => {
  return c.render(
    <div>
      <h1>Contact - En construction</h1>
      <p>Cette page sera créée avec le PROMPT 5</p>
    </div>,
    { title: 'Contact' }
  )
})

export default app
