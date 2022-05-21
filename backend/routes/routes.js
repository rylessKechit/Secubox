const passport = require ('passport')
const {Router} = require('express')
const { connexion, inscription } = require('../controllers/ctrl')
const router = Router()

router.post('/inscription', inscription)
router.post('/connexion', connexion)

router.use(passport.authenticate("jwt", {session : false}))
router.get('/', (req, res)=> {
    res.send('Route protégée')
})

// rajouter une route, qui recoit une adresse mail et mot de passe et renvoi un jwt (token)

module.exports = router