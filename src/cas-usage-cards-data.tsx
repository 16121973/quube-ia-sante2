// Toutes les 23 cartes de cas d'usage avec leur contenu complet
// À intégrer dans la route /cas-usage de index.tsx

export const casUsageCards = () => (
  <>
    {/* ============================================ */}
    {/* DIRECTION / TERRAIN (cartes 1, 4, 9)        */}
    {/* ============================================ */}

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

    {/* ============================================ */}
    {/* SOINS & ACCOMPAGNEMENT (cartes 2, 5, 6)    */}
    {/* ============================================ */}

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

    {/* Card 6 - Transmissions ciblées */}
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

    {/* ============================================ */}
    {/* ÉDUCATIF (cartes 3, 8)                      */}
    {/* ============================================ */}

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

    {/* ============================================ */}
    {/* DATA / PILOTAGE / FINANCE (cartes 10-13)   */}
    {/* ============================================ */}

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

    {/* ============================================ */}
    {/* RH RENFORCÉ (cartes 7, 14-16)              */}
    {/* ============================================ */}

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

    {/* ============================================ */}
    {/* QUALITÉ / ACHATS / CONTRÔLE (cartes 17-19) */}
    {/* ============================================ */}

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

    {/* ============================================ */}
    {/* STRATÉGIE / OPEN DATA (cartes 20-23)       */}
    {/* ============================================ */}

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
  </>
)
