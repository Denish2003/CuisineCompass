import express from 'express'
import { IUser } from '../models/User'
import { loginUser, registerUser } from '../controllers/authController'
import auth, { CustomRequest } from '../middleware/authMiddleware'

const router = express.Router()

router.post("/register", async (req, res) => {
  const userData: Partial<IUser> = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
  try {
    const registeredUser = await registerUser(req.body);
    if (registeredUser.error) {
        return res.status(400).json({ error: registeredUser.error });
    }
    return res.status(201).json(registeredUser);
  } catch (error) {
      console.error('Error in register endpoint:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.post("/login", async (req, res) => {
  const userData: Partial<IUser> = {
    username: req.body.username,
    password: req.body.password,
  }

  try {
    const loggedInUser = await loginUser(userData);
    if (loggedInUser?.error) {
      return res.status(400).json({ error: loggedInUser.error });
    }
    return res.status(200).json(loggedInUser);
  } catch (error) {
      console.error('Error in login endpoint:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
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