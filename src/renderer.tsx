import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | QUUBE IA Santé` : 'QUUBE IA Santé - Conseil & Formation IA pour le secteur Santé'}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="/static/styles.css" rel="stylesheet" />
      </head>
      <body>
        {/* Header */}
        <header class="header">
          <div class="header-container">
            <a href="/" class="logo">
              QUUBE<span>×</span>IA Santé
            </a>
            <nav class="nav">
              <a href="/offres" class="nav-link">Nos offres</a>
              <a href="/cas-usage" class="nav-link">Cas d'usage</a>
              <a href="/a-propos" class="nav-link">Qui sommes-nous</a>
              <a href="/contact" class="btn btn-primary">Contact</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer class="footer">
          <div class="container">
            <div class="footer-content">
              <div class="footer-section">
                <h4>QUUBE×IA Santé</h4>
                <p style="font-size: 0.9rem; color: var(--color-text-secondary);">
                  Conseil et formation en intelligence artificielle pour le secteur santé et médico-social
                </p>
              </div>
              <div class="footer-section">
                <h4>Navigation</h4>
                <ul class="footer-links">
                  <li><a href="/">Accueil</a></li>
                  <li><a href="/offres">Nos offres</a></li>
                  <li><a href="/cas-usage">Cas d'usage</a></li>
                  <li><a href="/a-propos">Qui sommes-nous</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h4>Contact</h4>
                <ul class="footer-links">
                  <li><a href="mailto:contact@quube.fr">contact@quube.fr</a></li>
                  <li><a href="https://calendly.com/quube" target="_blank">Prendre rendez-vous</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom">
              <p>© 2026 QUUBE×IA Santé — Conseil & Formation en Intelligence Artificielle pour le secteur Santé</p>
            </div>
          </div>
        </footer>

        {/* Scripts */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
