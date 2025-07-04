import { MongoClient, ServerApiVersion } from "mongodb";

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

/**
 * @type MongoClient
 */
let dbClient;

/**
 * Get the current database connection and create one if needed.
 */
export async function db() {
  return dbClient ?? (await dbConnect())
}

/**
 * Connects to the database.
 */
async function dbConnect() {
  const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.ga86qql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  const client = new MongoClient(uri, {
    serverApi:
    {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })

  await client.connect()

  return client
}
