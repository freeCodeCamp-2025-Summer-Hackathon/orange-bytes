import express from 'express';
import {createUser, loginUser} from '../models/user.js';

export const usersRouter = express.Router();

usersRouter.post('/users', async (req, res) => {
  const {name, username, password} = req.body;

  if (typeof name !== 'string' || name.trim().length === 0) {
    res.status(400).json({error: 'Must have a name.'});
    return;
  }
  if (typeof username !== 'string' || username.trim().length === 0) {
    res.status(400).json({error: 'Username is required'});
    return;
  }
  if (typeof password !== 'string' || password.trim().length === 0) {
    res.status(400).json({error: 'Password is required'});
    return;
  }

  try {
    const newUser = await createUser(name, username, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

usersRouter.post('/login', async (req, res) => {
  const {username, password} = req.body;
  try {
    const user = await loginUser(username, password);
    req.session.user = user;
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});
