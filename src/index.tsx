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
    <>
      {/* Hero Section */}
      <section class="hero" style="min-height: 60vh;">
        <div class="hero-content">
          <h1>Nos offres</h1>
          <p style="max-width: 800px; margin: 0 auto;">
            De la première sensibilisation au déploiement opérationnel, nous vous accompagnons à chaque étape de votre transformation IA. 
            Trois offres complémentaires, une seule exigence : des résultats concrets.
          </p>
        </div>
      </section>

      {/* OFFRE 1 - FORMATION */}
      <section id="formation" class="section section-light offer-section">
        <div class="container">
          <div class="offer-header animate-on-scroll">
            <h2>Formation & Montée en compétences</h2>
            <p>Vos équipes deviennent autonomes sur l'IA. Du dirigeant au professionnel de terrain, des programmes progressifs 100% santé.</p>
          </div>

          <div class="service-cards">
            {/* Conférences */}
            <div class="service-card animate-on-scroll">
              <h3>🎤 Conférences IA Inspirantes</h3>
              <div class="service-meta">
                <span><strong>Public :</strong> COMEX, CODIR, CSE, CME</span>
                <span><strong>Durée :</strong> 2h</span>
                <span><strong>Format :</strong> 50-200 personnes</span>
              </div>
              <div class="service-content">
                <p><strong>Contenu :</strong></p>
                <ul>
                  <li>Démystification de l'IA et de ses applications en santé</li>
                  <li>Exemples concrets et retours d'expérience sectoriels</li>
                  <li>Démonstrations live d'outils IA</li>
                  <li>État de l'art et perspectives d'évolution</li>
                </ul>
              </div>
              <div class="service-deliverables">
                <strong>📦 Livrables :</strong> Support de présentation + Démonstration en live
              </div>
            </div>

            {/* Coaching */}
            <div class="service-card animate-on-scroll">
              <h3>👔 Coaching IA pour Dirigeants</h3>
              <div class="service-meta">
                <span><strong>Public :</strong> DG, Directeurs</span>
                <span><strong>Format :</strong> 3-6 séances (1h30)</span>
                <span><strong>Mode :</strong> Confidentiel</span>
              </div>
              <div class="service-content">
                <p><strong>Contenu :</strong></p>
                <ul>
                  <li>Appropriation personnalisée des outils IA</li>
                  <li>Construction d'une vision stratégique IA</li>
                  <li>Anticipation des impacts managériaux</li>
                  <li>Cas d'usage adaptés à votre contexte</li>
                </ul>
              </div>
              <div class="service-deliverables">
                <strong>📦 Livrables :</strong> Plan d'action personnel + Hotline 3 mois
              </div>
            </div>
          </div>

          {/* Formations collectives - 3 niveaux */}
          <h3 style="margin-top: var(--spacing-xl); text-align: center; color: var(--color-navy);">
            Formations collectives — 3 niveaux progressifs
          </h3>
          
          <div class="formation-levels">
            {/* Niveau Découverte */}
            <div class="level-card level-debutant animate-on-scroll">
              <span class="level-badge">🌱 DÉCOUVERTE</span>
              <h3>Niveau Débutant</h3>
              <div class="level-meta">
                <strong>Durée :</strong> 0,5 jour (3h30)<br/>
                <strong>Cible :</strong> Nouveaux utilisateurs
              </div>
              <ul>
                <li>Qu'est-ce que l'IA générative ?</li>
                <li>Premiers pas avec ChatGPT/Claude</li>
                <li>5 cas d'usage simples pour démarrer</li>
                <li>Bonnes pratiques RGPD et sécurité</li>
              </ul>
              <div class="level-deliverable">
                ✓ Guide de démarrage + 10 prompts métier
              </div>
            </div>

            {/* Niveau Productivité */}
            <div class="level-card level-intermediaire animate-on-scroll">
              <span class="level-badge">📈 PRODUCTIVITÉ</span>
              <h3>Niveau Intermédiaire</h3>
              <div class="level-meta">
                <strong>Durée :</strong> 1 jour<br/>
                <strong>Cible :</strong> Utilisateurs réguliers
              </div>
              <ul>
                <li>Techniques de prompting avancé</li>
                <li>Chaînage de prompts pour tâches complexes</li>
                <li>Intégration avec Office 365</li>
                <li>Cas d'usage métier approfondis</li>
              </ul>
              <div class="level-deliverable">
                ✓ Bibliothèque de prompts + Charte d'usage
              </div>
            </div>

            {/* Niveau Maîtrise */}
            <div class="level-card level-expert animate-on-scroll">
              <span class="level-badge">🎓 MAÎTRISE</span>
              <h3>Niveau Expert</h3>
              <div class="level-meta">
                <strong>Durée :</strong> 2 jours<br/>
                <strong>Cible :</strong> Référents IA, chefs de projet
              </div>
              <ul>
                <li>Automatisation de workflows IA</li>
                <li>APIs et intégrations techniques</li>
                <li>Benchmark et choix de solutions</li>
                <li>Formation de formateurs internes</li>
              </ul>
              <div class="level-deliverable">
                ✓ Attestation de formation QUUBE + Kit de déploiement
              </div>
            </div>
          </div>

          {/* Sur-mesure */}
          <div class="service-card animate-on-scroll" style="margin-top: var(--spacing-lg); background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
            <h3>🎯 Formations Sur-mesure</h3>
            <p>Approfondissements outils spécifiques (Claude, Copilot, etc.), analyse de données avec IA, automatisations simples, optimisation de workflows — nous consulter pour un programme adapté à vos besoins.</p>
          </div>
        </div>
      </section>

      {/* OFFRE 2 - CONSEIL */}
      <section id="conseil" class="section section-light offer-section">
        <div class="container">
          <div class="offer-header animate-on-scroll">
            <h2>Conseil & Stratégie IA</h2>
            <p>Structurez et déployez votre transformation IA. Du diagnostic initial au pilotage opérationnel, un accompagnement sur-mesure.</p>
          </div>

          <div class="service-cards">
            {/* Diagnostic */}
            <div class="service-card animate-on-scroll">
              <h3>🔍 Diagnostic Flash & Feuille de Route</h3>
              <div class="service-meta">
                <span><strong>Public :</strong> DG, DSI</span>
                <span><strong>Durée :</strong> 2-5 jours selon taille</span>
              </div>
              <div class="service-content">
                <p><strong>Contenu :</strong></p>
                <ul>
                  <li>Audit de maturité IA (processus, données, culture)</li>
                  <li>Cartographie des cas d'usage prioritaires</li>
                  <li>Analyse des quick wins et opportunités</li>
                  <li>Priorisation par ROI et faisabilité</li>
                </ul>
              </div>
              <div class="service-deliverables">
                <strong>📦 Livrables :</strong>
                <ul style="margin-top: 0.5rem;">
                  <li>Rapport diagnostic + scoring maturité</li>
                  <li>Feuille de route IA à 3 ans</li>
                  <li>Matrice priorisation cas d'usage</li>
                  <li>Recommandations gouvernance</li>
                </ul>
              </div>
            </div>

            {/* Aide au choix */}
            <div class="service-card animate-on-scroll">
              <h3>🎯 Aide au Choix des Solutions IA</h3>
              <div class="service-meta">
                <span><strong>Public :</strong> DSI, Directions métiers, Achats</span>
                <span><strong>Durée :</strong> 3-10 jours</span>
              </div>
              <div class="service-content">
                <p><strong>Contenu :</strong></p>
                <ul>
                  <li>Analyse besoins métiers et techniques</li>
                  <li>Benchmark neutre du marché des solutions</li>
                  <li>Grille d'évaluation multicritères</li>
                  <li>Organisation POC/démos avec éditeurs</li>
                  <li>Accompagnement négociation</li>
                </ul>
              </div>
              <div class="service-deliverables">
                <strong>📦 Livrables :</strong>
                <ul style="margin-top: 0.5rem;">
                  <li>Cahier des charges fonctionnel</li>
                  <li>Benchmark comparatif (5-10 solutions)</li>
                  <li>Recommandation argumentée</li>
                  <li>Support présentation COMEX</li>
                </ul>
              </div>
            </div>

            {/* Pilotage */}
            <div class="service-card animate-on-scroll">
              <h3>⚙️ Pilotage de Projet IA</h3>
              <div class="service-meta">
                <span><strong>Public :</strong> DSI, Directions métiers, Chefs de projet</span>
              </div>
              <div class="service-content">
                <ul>
                  <li>Pilotage MOA/MOE</li>
                  <li>Méthodologie agile adaptée santé</li>
                  <li>Coordination éditeurs/SI</li>
                  <li>Tests et recette</li>
                  <li>Déploiement progressif</li>
                </ul>
              </div>
            </div>

            {/* Conduite changement */}
            <div class="service-card animate-on-scroll">
              <h3>🚀 Conduite du Changement</h3>
              <div class="service-meta">
                <span><strong>Public :</strong> DRH, Communication, Managers</span>
              </div>
              <div class="service-content">
                <ul>
                  <li>Plan de communication interne</li>
                  <li>Identification ambassadeurs IA</li>
                  <li>Formation utilisateurs finaux</li>
                  <li>Accompagnement des résistances</li>
                  <li>Support post-déploiement</li>
                </ul>
              </div>
            </div>

            {/* Mesure ROI */}
            <div class="service-card animate-on-scroll">
              <h3>📊 Mesure de ROI & Amélioration Continue</h3>
              <div class="service-meta">
                <span><strong>Public :</strong> DG, Contrôle de gestion, DSI</span>
              </div>
              <div class="service-deliverables">
                <strong>📦 Livrables :</strong>
                <ul style="margin-top: 0.5rem;">
                  <li>Tableau de bord ROI</li>
                  <li>Rapport d'impact mesurable</li>
                  <li>Benchmark interne</li>
                  <li>Recommandations d'optimisation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRE 3 - ACCÉLÉRATION (Featured) */}
      <section id="acceleration" class="section section-dark offer-section">
        <div class="container">
          <div class="offer-header animate-on-scroll">
            <div style="display: inline-block; background: var(--color-accent); color: white; padding: 0.5rem 1.5rem; border-radius: 20px; font-size: 0.875rem; font-weight: 700; margin-bottom: 1rem;">
              ★ OFFRE SIGNATURE
            </div>
            <h2 style="color: white;">L'IA accélère vos projets stratégiques</h2>
            <p style="color: var(--color-text-secondary);">
              L'IA comme outil de production du conseil. Délais ÷2-3, coûts réduits, transfert de compétences inclus.
            </p>
          </div>

          {/* 3 Avantages */}
          <div class="advantages-grid animate-on-scroll">
            <div class="advantage-item">
              <div class="advantage-icon">⏱️</div>
              <h4 style="color: white;">Délais ÷ 2 à 3</h4>
              <p style="color: var(--color-text-secondary);">Accélération massive de la production des livrables grâce à l'IA en co-pilote</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">💰</div>
              <h4 style="color: white;">Coûts Réduits</h4>
              <p style="color: var(--color-text-secondary);">Tarif compétitif vs. cabinets classiques grâce à l'efficacité de l'IA</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">🎓</div>
              <h4 style="color: white;">Transfert Inclus</h4>
              <p style="color: var(--color-text-secondary);">Vos équipes montent en compétence IA en situation réelle de travail</p>
            </div>
          </div>

          {/* Projets éligibles */}
          <h3 style="margin-top: var(--spacing-xl); text-align: center; color: white;">
            Projets Éligibles
          </h3>
          
          <div class="project-categories animate-on-scroll">
            <div class="project-category">
              <h4>📋 Stratégie & Gouvernance</h4>
              <ul>
                <li>Projet d'établissement</li>
                <li>Projet de service</li>
                <li>CPOM (Contrat Pluriannuel)</li>
                <li>Schéma directeur SI</li>
              </ul>
            </div>

            <div class="project-category">
              <h4>💼 Développement & Financement</h4>
              <ul>
                <li>Réponse AAP / AMI</li>
                <li>Business plan / Étude faisabilité</li>
                <li>Dossier de financement</li>
                <li>Nouveau modèle économique</li>
              </ul>
            </div>

            <div class="project-category">
              <h4>🔄 Transformation</h4>
              <ul>
                <li>Transformation offre services</li>
                <li>Diversification (habitat, SSIAD...)</li>
                <li>Réorganisation services</li>
                <li>Optimisation performance</li>
              </ul>
            </div>

            <div class="project-category">
              <h4>📊 Analyse & Benchmark</h4>
              <ul>
                <li>Étude de marché / Positionnement</li>
                <li>Benchmark concurrentiel</li>
                <li>Analyse réglementaire</li>
                <li>Revue littérature / État art</li>
              </ul>
            </div>
          </div>

          {/* Tableau des gains */}
          <h3 style="margin-top: var(--spacing-xl); text-align: center; color: white;">
            Gains de Temps Mesurés
          </h3>
          
          <div class="gains-table-wrapper animate-on-scroll">
            <table class="gains-table">
              <thead>
                <tr>
                  <th>Type de Projet</th>
                  <th>Délai Classique</th>
                  <th>Délai Augmenté</th>
                  <th>Gain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Réponse AAP</strong></td>
                  <td>3-4 semaines</td>
                  <td>1-2 semaines</td>
                  <td class="gain-highlight">50-60%</td>
                </tr>
                <tr>
                  <td><strong>Business Plan</strong></td>
                  <td>2-3 semaines</td>
                  <td>5-7 jours</td>
                  <td class="gain-highlight">60-70%</td>
                </tr>
                <tr>
                  <td><strong>Projet d'Établissement</strong></td>
                  <td>3-4 mois</td>
                  <td>6-8 semaines</td>
                  <td class="gain-highlight">50%</td>
                </tr>
                <tr>
                  <td><strong>Étude de Diversification</strong></td>
                  <td>6-8 semaines</td>
                  <td>2-3 semaines</td>
                  <td class="gain-highlight">60-65%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Méthode binôme */}
          <h3 style="margin-top: var(--spacing-xl); text-align: center; color: white;">
            Méthode : Travail en Binôme
          </h3>
          
          <div class="method-steps animate-on-scroll">
            <div class="method-step">
              <div class="step-number">1</div>
              <h4>Cadrage</h4>
              <p>
                Consultant QUUBE structure le projet et définit les workflows IA. 
                Référent client apporte la connaissance terrain.
              </p>
            </div>

            <div class="method-step">
              <div class="step-number">2</div>
              <h4>Production</h4>
              <p>
                Consultant pilote l'IA et affine les outputs. 
                Référent co-produit en temps réel et apprend les techniques.
              </p>
            </div>

            <div class="method-step">
              <div class="step-number">3</div>
              <h4>Livraison</h4>
              <p>
                Livrables projet finalisés + Kit de transfert IA 
                (prompts, templates, méthodologie reproductible).
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: var(--spacing-xl);" class="animate-on-scroll">
            <a href="/contact" class="btn btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">
              Accélérez votre prochain projet →
            </a>
            <p style="margin-top: var(--spacing-md); color: var(--color-text-secondary);">
              Échangeons sur votre projet stratégique et son potentiel d'accélération
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section section-light">
        <div class="container">
          <div class="cta-section animate-on-scroll">
            <h2>Prêt à démarrer ?</h2>
            <p>Un premier échange de 30 minutes pour identifier l'offre qui correspond à vos besoins.</p>
            <a href="/contact" class="btn btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">
              Prendre rendez-vous
            </a>
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
