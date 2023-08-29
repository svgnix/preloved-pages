import mongoose from 'mongoose';

const connection = {
    isConnected: false
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  let db = await mongoose.connect('mongodb+srv://kirattechnologies:iRbi4XRDdM7JMMkl@cluster0.e95bnsi.mongodb.net/admin?authSource=admin&replicaSet=atlas-ue73sj-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

  connection.isConnected = true;
}

export default dbConnect;
