import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("already connected!")
    return;
  }

  const db = await mongoose.connect(process.env.NEXTAUTH_DB_URL);
  connection.isConnected = db.connections[0].readyState;
  console.log("mongoDB Connected!!!")
}

export default dbConnect;
