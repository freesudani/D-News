import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://freesudani:12Monkeys123@cluster0.yg0f1.mongodb.net/SudaneseCuisuinDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const mealsCollection = db.collection("meals");

    const result = await mealsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meal inserted!" });
  }
}

export default handler;
