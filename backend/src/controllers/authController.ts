import User from '../models/User'
import { IUser } from '../models/User'

export const registerUser = async (user: Partial<IUser>) => {
  const { first_name, last_name, username, email, password } = user;

  if (!first_name || !last_name || !username || !email || !password) {
    return {
      error: 'Please provide all the required fields',
    }
  }
  const existingUser = await User.findOne({ email, username });
  if (existingUser) {
    return {
      error: 'User with that email already exists.',
    }
  }
  const newUser = new User({ first_name, last_name, username, email, password });
  await newUser.save();
  const token = await newUser.generateAuthToken();
  return {
    user: newUser,
    token,
  }
}

export const loginUser = async (user: Partial<IUser>) => {
  const { username, password } = user;
  if (!username || !password) {
    return {
      error: 'Please provide all the required fields',
    };
  }

  try {
    const existingUser = await User.findByCredentials(username, password);
    const token = await existingUser.generateAuthToken();
    
    return {
      user: existingUser,
      token,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.name === 'UserNotFound') {
        return {
          error: 'User not found',
        };
      } else if (error.name === 'IncorrectPassword') {
        return {
          error: 'Incorrect password',
        };
      } else {
        return {
          error: 'Login failed! Check authentication credentials',
        };
      }
    } else {
      return {
        error: 'An unexpected error occurred',
      };
    }
  }
};