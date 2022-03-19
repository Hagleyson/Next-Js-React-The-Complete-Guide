import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = MongoClient.connect(
    "mongodb+srv://hagleyson:6XL23u7PfjF0Zwr3@Cluster0.fyrgo.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
}
