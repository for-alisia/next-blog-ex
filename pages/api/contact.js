import { MongoClient } from 'mongodb';
import { user, password } from '../../mongo.credentials';

export default async function (req, res) {
  if (req.method === 'POST') {
    const {
      body: { email, name, message },
    } = req;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid inputs' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${user}:${password}@clustertest.zi0j3.mongodb.net/nextBlog?retryWrites=true&w=majority`
      );
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db();

    let result;

    try {
      result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      res.status(500).json({ message: 'DB error' });
      client.close();
      return;
    }

    client.close();

    res.status(201).json({ message: 'Successfully stored message', content: newMessage });
  }
}
