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

      {/* Navigation rapide vers ancres */}
      <section class="section-light" style="padding-top: 48px; padding-bottom: 48px;">
        <div class="container">
          <div style="display: flex; gap: 24px; justify-content: center; flex-wrap: wrap;">
            <a href="#formation" class="btn btn-secondary">Formation</a>
            <a href="#conseil" class="btn btn-secondary">Conseil & Stratégie</a>
            <a href="#acceleration" class="btn btn-primary">Accélération (Signature)</a>
          </div>
        </div>
      </section>

      {/* OFFRE 1 - FORMATION & MONTÉE EN COMPÉTENCES */}
      <section id="formation" class="section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Formation & Montée en compétences</h2>
            <p class="section-subtitle">
              Vos équipes deviennent autonomes sur l'IA générative. Des programmes progressifs 100% santé, 
              du dirigeant au professionnel de terrain.
            </p>
          </div>

          <div class="cards-grid" style="margin-bottom: 64px;">
            {/* Conférences */}
            <div class="card fade-in">
              <h3 class="card-title">Conférences IA inspirantes</h3>
              <p class="card-description">
                <strong>Durée :</strong> 2 heures<br />
                <strong>Public :</strong> COMEX, CODIR, CME, Instances
              </p>
              <p class="card-description">
                Session d'inspiration pour comprendre les enjeux stratégiques de l'IA en santé. 
                Cas d'usage concrets, ROI mesurés, démonstrations live.
              </p>
            </div>

            {/* Coaching */}
            <div class="card fade-in">
              <h3 class="card-title">Coaching IA dirigeants</h3>
              <p class="card-description">
                <strong>Durée :</strong> 3 à 6 séances individuelles<br />
                <strong>Public :</strong> Direction Générale, DSI, DRH, DAF
              </p>
              <p class="card-description">
                Accompagnement personnalisé pour maîtriser les outils IA adaptés à votre fonction. 
                Définition de vos usages prioritaires, mise en pratique immédiate.
              </p>
            </div>

            {/* Formation sur-mesure */}
            <div class="card fade-in">
              <h3 class="card-title">Formations sur-mesure</h3>
              <p class="card-description">
                <strong>Durée :</strong> Variable selon besoins<br />
                <strong>Public :</strong> Équipes métiers spécifiques
              </p>
              <p class="card-description">
                Programme adapté à votre organisation : médecins, soignants, cadres, administratifs. 
                Cas d'usage métier, exercices pratiques, support post-formation.
              </p>
            </div>
          </div>

          {/* Parcours 3 niveaux */}
          <div class="fade-in" style="background: white; padding: 48px; border-radius: 16px; box-shadow: var(--shadow-md);">
            <h3 style="text-align: center; margin-bottom: 40px; font-size: 1.5rem;">Parcours de formation progressif</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
              {/* Niveau 1 */}
              <div style="text-align: center; padding: 24px;">
                <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: #E67E22; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800;">1</div>
                <h4 style="margin-bottom: 12px;">Découverte</h4>
                <p style="font-size: 0.95rem; color: var(--color-text-gray); margin-bottom: 12px;">
                  <strong>0,5 jour</strong>
                </p>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--color-text-gray);">
                  Comprendre l'IA, premiers prompts, cas d'usage santé, limites et risques.
                </p>
              </div>

              {/* Niveau 2 */}
              <div style="text-align: center; padding: 24px;">
                <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: #E67E22; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800;">2</div>
                <h4 style="margin-bottom: 12px;">Productivité</h4>
                <p style="font-size: 0.95rem; color: var(--color-text-gray); margin-bottom: 12px;">
                  <strong>1 jour</strong>
                </p>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--color-text-gray);">
                  Techniques avancées de prompting, workflows métier, gains mesurables, projet fil rouge.
                </p>
              </div>

              {/* Niveau 3 */}
              <div style="text-align: center; padding: 24px;">
                <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: #E67E22; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800;">3</div>
                <h4 style="margin-bottom: 12px;">Maîtrise</h4>
                <p style="font-size: 0.95rem; color: var(--color-text-gray); margin-bottom: 12px;">
                  <strong>2 jours</strong>
                </p>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--color-text-gray);">
                  Automatisations complexes, APIs, intégration SI, gouvernance, référent IA.
                </p>
              </div>
            </div>
          </div>

          <div class="text-center" style="margin-top: 48px;">
            <p style="font-size: 1.125rem; margin-bottom: 24px; color: var(--color-text-gray);">
              <strong>Note :</strong> Attestation de formation délivrée (pas de certification).
            </p>
            <a href="/contact" class="btn btn-primary btn-large">Demander un programme sur-mesure</a>
          </div>
        </div>
      </section>

      {/* OFFRE 2 - CONSEIL & STRATÉGIE IA */}
      <section id="conseil" class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Conseil & Stratégie IA</h2>
            <p class="section-subtitle">
              Construisons ensemble votre feuille de route IA : diagnostic, sélection neutre, pilotage, 
              conduite du changement et mesure du ROI.
            </p>
          </div>

          <div class="cards-grid">
            {/* Diagnostic Flash */}
            <div class="card fade-in">
              <h3 class="card-title">Diagnostic Flash & Feuille de route</h3>
              <p class="card-description">
                <strong>Durée :</strong> 2 à 5 jours<br />
                <strong>Livrables :</strong> État des lieux, roadmap priorisée, plan d'action
              </p>
              <p class="card-description">
                Analyse de maturité IA, identification des quick wins, définition de la trajectoire stratégique. 
                Restitution en COMEX/CODIR avec chiffrage budgétaire.
              </p>
            </div>

            {/* Benchmark */}
            <div class="card fade-in">
              <h3 class="card-title">Benchmark neutre & Sélection</h3>
              <p class="card-description">
                <strong>Durée :</strong> 3 à 10 jours<br />
                <strong>Livrables :</strong> Grille comparative, recommandations objectives
              </p>
              <p class="card-description">
                Analyse impartiale des solutions du marché (aucun partenariat éditeur). 
                Critères fonctionnels, techniques, financiers, réglementaires. Aide à la décision.
              </p>
            </div>

            {/* Pilotage projet */}
            <div class="card fade-in">
              <h3 class="card-title">Pilotage projet IA (MOA/MOE)</h3>
              <p class="card-description">
                <strong>Durée :</strong> Mission longue (3-12 mois)<br />
                <strong>Livrables :</strong> Gouvernance, sprints agile, recette
              </p>
              <p class="card-description">
                Accompagnement terrain du déploiement : cahier des charges, suivi prestataires, 
                tests utilisateurs, formation, mise en production.
              </p>
            </div>

            {/* Conduite du changement */}
            <div class="card fade-in">
              <h3 class="card-title">Conduite du changement IA</h3>
              <p class="card-description">
                <strong>Durée :</strong> Variable<br />
                <strong>Livrables :</strong> Plan de communication, réseau d'ambassadeurs
              </p>
              <p class="card-description">
                Stratégie d'adoption : sensibilisation métiers, identification champions IA, 
                communication interne, gestion des résistances.
              </p>
            </div>

            {/* Mesure ROI */}
            <div class="card fade-in">
              <h3 class="card-title">Mesure du ROI & Tableau de bord</h3>
              <p class="card-description">
                <strong>Durée :</strong> 2 à 5 jours<br />
                <strong>Livrables :</strong> KPIs, dashboard, reporting trimestriel
              </p>
              <p class="card-description">
                Définition des indicateurs de performance, suivi des gains (temps, coûts, qualité), 
                tableaux de bord décisionnels pour instances.
              </p>
            </div>
          </div>

          <div class="text-center" style="margin-top: 48px;">
            <a href="/contact" class="btn btn-primary btn-large">Échanger sur votre stratégie IA</a>
          </div>
        </div>
      </section>

      {/* OFFRE 3 - ACCÉLÉRATION DE PROJET (SIGNATURE) */}
      <section id="acceleration" class="section-dark">
        <div class="container">
          <div class="section-header fade-in">
            <div class="card-badge" style="display: inline-block; margin-bottom: 24px;">Offre signature</div>
            <h2 class="section-title">Accélération de Projet</h2>
            <p class="section-subtitle">
              Le conseil augmenté par l'IA. Produisez vos projets stratégiques en <strong>2 à 3 fois moins de temps</strong>, 
              avec un transfert de compétences inclus.
            </p>
          </div>

          {/* Les 3 gains */}
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; margin-bottom: 64px;">
            <div class="fade-in" style="text-align: center; padding: 32px; background: rgba(255,255,255,0.05); border-radius: 16px;">
              <div style="font-size: 3rem; margin-bottom: 16px;">⚡</div>
              <h3 style="color: var(--color-accent); margin-bottom: 12px;">Délais divisés par 2‑3</h3>
              <p style="color: var(--color-text-white-85);">
                Livraison rapide sans compromis sur la qualité
              </p>
            </div>
            <div class="fade-in" style="text-align: center; padding: 32px; background: rgba(255,255,255,0.05); border-radius: 16px;">
              <div style="font-size: 3rem; margin-bottom: 16px;">💰</div>
              <h3 style="color: var(--color-accent); margin-bottom: 12px;">Coûts maîtrisés</h3>
              <p style="color: var(--color-text-white-85);">
                Budget optimisé grâce à l'efficacité IA
              </p>
            </div>
            <div class="fade-in" style="text-align: center; padding: 32px; background: rgba(255,255,255,0.05); border-radius: 16px;">
              <div style="font-size: 3rem; margin-bottom: 16px;">🎓</div>
              <h3 style="color: var(--color-accent); margin-bottom: 12px;">Transfert inclus</h3>
              <p style="color: var(--color-text-white-85);">
                Vos équipes montent en compétences IA
              </p>
            </div>
          </div>

          {/* 4 catégories éligibles */}
          <div class="fade-in" style="margin-bottom: 64px;">
            <h3 style="text-align: center; margin-bottom: 40px; font-size: 1.5rem;">Projets éligibles</h3>
            <div class="cards-grid">
              <div style="background: rgba(255,255,255,0.08); padding: 32px; border-radius: 16px;">
                <h4 style="color: var(--color-accent); margin-bottom: 16px;">Stratégie & Gouvernance</h4>
                <ul style="color: var(--color-text-white-85); line-height: 1.8; padding-left: 20px;">
                  <li>Plan stratégique / Projet d'établissement</li>
                  <li>Projet associatif</li>
                  <li>Business plan / Étude de faisabilité</li>
                  <li>Audit organisationnel</li>
                </ul>
              </div>

              <div style="background: rgba(255,255,255,0.08); padding: 32px; border-radius: 16px;">
                <h4 style="color: var(--color-accent); margin-bottom: 16px;">Développement & Financement</h4>
                <ul style="color: var(--color-text-white-85); line-height: 1.8; padding-left: 20px;">
                  <li>Réponses Appels à Projets (AAP)</li>
                  <li>Dossiers CPOM / EPRD</li>
                  <li>Montage financier complexe</li>
                  <li>Recherche de subventions</li>
                </ul>
              </div>

              <div style="background: rgba(255,255,255,0.08); padding: 32px; border-radius: 16px;">
                <h4 style="color: var(--color-accent); margin-bottom: 16px;">Transformation</h4>
                <ul style="color: var(--color-text-white-85); line-height: 1.8; padding-left: 20px;">
                  <li>Études de diversification</li>
                  <li>Refonte des parcours patients</li>
                  <li>Démarche qualité / Certification</li>
                  <li>Plan de formation RH</li>
                </ul>
              </div>

              <div style="background: rgba(255,255,255,0.08); padding: 32px; border-radius: 16px;">
                <h4 style="color: var(--color-accent); margin-bottom: 16px;">Analyse & Benchmark</h4>
                <ul style="color: var(--color-text-white-85); line-height: 1.8; padding-left: 20px;">
                  <li>Études de marché / Concurrence</li>
                  <li>Benchmarks sectoriels</li>
                  <li>Analyses réglementaires</li>
                  <li>Synthèses documentaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Méthode binôme 3 étapes */}
          <div class="fade-in" style="background: rgba(255,255,255,0.05); padding: 48px; border-radius: 16px; margin-bottom: 48px;">
            <h3 style="text-align: center; margin-bottom: 40px; font-size: 1.5rem;">Méthode en binôme : 3 étapes</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
              <div style="text-align: center;">
                <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: var(--color-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 800;">1</div>
                <h4 style="margin-bottom: 12px;">Cadrage</h4>
                <p style="color: var(--color-text-white-85); font-size: 0.95rem; line-height: 1.6;">
                  Atelier de définition des objectifs, périmètre, livrables attendus. Accès à vos ressources documentaires.
                </p>
              </div>
              <div style="text-align: center;">
                <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: var(--color-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 800;">2</div>
                <h4 style="margin-bottom: 12px;">Production accélérée</h4>
                <p style="color: var(--color-text-white-85); font-size: 0.95rem; line-height: 1.6;">
                  Travail en binôme : IA + expertise humaine. Points d'étape réguliers, ajustements itératifs.
                </p>
              </div>
              <div style="text-align: center;">
                <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: var(--color-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 800;">3</div>
                <h4 style="margin-bottom: 12px;">Livraison & Transfert</h4>
                <p style="color: var(--color-text-white-85); font-size: 0.95rem; line-height: 1.6;">
                  Remise du livrable finalisé. Session de transfert pour reproduire la méthode en interne.
                </p>
              </div>
            </div>
          </div>

          {/* Gains mesurés */}
          <div class="fade-in" style="text-align: center; margin-bottom: 48px;">
            <h3 style="margin-bottom: 24px; font-size: 1.5rem;">Gains mesurés</h3>
            <div class="numbers-grid" style="margin-top: 40px;">
              <div class="number-item">
                <span class="number-value">50‑70 %</span>
                <div class="number-label">Gain de temps</div>
              </div>
              <div class="number-item">
                <span class="number-value">8 sem.</span>
                <div class="number-label">vs 4 mois (projet DG)</div>
              </div>
              <div class="number-item">
                <span class="number-value">5 jours</span>
                <div class="number-label">vs 3 sem. (rapports)</div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a href="/contact" class="btn btn-primary btn-large">Accélérer votre prochain projet</a>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section class="section-light">
        <div class="container">
          <div style="text-align: center; max-width: 700px; margin: 0 auto;">
            <h2 style="margin-bottom: 24px;">Quelle offre vous correspond ?</h2>
            <p style="font-size: 1.125rem; color: var(--color-text-gray); margin-bottom: 32px; line-height: 1.7;">
              Échangeons 30 minutes pour comprendre vos enjeux et vous orienter vers la solution la plus adaptée.
            </p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Nos offres' }
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

      {/* Section 1 - Fondateur */}
      <section class="founder-section">
        <div class="container">
          <div class="founder-content fade-in">
            <div class="founder-avatar">SB</div>
            <div class="founder-quote-block">
              <p class="founder-quote">
                « Après 25 ans dans le secteur santé et médico-social, j'ai créé QUUBE IA Santé avec une conviction : 
                l'intelligence artificielle est un levier majeur pour transformer nos organisations. 
                Mon approche : transmettre la maîtrise de l'IA aux dirigeants et aux équipes, 
                pour qu'ils répondent eux-mêmes aux défis d'efficience, de qualité et d'épanouissement professionnel. »
              </p>
              <div>
                <div class="founder-name">Samuel Bottaro</div>
                <div class="founder-title">Fondateur & Consultant IA Santé - 25 ans d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Vision IA */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Notre vision de l'IA en Santé</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
            <div class="card fade-in" style="text-align: center;">
              <h3>L'IA augmente, ne remplace pas</h3>
              <p>L'intelligence artificielle amplifie les capacités humaines. Elle libère du temps pour l'essentiel : la relation, la réflexion stratégique, l'innovation.</p>
            </div>
            <div class="card fade-in" style="text-align: center;">
              <h3>La technologie a besoin de méthode</h3>
              <p>Un outil puissant ne suffit pas. Il faut une méthodologie d'accompagnement, un transfert de compétences, une conduite du changement.</p>
            </div>
            <div class="card fade-in" style="text-align: center;">
              <h3>L'indépendance garantit l'objectivité</h3>
              <p>Aucun partenariat éditeur. Nous recommandons les solutions les plus adaptées à vos besoins, en toute neutralité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Méthodologie 5 phases */}
      <section class="section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Notre méthodologie en 5 phases</h2>
            <p class="section-subtitle">Un parcours non-linéaire, adapté à la maturité de chaque organisation</p>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;">
            <div class="fade-in" style="text-align: center; padding: 24px;">
              <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: var(--color-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800;">1</div>
              <h4 style="margin-bottom: 12px;">Sensibiliser</h4>
              <p style="font-size: 0.95rem; color: var(--color-text-gray);">Conférences, coaching dirigeants, démonstrations</p>
            </div>
            <div class="fade-in" style="text-align: center; padding: 24px;">
              <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: var(--color-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800;">2</div>
              <h4 style="margin-bottom: 12px;">Monter en compétences</h4>
              <p style="font-size: 0.95rem; color: var(--color-text-gray);">Formations 3 niveaux, ateliers métiers</p>
            </div>
            <div class="fade-in" style="text-align: center; padding: 24px;">
              <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: var(--color-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800;">3</div>
              <h4 style="margin-bottom: 12px;">Structurer</h4>
              <p style="font-size: 0.95rem; color: var(--color-text-gray);">Diagnostic, feuille de route, benchmark</p>
            </div>
            <div class="fade-in" style="text-align: center; padding: 24px;">
              <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: var(--color-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800;">4</div>
              <h4 style="margin-bottom: 12px;">Déployer</h4>
              <p style="font-size: 0.95rem; color: var(--color-text-gray);">Pilotage projet, conduite du changement</p>
            </div>
            <div class="fade-in" style="text-align: center; padding: 24px;">
              <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: var(--color-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800;">5</div>
              <h4 style="margin-bottom: 12px;">Pérenniser & Mesurer</h4>
              <p style="font-size: 0.95rem; color: var(--color-text-gray);">ROI, tableaux de bord, amélioration continue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Références */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Ils nous font confiance</h2>
          </div>
          <div class="cards-grid fade-in">
            <div class="card">
              <h4>Sanitaire</h4>
              <p>CHU, Hôpitaux, Cliniques, SSR, HAD, centres de santé</p>
            </div>
            <div class="card">
              <h4>Médico-social</h4>
              <p>EHPAD, Handicap, Protection de l'enfance, Insertion</p>
            </div>
            <div class="card">
              <h4>Acteurs sectoriels</h4>
              <p>Fédérations, ARS, organismes de formation, EdTech santé</p>
            </div>
          </div>
          <div class="fade-in" style="margin-top: 48px; background: var(--color-light-alt); padding: 32px; border-radius: 16px;">
            <h3 style="margin-bottom: 24px;">Exemples de missions</h3>
            <ul style="line-height: 2; color: var(--color-text-gray);">
              <li><strong>Fondation médico-sociale</strong> : Formation IA pour 85% des cadres → autonomie en 3 mois</li>
              <li><strong>CH 500 lits</strong> : Projet stratégique 2025-2030 accéléré → 6 semaines vs 3 mois classiques</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section class="cta-final">
        <div class="cta-final-content fade-in">
          <h2>Construisons ensemble votre stratégie IA</h2>
          <p class="cta-final-subtitle">
            Un échange sans engagement pour comprendre vos enjeux et définir la meilleure approche.
          </p>
          <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
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
          <p>Échangeons sur vos projets IA en santé</p>
        </div>
      </div>

      <section class="section-light">
        <div class="container">
          {/* Introduction */}
          <div class="fade-in" style="text-align: center; max-width: 700px; margin: 0 auto 64px;">
            <p style="font-size: 1.125rem; line-height: 1.7; color: var(--color-text-gray);">
              Un échange de 30 minutes pour comprendre vos enjeux et vous orienter vers la solution la plus adaptée. 
              Sans engagement, en toute confidentialité.
            </p>
          </div>

          {/* Deux colonnes : Calendly + Formulaire */}
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 48px; margin-bottom: 64px;">
            {/* Colonne 1 - Calendly */}
            <div class="card fade-in">
              <h3 style="margin-bottom: 24px;">Prendre rendez-vous directement</h3>
              <p style="margin-bottom: 24px; color: var(--color-text-gray);">
                Choisissez un créneau dans mon agenda pour un échange visio de 30 minutes.
              </p>
              <a href="https://calendly.com/quube" target="_blank" rel="noopener" class="btn btn-primary" style="width: 100%;">
                Voir les créneaux disponibles
              </a>
            </div>

            {/* Colonne 2 - Formulaire */}
            <div class="card fade-in">
              <h3 style="margin-bottom: 24px;">Nous envoyer un message</h3>
              <form class="form-grid" action="#" method="post">
                <div class="form-group">
                  <label for="nom">Nom *</label>
                  <input type="text" id="nom" name="nom" required />
                </div>
                <div class="form-group">
                  <label for="prenom">Prénom *</label>
                  <input type="text" id="prenom" name="prenom" required />
                </div>
                <div class="form-group full-width">
                  <label for="email">Email professionnel *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group full-width">
                  <label for="organisation">Organisation</label>
                  <input type="text" id="organisation" name="organisation" placeholder="Nom de votre établissement" />
                </div>
                <div class="form-group full-width">
                  <label for="offre">Offre qui vous intéresse</label>
                  <select id="offre" name="offre">
                    <option value="">Sélectionnez une offre</option>
                    <option value="formation">Formation & Montée en compétences</option>
                    <option value="conseil">Conseil & Stratégie IA</option>
                    <option value="acceleration">Accélération de Projet (Signature)</option>
                    <option value="autre">Autre / Je ne sais pas encore</option>
                  </select>
                </div>
                <div class="form-group full-width">
                  <label for="message">Votre message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Décrivez brièvement votre besoin ou vos questions..."></textarea>
                </div>
                <div class="form-group full-width">
                  <button type="submit" class="btn btn-primary" style="width: 100%;">Envoyer le message</button>
                </div>
              </form>
            </div>
          </div>

          {/* Coordonnées */}
          <div class="fade-in" style="text-align: center; padding: 48px; background: var(--color-light-alt); border-radius: 16px; margin-bottom: 64px;">
            <h3 style="margin-bottom: 24px;">Nos coordonnées</h3>
            <p style="font-size: 1.125rem; line-height: 1.8; color: var(--color-text-gray);">
              <strong style="color: var(--color-text-dark);">QUUBE×IA Santé</strong><br />
              10 rue du Colisée<br />
              75008 Paris<br />
              <br />
              <a href="mailto:contact@quube.fr" style="color: var(--color-accent); font-weight: 600;">contact@quube.fr</a>
            </p>
          </div>

          {/* FAQ */}
          <div class="fade-in">
            <h2 style="text-align: center; margin-bottom: 48px;">Questions fréquentes</h2>
            <div style="max-width: 800px; margin: 0 auto;">
              <div class="faq-item">
                <button class="faq-question">
                  <span>Combien coûtent vos prestations ?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  <p>
                    Nos tarifs sont sur-mesure, adaptés à la taille de votre organisation, à la durée et à la complexité de la mission. 
                    Nous établissons systématiquement un devis détaillé après un premier échange gratuit de cadrage.
                  </p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Intervenez-vous dans toute la France ?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  <p>
                    Oui, nous intervenons partout en France. Les formations et le conseil peuvent se faire en présentiel ou en distanciel. 
                    Pour l'offre Accélération, nous travaillons majoritairement à distance avec des points d'étape réguliers.
                  </p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Nos données sont-elles sécurisées ?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  <p>
                    Absolument. Nous appliquons les standards RGPD et HDS. Selon les missions, nous utilisons des outils IA certifiés santé, 
                    ou nous travaillons sur des données anonymisées / pseudonymisées. Un audit de sécurité est réalisé avant chaque projet.
                  </p>
                </div>
              </div>

              <div class="faq-item">
                <button class="faq-question">
                  <span>Puis-je tester vos services avant de m'engager ?</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  <p>
                    Oui ! Nous proposons un premier échange gratuit de 30 minutes pour cadrer vos besoins. 
                    Pour les formations, nous pouvons organiser une session découverte courte (2h). 
                    Pour l'offre Accélération, nous pouvons démarrer par un petit périmètre pilote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>,
    { title: 'Contact' }
  )
})

export default app
