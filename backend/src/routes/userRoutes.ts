import express from 'express'
import { IUser } from '../models/user'
import { loginUser, registerUser } from '../controllers/authController'
import auth, { CustomRequest } from '../middleware/authMiddleware'

const router = express.Router()

router.post('/register', async (req, res) => {
  const userData: Partial<IUser> = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
  const registeredUser = await registerUser(userData)
  if (registeredUser.error) {
    return res.status(400).json({
      error: registeredUser.error,
    })
  }
  return res.status(201).json(registeredUser)
})

router.post('/login', async (req, res) => {
  const userData: Partial<IUser> = {
    username: req.body.username,
    password: req.body.password,
  }
  const loggedInUser = await loginUser(userData)
  if (loggedInUser?.error) {
    return res.status(400).json({
      error: loggedInUser.error,
    })
  }
  return res.status(200).json(loggedInUser)
})

// Fetch logged in user
router.get('/me', auth, async (req: CustomRequest, res) => {
  return res.status(200).json({
    user: req.user,
  })
})

// Logout user
router.post('/logout', auth, async (req: CustomRequest, res) => {
  if (req.user) {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()
  }

  return res.status(200).json({
    message: 'User logged out successfully.',
  })
})

// Logout user from all devices
router.post('/logoutall', auth, async (req: CustomRequest, res) => {
  if (req.user) {
    req.user.tokens = []
    await req.user.save()
  }
  return res.status(200).json({
    message: 'User logged out from all devices successfully.',
  })
})

export default router