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
    <div>
      <h1>Page d'accueil - En construction</h1>
      <p>Le PROMPT 0 est en cours d'exécution...</p>
    </div>,
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
