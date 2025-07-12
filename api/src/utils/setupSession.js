import session from 'express-session';
import mongodbSession from 'connect-mongodb-session';
import {dbUri} from './dbUri.js';

/**
 * Creates a new express session manager middleware.
 * @returns {Promise<ReturnType<typeof session>>}
 */
export async function setupSession() {
  const MongoDBStore = mongodbSession(session);
  const store = new MongoDBStore({
    uri: dbUri(),
    collection: 'sessions',
  });

  store.on('error', error => {
    console.error(error);
  });

  return session({
    secret: [process.env.SESSION_SECRET, process.env.SESSION_SECRET_OLD],
    saveUninitialized: true,
    resave: true,
    store,
  });
}
