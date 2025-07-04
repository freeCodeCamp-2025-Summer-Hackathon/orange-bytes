import { MongoClient, ServerApiVersion } from "mongodb";

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export function dbConnect() {
  const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.ga86qql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  const client = new MongoClient(uri, {
    serverApi:
    {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })

  return { client }
}
