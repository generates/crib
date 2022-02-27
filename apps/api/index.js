import dotenv from 'dotenv'
import * as whip from '@generates/whip'
import accounts from '@generates/whip-accounts'
import stripe from 'stripe'

dotenv.config()

const app = whip.create({
  logger: { level: 'debug' }
})

app.add({
  plugin: accounts,
  opts: {
    email: {
      transport: {
        ignoreTLS: true,
        host: 'localhost',
        port: 25
      }
    },
    sessions: { secret: 'realshitnevertellalie' }
  }
})

app.use(function stripeMiddleware (req, res, next) {
  req.stripe = stripe(process.env.STRIPE_ACCOUNT_ID)
  next()
})

app.add({ plugin: accounts })

app.get('/', (req, res) => res.json({ name: 'api', version: '1.0.0' }))

app.get('/session', ...accounts.getSession)

app.post('/sign-up', ...accounts.signUp)

app.post('/sign-in', ...accounts.signIn)

app.delete('/sign-out', ...accounts.signOut)

app.post('/forgot-password', ...accounts.forgotPassword)

app.post('/reset-password', ...accounts.resetPassword)

app.put('/account', ...accounts.saveAccount)

export default app
