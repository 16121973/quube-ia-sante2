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
          <h1 class="fade-in" style="font-size: clamp(3rem, 12vw, 9rem) !important;">Nos services</h1>
          <p class="hero-subtitle fade-in">Trois approches complémentaires pour réussir votre transformation IA</p>
        </div>
      </section>

      {/* Section Formation */}
      <section class="section-light" id="formation">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Formation & Montée en compétences</h2>
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
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Conseil & Stratégie IA</h2>
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
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Accélération de Projet</h2>
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
            <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5.5rem) !important;">Notre méthodologie en 5 phases</h2>
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
