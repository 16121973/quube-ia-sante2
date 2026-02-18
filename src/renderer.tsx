import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | QUUBE·IA Santé` : 'QUUBE·IA Santé - Cabinet de conseil et formation en IA pour la santé'}</title>
        <meta name="description" content="Studio d'accélération des usages IA. Santé & Médico-social — Cas d'usage concrets, mis en routine avec vos équipes, autonomie transférée." />
        <meta name="keywords" content="IA santé, intelligence artificielle santé, formation IA, conseil IA, médico-social, établissements santé, QUUBE" />
        <meta name="author" content="QUUBE·IA Santé" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title ? `${title} | QUUBE·IA Santé` : 'QUUBE·IA Santé - Conseil IA en Santé'} />
        <meta property="og:description" content="Studio d'accélération des usages IA. Santé & Médico-social — Cas d'usage concrets, mis en routine avec vos équipes, autonomie transférée." />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Favicon optimisé */}
        {/* Police TWK Everett via Adobe Fonts (fallback Arial + Inter) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preload" href="/static/styles.css" as="style" />
        <link href="/static/styles.css" rel="stylesheet" />
      </head>
      <body class="site-container">
        {/* Header - Charte QUUBE officielle */}
        <header role="banner">
          <div class="container">
            <a href="/" class="logo" aria-label="QUUBE - Retour à l'accueil">
              <img src="/static/logo-quube.svg" alt="QUUBE" class="logo-img" height="48" />
            </a>
            <nav class="desktop-nav" role="navigation" aria-label="Navigation principale">
              <a href="/">Accueil</a>
              <a href="/services">Nos services</a>
              <a href="/cas-usage">Cas d'usage</a>
              <a href="/a-propos">Qui sommes-nous</a>
              <a href="/contact" class="btn-contact">Contact</a>
            </nav>
            <button class="mobile-menu-toggle" aria-label="Ouvrir le menu" id="mobile-menu-btn">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </button>
          </div>
        </header>

        {/* Menu Mobile Overlay - Plein écran vert QUUBE */}
        <div class="mobile-menu-overlay" id="mobile-menu">
          <button class="mobile-menu-close" aria-label="Fermer le menu" id="mobile-menu-close">✕</button>
          <nav class="mobile-nav" role="navigation" aria-label="Menu mobile">
            <a href="/" class="mobile-nav-link">Accueil</a>
            <a href="/services" class="mobile-nav-link">Nos services</a>
            <a href="/cas-usage" class="mobile-nav-link">Cas d'usage</a>
            <a href="/a-propos" class="mobile-nav-link">Qui sommes-nous</a>
            <a href="/contact" class="mobile-nav-link mobile-nav-cta">Contact</a>
          </nav>
        </div>

        {/* Contenu principal */}
        <main role="main" aria-label="Contenu principal">
          {children}
        </main>

        {/* Footer - Charte QUUBE officielle */}
        <footer role="contentinfo">
          <div class="container">
            <div class="footer-content">
              {/* Colonne 1 - Identité */}
              <div class="footer-section">
                <h4>QUUBE·IA Santé</h4>
                <p>
                  Studio d'accélération des usages IA<br />
                  Santé & Médico-social — Cas d'usage concrets, mis en routine avec vos équipes, autonomie transférée.
                </p>
                <p>
                  <strong>10 rue du Colisée</strong><br />
                  75008 Paris
                </p>
                <p>
                  <a href="mailto:contact@quube.fr">contact@quube.fr</a>
                </p>
              </div>

              {/* Colonne 2 - Navigation */}
              <div class="footer-section">
                <h4>Navigation</h4>
                <a href="/">Accueil</a>
                <a href="/services">Nos services</a>
                <a href="/cas-usage">Cas d'usage</a>
                <a href="/a-propos">Qui sommes-nous</a>
                <a href="/contact">Contact</a>
              </div>

              {/* Colonne 3 - Contact & Social */}
              <div class="footer-section">
                <h4>Contactez-nous</h4>
                <p>
                  Échangeons sur vos projets IA en santé.
                </p>
                <a href="/contact" class="btn-primary" style="margin-top: 16px; display: inline-block;">Prendre rendez-vous</a>
                <div class="footer-social">
                  <a href="https://www.linkedin.com/company/quube-ia-sante" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div class="footer-bottom">
              © {new Date().getFullYear()} QUUBE·IA Santé. Tous droits réservés.
            </div>
          </div>
        </footer>

        {/* JavaScript */}
        <script src="/static/app.js" defer></script>
      </body>
    </html>
  )
})
