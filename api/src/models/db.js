import mongoose from 'mongoose';
import {dbUri} from '../utils/dbUri.js';

/**
 * Connects to the database.
 */
export async function dbConnect() {
  await mongoose.connect(dbUri());
}

/**
 * Disconnects from the database.
 */
export async function dbDisconnect() {
  await mongoose.disconnect();
}
